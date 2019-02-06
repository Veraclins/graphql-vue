export const formatGraphqlErrors = error => {
  const { graphQLErrors } = error;

  return graphQLErrors;
};

export const formatNetworkErrors = error => {
  const { networkError } = error;
  // TODO
  return networkError;
};

// const errorLink = onError(({ graphQLErrors, networkError }) => {
//   if (graphQLErrors && graphQLErrors.filter(e => e).length > 0)
//     graphQLErrors.map(({ message = '', status = 200 }) => {
//       if (UNAUTHORIZED === message || status === 401) {
//         console.warn(`You've attempted to access ${UNAUTHORIZED} section`);
//         if (
//           history &&
//           history.location &&
//           history.location.pathname !== '/login'
//         ) {
//           history.push('/login');
//         }
//       }
//       if (FORBIDDEN === message || status === 403) {
//         console.warn(`You've attempted a ${FORBIDDEN} action`);
//         history.push(`/error-page/403`);
//       }
//       return null;
//     });
//   if (networkError && networkError.statusCode === 401) {
//     // eslint-disable-next-line
//     history.push('/login');
//     console.warn(UNAUTHORIZED);
//   }
//   if (networkError && networkError.statusCode === 403) {
//     // Do something
//     console.warn(FORBIDDEN);
//   }
//   if (networkError && networkError.statusCode >= 500) {
//     // eslint-disable-next-line
//     console.warn('SERVER ERROR');
//     history.push(`/error-page/${networkError.statusCode}`);
//   }
// });
