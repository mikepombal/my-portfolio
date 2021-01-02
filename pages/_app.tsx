import '../styles/index.css';
import { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import { ApolloProvider } from '@apollo/client';
import fetch from '../lib/fetchJson';
import useUser from '../lib/useUser';
import { useApollo } from '../lib/apolloClient';
import { User } from '../types/common';

interface Apollo extends AppProps {
  user: User;
}

const Apollo: React.FC<Apollo> = ({ Component, pageProps, user }) => {
  const apolloClient = useApollo(user, pageProps.initialApolloState as Record<string, unknown>);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  const { user } = useUser();

  return (
    <SWRConfig
      value={{
        fetcher: fetch,
        onError: (err) => {
          console.error(err);
        },
      }}
    >
      {!user || !user.isLoggedIn ? (
        <Component {...pageProps} noApollo />
      ) : (
        <Apollo
          Component={Component}
          pageProps={pageProps}
          user={user}
          router={router}
        />
      )}
    </SWRConfig>
  );
}

export default MyApp;
