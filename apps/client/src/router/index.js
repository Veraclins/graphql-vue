import Vue from 'vue';
import VueRouter from 'vue-router';
// https://github.com/declandewet/vue-meta
import VueMeta from 'vue-meta';
// Adds a loading bar at the top during page loads.
import NProgress from 'nprogress/nprogress';

import routes from './routes';
import { isValidSession, getSession } from '@src/services/auth/session';

Vue.use(VueRouter);
Vue.use(VueMeta, {
  // The component option name that vue-meta looks for meta info on.
  keyName: 'page',
});

const router = new VueRouter({
  routes,
  // Use the HTML5 history API (i.e. normal-looking routes)
  // instead of routes with hashes (e.g. example.com/#/about).
  // This may require some server configuration in production:
  // https://router.vuejs.org/en/essentials/history-mode.html#example-server-configurations
  mode: 'history',
  // Simulate native-like scroll behavior when navigating to a new
  // route and using back/forward buttons.
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        x: 0,
        y: 0,
      };
    }
  },
});

// Before each route evaluates...
router.beforeEach(async (routeTo, routeFrom, next) => {
  // If this isn't an initial page load...
  if (routeFrom.name !== null) {
    // Start the route progress bar.
    NProgress.start();
  }

  // If auth isn't required for the route (or nested routes),
  // just continue and don't wait for user object.
  if (!routeTo.matched.some(route => route.meta.authRequired)) return next();

  if (routeTo.matched.some(route => route.meta.authRequired)) {
    if (!isValidSession()) {
      return next({
        path: '/',
        params: {
          nextUrl: routeTo.fullPath,
          action: 'login',
        },
      });
    }
  }

  if (routeTo.matched.some(route => route.meta.adminOnly)) {
    if (isValidSession()) {
      const user = getSession();
      if (!user || user.role !== 'ADMIN') {
        return next({
          path: '/dashboard',
        });
      }
      return next();
    }
    return next({
      path: '/',
      params: {
        nextUrl: routeTo.fullPath,
        action: 'login',
      },
    });
  }
  next();
});

// When each route is finished evaluating...
router.afterEach((routeTo, routeFrom) => {
  // Complete the animation of the route progress bar.
  NProgress.done();
});

export default router;
