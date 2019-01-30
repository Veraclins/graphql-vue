import jwtDecode from 'jwt-decode';

import {
  Login,
  Signup,
  LocalSetSelf
} from '@gql/user';
import {
  apolloClient,
  apolloOnLogin,
  apolloOnLogout
} from '@state';
import {
  setSession,
  clearSession
} from './session';

let renewAuthTimeout;

/**
 * @description Shut down session
 */
const clearAuth = () => {
  clearSession();
  apolloOnLogout();

  clearTimeout(renewAuthTimeout);
};

/**
 * @description Save authentication data in localStorage
 */
export const setAuth = auth => {
  auth && setSession(auth);
  apolloOnLogin();
};

/**
 * @description Send login attempt to the API with the provided credentials
 * @param {String} username User's username or email
 * @param {String} password User's password
 */
export const login = async (username, password) => {
  try {
    const {
      data: {
        login: {
          user,
          token
        },
      },
    } = await apolloClient.mutate({
      mutation: Login,
      variables: {
        email: username,
        password,
      },
    });

    await setCurrentUser(user);
    const tokenInfo = jwtDecode(token);
    tokenInfo.token = token;
    setSession(tokenInfo);

    return true;
  } catch (err) {
    throw err;
  }
};

/**
 * @description Send signup attempt to the API with the provided credentials
 * @param {String} email User's username or email
 * @param {String} username User's username or email
 * @param {String} password User's password
 */
export const signup = async (username, password, name) => {
  try {
    const {
      data: {
        signup: {
          user,
          token
        },
      },
    } = await apolloClient.mutate({
      mutation: Signup,
      variables: {
        email: username,
        password: password,
        name: name,
      },
    });

    await setCurrentUser(user);
    const tokenInfo = jwtDecode(token);
    setSession(tokenInfo);

    return true;
  } catch (err) {
    console.error(JSON.stringify(err));
  }
};

/**
 * @description Remove local session data and Auth0's Single Sign On session
 */
export const logout = () => {
  clearAuth();
  setCurrentUser(null);
};

/**
 * @description Store user information locally
 * @param {Object} user User object
 * @returns {Promise<Object>} Local mutation result
 */
export const setCurrentUser = user => {
  return apolloClient.mutate({
    mutation: LocalSetSelf,
    variables: {
      user,
    },
  });
};
