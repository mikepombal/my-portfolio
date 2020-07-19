import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import withSession from '../../lib/session';

const HASURA_OPERATION = `
  query getUser($username: String!) {
    users_by_pk(username: $username){
      username
      password
    }
  }
`;

const execute = async (variables, sessionVariables) => {
  const fetchResponse = await fetch(process.env.HASURA_URL, {
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

export default withSession(async (req, res) => {
  try {
    const { username, password } = await req.body;

    const loginToken = jwt.sign(
      {
        'https://hasura.io/jwt/claims': {
          'x-hasura-allowed-roles': ['admin', 'login', 'user', 'anonymous'],
          'x-hasura-default-role': 'login',
        },
      },
      process.env.JWT_SECRET_KEY,
      {
        algorithm: process.env.JWT_SECRET_TYPE,
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
        algorithm: process.env.JWT_SECRET_TYPE,
        expiresIn: '1d',
      }
    );

    const user = { isLoggedIn: true, username, token };
    req.session.set('user', user);
    await req.session.save();
    res.json(user);
  } catch (error) {
    const { response: fetchResponse } = error;
    res.status(fetchResponse?.status || 500).json(error.data);
  }
});
