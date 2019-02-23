import {
  CreateRequest,
  UpdateRequest,
  ApproveRequest,
  DisapproveRequest,
  ResolveRequest,
  LocalSetRequests,
  GetUserRequests,
  LocalGetRequest,
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
  console.log(id, 'id');
  try {
    const {
      data: { updateRequest: request },
    } = await apolloClient.mutate({
      mutation: UpdateRequest,
      variables: {
        id,
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

export const changeStatus = async args => {
  const { id, action } = args;
  const MUTATION =
    action === 'approve'
      ? ApproveRequest
      : action === 'disapprove'
      ? DisapproveRequest
      : ResolveRequest;
  try {
    const { data } = await apolloClient.mutate({
      mutation: MUTATION,
      variables: {
        id,
      },
    });
    const request =
      action === 'approve'
        ? data.approveRequest
        : action === 'disapprove'
        ? data.disapproveRequest
        : data.resolveRequest;
    cacheRequest([request]);
    return true;
  } catch (err) {
    throw err;
  }
};

export const getUserRequests = async () => {
  try {
    const {
      data: { getUserRequests: requests },
    } = await apolloClient.query({
      query: GetUserRequests,
    });
    cacheRequest(requests);
    return requests;
  } catch (err) {
    throw err;
  }
};
export const getRequest = async id => {
  try {
    const {
      data: { request },
    } = await apolloClient.query({
      query: LocalGetRequest,
      variables: {
        id,
      },
    });
    console.log(request);
    return request;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
