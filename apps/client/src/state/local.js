// Defaults and resolvers for local store (apollo-link-state)
import { LocalGetRequests } from '@gql/user';
export const defaults = {
  user: null,
  requests: [],
};

export const resolvers = {
  Mutation: {
    setLoggedInUser: (parent, { user }, { cache }) => {
      const data = {
        user,
        __typename: 'User',
      };
      cache.writeData({
        data,
      });
      return null;
    },
    setRequests: (parent, { requests }, { cache }) => {
      const { requests: oldRequests } = cache.readQuery({
        query: LocalGetRequests,
      });
      const data = {
        requests: [...oldRequests, ...requests],
        __typename: 'Requests',
      };
      cache.writeData({
        data,
      });
      return [];
    },
  },
};
