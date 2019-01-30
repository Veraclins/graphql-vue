<script>
import appConfig from '@src/app.config';
import Layout from '@layouts/main';
import PostList from '@components/post-list';
import { GetRecentPosts } from '@gql/user';

export default {
  page: {
    title: 'Home',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, PostList },
  data() {
    return {
      feed: [],
      isLoading: false,
      errors: '',
    };
  },
  computed: {
    isLoadingRecentPosts() {
      return this.$apollo && this.$apollo.queries
        ? this.$apollo.queries.feed.loading
        : false;
    },
  },
  apollo: {
    // Advanced query with parameters
    // The 'variables' method is watched by vue
    feed: {
      query: GetRecentPosts,
      // Reactive parameters
      // variables() {
      //   // Use vue reactive properties here
      //   return {
      //     message: this.pingInput,
      //   };
      // },
      // Variables: deep object watch
      deep: false,
      // We use a custom update callback because
      // the field names don't match
      // By default, the 'pingMessage' attribute
      // would be used on the 'data' result object
      // Here we know the result is in the 'ping' attribute
      // considering the way the apollo server works
      update(data) {
        // The returned value will update
        // the vue property 'pingMessage'
        return data.ping;
      },
      // Optional result hook
      result({ data, loading, networkStatus }) {
        if (data.feed) {
          this.feed = data.feed;
          console.log('We got some result!', data);
        }
      },
      // Error handling
      error(error) {
        const err = JSON.parse(JSON.stringify(error));
        const errors = err.networkError.result.errors;
        this.errors = errors;
        console.error("We've got an error!", err);
      },
      // Loading state
      // loadingKey is the name of the data property
      // that will be incremented when the query is loading
      // and decremented when it no longer is.
      loadingKey: 'loadingQueriesCount',
      // watchLoading will be called whenever the loading state changes
      watchLoading(isLoading, countModifier) {
        console.log(isLoading);
        this.isLoading = isLoading;
        // isLoading is a boolean
        // countModifier is either 1 or -1
      },
    },
  },
};
</script>

<template>
  <Layout>
    <h1>Home Page</h1>
    <img class="logo" src="@assets/images/logo.png" alt="Logo" />
    <h2>Recent Posts</h2>
    <PostList v-if="!isLoading && feed" :posts="feed" show-author />
    <p v-else-if="!isLoading && !feed"> {{ errors[0].message }} </p>
    <BaseSpinner v-else />
  </Layout>
</template>

<style lang="scss" scoped>
@import '@design';

.logo {
  max-width: 100%;
  height: auto;
}
</style>
