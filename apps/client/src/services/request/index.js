import {
  CreateRequest,
  UpdateRequest,
  ApproveRequest,
  DisapproveRequest,
  ResolveRequest,
  LocalSetRequests,
  LocalGetRequests,
  LocalAddToRequests,
  GetAllRequests,
} from '@gql/user';
import { apolloClient } from '@state';

export const cacheRequest = requests => {
  return apolloClient.mutate({
    mutation: LocalSetRequests,
    variables: {
      requests,
    },
  });
};

export const updateRequestCache = request => {
  return apolloClient.mutate({
    mutation: LocalAddToRequests,
    variables: {
      request,
    },
  });
};

export const create = async args => {
  const { title, device, description } = args;
  try {
    const {
      data: { createRequest: request },
    } = await apolloClient.mutate({
      mutation: CreateRequest,
      variables: {
        title,
        device,
        description,
      },
    });
    cacheRequest([request]);
    return true;
  } catch (err) {
    throw err;
  }
};

export const update = async args => {
  const { title, device, description, id } = args;
  try {
    await apolloClient.mutate({
      mutation: UpdateRequest,
      variables: {
        id,
        title,
        device,
        description,
      },
    });
    return true;
  } catch (err) {
    throw err;
  }
};

export const changeStatus = async args => {
  const { id, action } = args;
  const MUTATION =
    action === 'approve'
      ? ApproveRequest
      : action === 'disapprove'
      ? DisapproveRequest
      : ResolveRequest;
  try {
    await apolloClient.mutate({
      mutation: MUTATION,
      variables: {
        id,
      },
    });
    return true;
  } catch (err) {
    throw err;
  }
};

export const getRequests = async () => {
  try {
    const { data } = await apolloClient.query({
      query: LocalGetRequests,
    });
    return data.requests;
  } catch (err) {
    throw err;
  }
};

export const getAllRequests = async () => {
  try {
    const {
      data: { getAllRequests: requests },
    } = await apolloClient.query({
      query: GetAllRequests,
    });
    cacheRequest(requests);
    return requests;
  } catch (err) {
    throw err;
  }
};
