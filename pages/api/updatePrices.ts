import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core';
import { concatPagination } from '@apollo/client/utilities';
import { NextApiRequest, NextApiResponse } from 'next';
import jwt, { Algorithm } from 'jsonwebtoken';
import _alpha from 'alphavantage';
import withSession from '../../lib/session';
import { InsertLogMutation, InsertLogMutationVariables, InsertLogDocument, PricesToUpdateQuery, PricesToUpdateDocument } from '../../types/generated/graphql';

const alpha = _alpha({ key: process.env.ALPHA_VANTAGE_KEY || '' });

export default withSession(async (req: NextApiRequest, res: NextApiResponse) => {
  if (!process.env.JWT_SECRET_KEY) {
    return res.status(401).send('Missing JWT_SECRET_KEY');
  }
  if (req.headers.apitoken !== process.env.API_TOKEN) {
    return res.status(401).send('Please provide the api token');
  }

  const token = jwt.sign(
    {
      'https://hasura.io/jwt/claims': {
        'x-hasura-allowed-roles': ['admin', 'login', 'user', 'anonymous', 'api'],
        'x-hasura-default-role': 'api',
      },
    },
    process.env.JWT_SECRET_KEY,
    {
      algorithm: process.env.JWT_SECRET_TYPE as Algorithm,
      expiresIn: '1m',
    }
  );

  const client = new ApolloClient({
    link: new HttpLink({
      uri: 'https://mikepombal-portfolio.herokuapp.com/v1/graphql',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      credentials: 'same-origin',
    }),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            allPosts: concatPagination(),
          },
        },
      },
    })
  });

  // Get the list of tickets to be updated
  const tickets = await client.query<PricesToUpdateQuery>({ query: PricesToUpdateDocument });

  if (!tickets.data) {
    return res.status(200).send('No tickets to be updated');
  }
  const ticketsToUpdate = tickets.data.prices_update_due.reduce<string[]>((acc, ticket) => ticket.ticket ? [...acc, ticket.ticket]: acc, []);

  const prices = await Promise.all(ticketsToUpdate.map(ticket => alpha.data.quote(ticket)));

  const detail = prices.reduce<string>((acc, price) => price["Global Quote"]["01. symbol"] &&  `${acc} ${price["Global Quote"]["01. symbol"]}: ${price["Global Quote"]["05. price"]}, `, '');

  const variables: InsertLogMutationVariables = {
    contract: 'updatePrices',
    detail
  };
  const result = await client.mutate<InsertLogMutation, InsertLogMutationVariables>({ mutation: InsertLogDocument, variables });


  res.json({ test: JSON.stringify(result) });
});