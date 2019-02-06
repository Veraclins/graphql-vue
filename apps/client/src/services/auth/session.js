export const USER_ID = 'user_id';
export const ACCESS_TOKEN = 'access_token';
export const EXPIRES_AT = 'expires_at';

/**
 * @description Check if authentication data exists and is valid
 */
export const isValidSession = () =>
  [USER_ID, EXPIRES_AT, ACCESS_TOKEN].every(
    item => localStorage.getItem(item) !== null
  ) && new Date().getTime() < JSON.parse(localStorage.getItem(EXPIRES_AT));

/**
 * @description Save authentication data in localStorage
 */
export const setSession = ({ exp, id, token }) => {
  localStorage.setItem(USER_ID, id);
  localStorage.setItem(ACCESS_TOKEN, token);
  // Set the time that the access token will expire at
  localStorage.setItem(EXPIRES_AT, JSON.stringify(exp * 1000));
};

/**
 * @description Returns session information
 */
export const getSession = () =>
  isValidSession()
    ? {
        expiresAt: localStorage.getItem(EXPIRES_AT),
        userId: localStorage.getItem(USER_ID),
      }
    : null;

/**
 * @description Remove authentication data from localStorage
 */
export const clearSession = () => {
  // Clear access token and ID token from local storage
  [USER_ID, EXPIRES_AT, ACCESS_TOKEN].forEach(item =>
    localStorage.removeItem(item)
  );
};
