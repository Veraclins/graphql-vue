<script>
import Layout from '@layouts/main';
import showToaster from '@utils/show-toaster';
import { getUserRequests } from '@services/request';
import { setTimeout } from 'timers';
export default {
  page: {
    title: 'Dashboard',
    meta: [{ name: 'description', content: 'User dashbaord' }],
  },
  components: { Layout },
  data() {
    return {
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
    const requests = await getUserRequests();
    this.requests = requests;
  },
  methods: {
    showRequest(request) {
      this.$root.$emit('show-modal', { id: 'show-request', request });
    },
  },
};
</script>

<template>
  <Layout>
    <div :class="$style.content">
      <BaseCard v-for="(request, index) in requests" :key="index">
        <p>{{ request.title }}</p>
        <template #card-footer>
          <small>{{ request.status }}</small>
          <a @click="showRequest(request)">View</a>
        </template>
      </BaseCard>
    </div>
  </Layout>
</template>

<style lang="scss" module>
@import '@design';
.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
