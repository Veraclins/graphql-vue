// App-specific config

// Using CommonJS instead of ES2015+ export, because we also need to
// provide this object to Webpack in vue.config.js.
module.exports = {
  title: 'Vue Frontend for Maintenance with Graphql and Vue',
  description:
    'The re-implementation of Maintenance tracker with Vue frontend + GraphQL server',
};
