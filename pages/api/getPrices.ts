import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core';
import { concatPagination } from '@apollo/client/utilities';
import { NextApiRequest, NextApiResponse } from 'next';
import jwt, { Algorithm } from 'jsonwebtoken';
import withSession from '../../lib/session';
import { InsertLogMutation, InsertLogMutationVariables, InsertLogDocument } from '../../types/generated/graphql';

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

  const variables: InsertLogMutationVariables = {
    contract: 'getPrices',
    detail: 'Test'
  };
  const result = await client.mutate<InsertLogMutation, InsertLogMutationVariables>({ mutation: InsertLogDocument, variables });


  res.json({ test: JSON.stringify(result) });
});