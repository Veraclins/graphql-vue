import { createProvider, onLogin, onLogout } from '@state/vue-apollo';
import { defaults, resolvers } from '@state/local';
import { USER_ID } from '@services/auth/session';

export const apolloProvider = createProvider({
  tokenName: USER_ID,
  clientState: {
    defaults,
    resolvers,
  },
});

export const apolloClient = apolloProvider.defaultClient;

export const apolloOnLogin = token => onLogin(apolloClient, token);
export const apolloOnLogout = () => onLogout(apolloClient);
