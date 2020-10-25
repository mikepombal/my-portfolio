import jwt, { Algorithm } from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { NextApiRequest, NextApiResponse } from 'next';
import { Session } from 'next-iron-session';
import withSession from '../../lib/session';
import { User } from '../../types/common';

const HASURA_OPERATION = `
  query getUser($username: String!) {
    users_by_pk(username: $username){
      username
      password
    }
  }
`;

const execute = async (
  variables: { username: string },
  sessionVariables: { Authorization: string }
) => {
  const fetchResponse = await fetch(process.env.HASURA_URL || '', {
    method: 'POST',
    body: JSON.stringify({
      query: HASURA_OPERATION,
      variables,
    }),
    headers: sessionVariables,
  });
  const result = await fetchResponse.json();
  return result;
};

interface Request extends NextApiRequest {
  session: Session;
}

export default withSession(async (req: Request, res: NextApiResponse) => {
  try {
    const {
      username,
      password,
    }: { username: string; password: string } = await req.body;

    if (!process.env.JWT_SECRET_KEY) {
      return res.status(401).send('Missing JWT_SECRET_KEY');
    }

    const loginToken = jwt.sign(
      {
        'https://hasura.io/jwt/claims': {
          'x-hasura-allowed-roles': ['admin', 'login', 'user', 'anonymous'],
          'x-hasura-default-role': 'login',
        },
      },
      process.env.JWT_SECRET_KEY,
      {
        algorithm: process.env.JWT_SECRET_TYPE as Algorithm,
        expiresIn: '1m',
      }
    );

    const { data, errors } = await execute(
      { username },
      { Authorization: `Bearer ${loginToken}` }
    );

    if (errors) {
      console.warn(errors);
      return res.status(401).send('');
    }

    if (!bcrypt.compareSync(password, data.users_by_pk.password)) {
      return res.status(403).send('');
    }

    const token = jwt.sign(
      {
        'https://hasura.io/jwt/claims': {
          'x-hasura-allowed-roles': ['admin', 'login', 'user', 'anonymous'],
          'x-hasura-default-role': 'user',
          'x-hasura-user-id': username,
        },
      },
      process.env.JWT_SECRET_KEY,
      {
        algorithm: process.env.JWT_SECRET_TYPE as Algorithm,
        expiresIn: '1d',
      }
    );

    const user: User = {
      isLoggedIn: true,
      username,
      token,
      graphql: process.env.HASURA_URL,
    };
    req.session.set('user', user);
    await req.session.save();
    res.json(user);
  } catch (error) {
    const { response: fetchResponse } = error;
    res.status(fetchResponse?.status || 500).json(error.data);
  }
});
