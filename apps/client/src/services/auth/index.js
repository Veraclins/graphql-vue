import jwtDecode from 'jwt-decode';

import { Login, Signup, LocalSetLoggedInUser } from '@gql/user';
import { apolloClient, apolloOnLogout } from '@state';
import { setSession, clearSession } from '@services/auth/session';
import { cacheRequest } from '@services/request';
import router from '@src/router';

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
        login: {
          token,
          user: { requests, ...others },
        },
      },
    } = await apolloClient.mutate({
      mutation: Login,
      variables: {
        username,
        password,
      },
    });
    await setAuth(others, token);
    cacheRequest(requests);
    return others;
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
    await setAuth(user, token);
    return user;
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
  router.push('/');
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
