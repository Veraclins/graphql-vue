import jwtDecode from 'jwt-decode';

import { Login, Signup, LocalSetLoggedInUser } from '@gql/user';
import { apolloClient, apolloOnLogin, apolloOnLogout } from '@state';
import { setSession, clearSession } from '@services/auth/session';

/**
 * @description Shut down session
 */
const clearAuth = () => {
  clearSession();
  apolloOnLogout();
};

/**
 * @description Save authentication data in localStorage
 */
export const setAuth = async (user, token) => {
  await setCurrentUser(user);
  const tokenInfo = jwtDecode(token);
  tokenInfo.token = token;
  setSession(tokenInfo);
  apolloOnLogin();
};

/**
 * @description Send login mutation to the API with the provided credentials
 * @param {String} username User's username or email
 * @param {String} password User's password
 */
export const login = async (username, password) => {
  try {
    const {
      data: {
        login: { user, token },
      },
    } = await apolloClient.mutate({
      mutation: Login,
      variables: {
        username,
        password,
      },
    });
    setAuth(user, token);
    return true;
  } catch (err) {
    throw err;
  }
};

/**
 * @description Send signup mutation to the API with the provided credentials
 * @param {String} email User's username or email
 * @param {String} username User's username or email
 * @param {String} password User's password
 */
export const signup = async (email, password, confirmPassword, username) => {
  try {
    const {
      data: {
        signup: { user, token },
      },
    } = await apolloClient.mutate({
      mutation: Signup,
      variables: {
        email,
        password,
        confirmPassword,
        username,
      },
    });
    setAuth(user, token);
    return true;
  } catch (err) {
    throw err;
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
    mutation: LocalSetLoggedInUser,
    variables: {
      user,
    },
  });
};
