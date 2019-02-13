// import { isValidSession } from '@services/auth/session';

export default [
  {
    path: '/',
    name: 'home',
    component: () => lazyLoadView(import('@views/home')),
    props: true,
    meta: {
      onlyGuest: true,
    },
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => lazyLoadView(import('@views/dashboard')),
    props: true,
    meta: {
      authRequired: true,
    },
  },
  {
    path: '/requests',
    name: 'requests',
    component: () => lazyLoadView(import('@views/requests')),
    props: true,
    meta: {
      authRequired: true,
    },
  },
  {
    path: '/requests/:id',
    name: 'single-request',
    component: () => lazyLoadView(import('@views/requests')),
    props: true,
    meta: {
      authRequired: true,
    },
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => lazyLoadView(import('@views/loading')),
    props: true,
    meta: {
      authRequired: true,
      adminOnly: true,
    },
  },
  {
    path: '/loading',
    name: 'loading',
    component: () => lazyLoadView(import('@views/loading')),
  },
  {
    path: '/404',
    name: '404',
    component: require('@views/404').default,
    props: true,
  },
  {
    path: '*',
    redirect: '404',
  },
];

function lazyLoadView(AsyncView) {
  const AsyncHandler = () => ({
    component: AsyncView,
    // A component to use while the component is loading.
    loading: require('@views/loading').default,
    // A fallback component in case the timeout is exceeded
    // when loading the component.
    error: require('@views/timeout').default,
    // Delay before showing the loading component.
    // Default: 200 (milliseconds).
    delay: 400,
    // Time before giving up trying to load the component.
    // Default: Infinity (milliseconds).
    timeout: 10000,
  });

  return Promise.resolve({
    functional: true,
    render(h, { data, children }) {
      // Transparently pass any props or children
      // to the view component.
      return h(AsyncHandler, data, children);
    },
  });
}
