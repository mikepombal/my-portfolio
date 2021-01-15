import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core';
import { concatPagination } from '@apollo/client/utilities';
import { NextApiRequest, NextApiResponse } from 'next';
import jwt, { Algorithm } from 'jsonwebtoken';
import _alpha from 'alphavantage';
import withSession from '../../lib/session';
import {
  InsertLogMutation,
  InsertLogMutationVariables,
  InsertLogDocument,
  PricesToUpdateQuery,
  PricesToUpdateDocument,
} from '../../types/generated/graphql';

const alpha = _alpha({ key: process.env.ALPHA_VANTAGE_KEY || '' });
const LIMIT_ALPHA_CALLS = 5;

const getPrices = async (tickets: Array<string>) => {
  try {
    const prices = await Promise.all(
      tickets
        .slice(0, LIMIT_ALPHA_CALLS)
        .map((ticket) => alpha.data.quote(ticket))
    );

    return prices;
  } catch (_) {
    return [];
  }
};

export default withSession(
  async (req: NextApiRequest, res: NextApiResponse) => {
    if (!process.env.JWT_SECRET_KEY) {
      return res.status(401).send('Missing JWT_SECRET_KEY');
    }
    if (req.headers.apitoken !== process.env.API_TOKEN) {
      return res.status(401).send('Please provide the api token');
    }

    const token = jwt.sign(
      {
        'https://hasura.io/jwt/claims': {
          'x-hasura-allowed-roles': [
            'admin',
            'login',
            'user',
            'anonymous',
            'api',
          ],
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
      }),
    });

    // Get the list of tickets to be updated
    const tickets = await client.query<PricesToUpdateQuery>({
      query: PricesToUpdateDocument,
    });

    if (!tickets.data) {
      return res.status(200).send('No tickets to be updated');
    }
    const ticketsToUpdate = tickets.data.prices_update_due.reduce<string[]>(
      (acc, ticket) => (ticket.ticket ? [...acc, ticket.ticket] : acc),
      []
    );

    const prices = await getPrices(ticketsToUpdate);

    interface PricesResult {
      ticketWithPrices: Array<{ ticket: string; price: string }>;
      ticketsToProcess: Array<string>;
    }
    const {
      ticketWithPrices,
      ticketsToProcess: ticketWithNoPrices,
    } = prices.reduce<PricesResult>(
      (acc, item) => {
        if (
          item['Global Quote']['01. symbol'] &&
          item['Global Quote']['05. price']
        ) {
          const ticket = item['Global Quote']['01. symbol'];
          return {
            ticketWithPrices: [
              ...acc.ticketWithPrices,
              { ticket, price: item['Global Quote']['05. price'] },
            ],
            ticketsToProcess: acc.ticketsToProcess.filter((t) => t !== ticket),
          };
        }
        return acc;
      },
      { ticketWithPrices: [], ticketsToProcess: [...ticketsToUpdate] }
    );

    // LOG the result
    const ticketWithPricesLog = ticketWithPrices.reduce<string>(
      (acc, item) => `${acc} ${item.ticket}: ${item.price}, `,
      'Tickets with prices:'
    );
    const ticketWithNoPricesLog =
      ticketWithNoPrices.length > 0
        ? `Tickets with no prices: [${ticketWithNoPrices.join(', ')}], `
        : '';

    const variables: InsertLogMutationVariables = {
      contract: 'updatePrices',
      detail: ticketWithNoPricesLog + ticketWithPricesLog,
    };
    const result = await client.mutate<
      InsertLogMutation,
      InsertLogMutationVariables
    >({ mutation: InsertLogDocument, variables });

    res.json({ test: JSON.stringify(result) });
  }
);
