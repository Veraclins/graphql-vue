export const formatErrors = err => {
  const error = JSON.parse(JSON.stringify(err));
  const { networkError, graphQLErrors } = error;
  if (graphQLErrors && graphQLErrors.filter(e => e).length > 0) {
    const { message, extensions } = graphQLErrors[0];
    const {
      code,
      exception: { stacktrace, ...errors },
    } = extensions;

    return {
      message,
      code,
      errors,
    };
  }

  if (networkError) {
    const {
      result: { errors },
    } = networkError;
    const { message } = errors[0];
    return {
      code: 'NETWORK_ERROR',
      message,
    };
  }
};
