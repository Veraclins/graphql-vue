<script>
import Layout from '@layouts/main';
import RequestList from '@components/request-list';
import showToaster from '@utils/show-toaster';
import { getRequests } from '@services/request';
import { isAdmin } from '@src/services/auth/session';
import { setTimeout } from 'timers';
export default {
  page: {
    title: 'Dashboard',
    meta: [{ name: 'description', content: 'User dashbaord' }],
  },
  components: { Layout, RequestList },
  data() {
    return {
      isAdmin: false,
      requests: [],
    };
  },
  async mounted() {
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
    this.isAdmin = isAdmin();
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
    showRequestForm(modal) {
      this.$root.$emit('show-modal', { id: 'create-request' });
    },
  },
};
</script>

<template>
  <Layout>
    <RequestList v-if="requests.length > 0" :requests="requests" />
    <div v-else :class="$style.noRequests">
      <BaseCard v-if="isAdmin" size="medium">
        <h1>There are no requests by users yet!</h1>
      </BaseCard>
      <BaseCard v-else size="medium">
        <h1>You have not made any request yet!</h1>
        <template #card-footer>
          <div :class="$style.createButton">
            <BaseButton rounded @click="showRequestForm">
              Create A Request Now
            </BaseButton>
          </div>
        </template>
      </BaseCard>
    </div>
  </Layout>
</template>

<style lang="scss" module>
@import '@design';

.noRequests {
  margin: 50px auto;
}

.createButton {
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
}
</style>
