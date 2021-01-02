import { useState } from 'react';
import useUser from '../lib/useUser';
import Layout from '../components/Layout';
import LoginForm from '../components/LoginForm';
import fetchJson from '../lib/fetchJson';

const Login = (): JSX.Element => {
  const { mutateUser } = useUser({
    redirectTo: '/',
    redirectIfFound: true,
  });

  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const body = {
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
    };

    try {
      await mutateUser(
        fetchJson('/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        })
      );
    } catch (error) {
      console.error('An unexpected error happened:', error);
      setErrorMsg(error.data.message);
    }
  }

  return (
    <Layout>
      <div className="login">
        <LoginForm errorMessage={errorMsg} onSubmit={handleSubmit} />
      </div>
    </Layout>
  );
};

export default Login;
