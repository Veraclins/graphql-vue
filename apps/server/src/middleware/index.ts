import admin from '@middleware/admin';
import authenticate from '@middleware/authenticate';
import validators from '@middleware/validate';
const applyToMany = (array: string[], middleware: any) => {
  let middlewareMap = {};
  array.forEach(item => {
    middlewareMap = {
      ...middlewareMap,
      [item]: middleware,
    };
  });
  return middlewareMap;
};

const applyMiddleware = (
  middleware: any,
  mutations?: string[] | boolean,
  queries?: string[] | boolean
) => {
  switch (true) {
    case Array.isArray(queries) && mutations:
      return {
        Query: applyToMany(queries as string[], middleware),
        Mutation: middleware,
      };

    case Array.isArray(mutations) && queries:
      return {
        Query: middleware,
        Mutation: applyToMany(mutations as string[], middleware),
      };

    case Array.isArray(mutations) && !queries:
      return {
        Mutation: applyToMany(mutations as string[], middleware),
      };

    case Array.isArray(queries) && !mutations:
      return {
        Query: applyToMany(mutations as string[], middleware),
      };

    case Array.isArray(mutations) && Array.isArray(queries):
      return {
        Query: applyToMany(queries as string[], middleware),
        Mutation: applyToMany(mutations as string[], middleware),
      };

    default:
      return {
        Query: middleware,
        Mutation: middleware,
      };
  }
};

export const isAuthenticated = applyMiddleware(
  authenticate,
  [
    'createRequest',
    'updateRequest',
    'updateProfile',
    'approveRequest',
    'disapproveRequest',
    'resolveRequest',
  ],
  true
);

export const isAdmin = applyMiddleware(
  admin,
  ['approveRequest', 'disapproveRequest', 'resolveRequest'],
  ['getAllRequests']
);
const { validateSignup, validateLogin, validateRequests } = validators;

export const isValidSignup = applyMiddleware(validateSignup, ['signup'], false);
export const isValidLogin = applyMiddleware(validateLogin, ['login'], false);
export const isValidRequest = applyMiddleware(
  validateRequests,
  ['createRequest', 'updateRequest'],
  false
);
