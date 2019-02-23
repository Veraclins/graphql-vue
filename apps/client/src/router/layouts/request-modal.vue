<script>
import RequestCard from '@layouts/request-card';
export default {
  components: { RequestCard },
  data() {
    return {
      showModal: false,
      modalId: '',
      request: {},
    };
  },
  computed: {
    status() {
      return this.request.status ? this.request.status.toLowerCase() : '';
    },
  },
  mounted() {
    this.$root.$on('show-modal', async modal => {
      if (modal.id === 'show-request') {
        this.request = modal.request;
        this.showModal = true;
      }
    });
    this.$root.$on('close-modal', () => {
      this.closeModal();
    });
  },
  methods: {
    closeModal() {
      this.showModal = false;
    },
    updateRequest(request) {
      this.closeModal();
      this.$root.$emit('show-modal', { id: 'update-request', request });
    },
  },
};
</script>

<template>
  <RequestCard v-show="showModal">
    <template #request-header>
      <h1>{{ request.title }}</h1>
    </template>

    <template #request-body>
      <p :class="$style.deviceDate"
        >{{ request.device }} {{ request.createdAt }}
      </p>
      <p>{{ request.description }} </p>
    </template>
    <template #request-footer>
      <div :class="{ [$style[status]]: status }">
        {{ request.status }}
      </div>
      <BaseButton rounded @click="updateRequest(request)">
        Edit Request
      </BaseButton>
    </template>
  </RequestCard>
</template>

<style lang="scss" module>
@import '@design';

.deviceDate {
  display: flex;
  justify-content: space-between;
  widows: 100%;
  padding: 10px 0;
}

.resolved {
  color: $color-success;
}
.approved {
  color: $color-primary;
}
.pending {
  color: $color-warning;
}
.disapproved {
  color: $color-danger;
}
</style>
