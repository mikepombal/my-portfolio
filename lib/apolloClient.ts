import { useMemo } from 'react';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { concatPagination } from '@apollo/client/utilities';
import { User } from '../types/common';

let apolloClient: ApolloClient<Record<string, unknown>>;

function createApolloClient(user: User) {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: user.graphql, // Server URL (must be absolute)
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
      credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
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
}

export function initializeApollo(
  user: User,
  initialState: Record<string, unknown> | null = null
): ApolloClient<Record<string, unknown>> {
  const _apolloClient = apolloClient ?? createApolloClient(user);

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(user: User, initialState: Record<string, unknown> | null): ApolloClient<Record<string, unknown>> {
  const store = useMemo(() => initializeApollo(user, initialState), [
    initialState,
    user,
  ]);
  return store;
}
