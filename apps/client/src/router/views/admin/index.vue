<script>
import Layout from '@layouts/main';
import RequestList from '@components/request-list';
import showToaster from '@utils/show-toaster';
import { getRequests } from '@services/request';
import { setTimeout } from 'timers';
export default {
  page: {
    title: 'Dashboard',
    meta: [{ name: 'description', content: 'User dashbaord' }],
  },
  components: { Layout, RequestList },
  data() {
    return {
      requests: [],
    };
  },
  mounted() {
    const { params } = this.$route;
    if (params.action === 'admin-only') {
      setTimeout(
        showToaster(
          this.$root,
          'You are not authorized to visit that page!',
          'error'
        ),
        300
      );
    }
    this.fetchRequests();
    this.$root.$on('request-updated', () => {
      this.fetchRequests();
    });
  },
  methods: {
    showRequest(request) {
      this.$root.$emit('show-modal', { id: 'show-request', request });
    },
    async fetchRequests() {
      this.requests = [];
      const requests = await getRequests();
      this.requests = requests;
    },
  },
};
</script>

<template>
  <Layout>
    <RequestList :requests="requests" />
  </Layout>
</template>

<style lang="scss" module>
@import '@design';
</style>
