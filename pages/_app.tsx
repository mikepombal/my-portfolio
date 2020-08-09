import { SWRConfig } from 'swr';
import { ApolloProvider } from '@apollo/client';
import fetch from '../lib/fetchJson';
import useUser from '../lib/useUser';
import { useApollo } from '../lib/apolloClient';

const Apollo = ({ Component, pageProps, user }) => {
  const apolloClient = useApollo(user, pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

function MyApp({ Component, pageProps }) {
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
        <Apollo Component={Component} pageProps={pageProps} user={user} />
      )}
    </SWRConfig>
  );
}

export default MyApp;
