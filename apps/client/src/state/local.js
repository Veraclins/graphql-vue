// Defaults and resolvers for local store (apollo-link-state)

export const defaults = {
  user: null,
  requests: [],
  loginModal: null,
};

export const resolvers = {
  Mutation: {
    setLoggedInUser: (parent, { user }, { cache }) => {
      cache.writeData({
        data: {
          user: user
            ? {
                ...user,
                __typename: 'User',
              }
            : null,
        },
      });
      return null;
    },
    setRequests: (parent, { requests }, { cache }) => {
      cache.writeData({
        data: {
          requests: requests
            ? {
                ...requests,
                __typename: 'Requests',
              }
            : [],
        },
      });
      return [];
    },
    modals: (parent, { modal }, { cache }) => {
      console.log(modal, 'modals');
      cache.writeData({
        data: {
          loginModal: modal
            ? {
                ...modal,
                __typename: 'LoginModal',
              }
            : null,
        },
      });
      return null;
    },
  },
};
