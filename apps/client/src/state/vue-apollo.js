import Vue from 'vue';
import VueApollo from 'vue-apollo';
import { persistCache } from 'apollo-cache-persist';
import { InMemoryCache } from 'apollo-cache-inmemory';
import {
  createApolloClient,
  restartWebsockets,
} from 'vue-cli-plugin-apollo/graphql-client';
import router from '@src/router';

// Install the vue plugin
Vue.use(VueApollo);
const cache = new InMemoryCache();
// Config
const defaultOptions = {
  // You can use `https` for secure connection (recommended in production)
  httpEndpoint: process.env.VUE_APP_GRAPHQL_HTTP || 'http://localhost:4000',
  // You can use `wss` for secure connection (recommended in production)
  // Use `null` to disable subscriptions
  wsEndpoint: process.env.VUE_APP_GRAPHQL_WS || 'ws://localhost:4000',
  // LocalStorage token
  tokenName: 'apollo-token',
  // Enable Automatic Query persisting with Apollo Engine
  persisting: true,
  // Use websockets for everything (no HTTP)
  // You need to pass a `wsEndpoint` for this to work
  websocketsOnly: false,
  // Is being rendered on the server?
  ssr: false,

  // Override default http link
  // link: myLink

  // Override default cache
  cache,

  // Override the way the Authorization header is set
  // getAuth: (tokenName) => ...

  // Additional ApolloClient options
  // apollo: { ... }

  // Client local data (see apollo-link-state)
  // clientState: { resolvers: { ... }, defaults: { ... } }
};
persistCache({
  cache,
  storage: window.localStorage,
});
export const createProvider = (options = {}) => {
  // Create apollo client
  const { apolloClient, wsClient } = createApolloClient({
    ...defaultOptions,
    ...options,
  });
  apolloClient.wsClient = wsClient;

  // Create vue apollo provider
  const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
    defaultOptions: {
      $query: {
        // fetchPolicy: 'cache-and-network',
      },
    },
    errorHandler(error) {
      console.log(error);

      // eslint-disable-next-line no-console
      const err = JSON.parse(JSON.stringify(error));
      console.log(
        '%cError',
        'background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;',
        err
      );
      return err;
    },
  });

  return apolloProvider;
};

// Manually call this when user log in
export const onLogin = async (apolloClient, token) => {
  const {
    currentRoute: { params },
  } = router;
  router.push(params.redirect || '/dashboard');
  if (apolloClient.wsClient) restartWebsockets(apolloClient.wsClient);
};

// Manually call this when user log out
export const onLogout = async apolloClient => {
  if (apolloClient.wsClient) restartWebsockets(apolloClient.wsClient);
  try {
    await apolloClient.resetStore();
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(
      '%cError on cache reset (logout)',
      'color: orange;',
      err.message,
      'Here.......'
    );
  }
};
