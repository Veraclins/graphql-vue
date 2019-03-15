<script>
import RequestCard from '@layouts/request-card';
import { isAdmin } from '@src/services/auth/session';
import showToaster from '@utils/show-toaster';
import { changeStatus } from '@src/services/request';
import formatDateRelative from '@utils/format-date-relative';
export default {
  components: { RequestCard },
  data() {
    return {
      showModal: false,
      request: {},
      isAdmin: false,
    };
  },
  computed: {
    status() {
      return this.request.status ? this.request.status.toLowerCase() : '';
    },
    owner() {
      return this.request.owner && this.request.owner.username;
    },
    editable() {
      return (
        this.request.status === 'PENDING' ||
        this.request.status === 'DISAPPROVED'
      );
    },
    actions() {
      return this.request.status === 'PENDING'
        ? [
            { action: 'disapprove', style: 'danger' },
            { action: 'approve', style: 'primary' },
          ]
        : this.request.status === 'APPROVED'
        ? [
            { action: 'disapprove', style: 'danger' },
            { action: 'resolve', style: 'success' },
          ]
        : this.request.status === 'DISAPPROVED'
        ? [{ action: 'approve', style: 'primary' }]
        : [];
    },
  },
  mounted() {
    this.isAdmin = isAdmin();

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
    date(date) {
      return formatDateRelative(date);
    },
    closeModal() {
      this.showModal = false;
    },
    updateRequest(request) {
      this.closeModal();
      this.$root.$emit('show-modal', { id: 'update-request', request });
    },
    async updateRequestStatus(status) {
      try {
        await changeStatus({
          id: this.request.id,
          action: status,
        });
        this.closeModal();
        const message = `Request ${status}d successfully`;
        showToaster(this.$root, message);
        this.$root.$emit('request-updated');
      } catch (err) {
        showToaster(this.$root, err.message, 'error');
      }
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
      <p v-show="isAdmin">
        <em>By {{ owner }}</em>
      </p>
      <div :class="$style.deviceDate">
        <p>{{ request.device }}</p>
        <p :class="$style.date">{{ date(request.createdAt) }}</p>
      </div>
      <p>{{ request.description }} </p>
    </template>
    <template v-if="!isAdmin" #request-footer>
      <div :class="{ [$style[status]]: status }">
        {{ request.status }}
      </div>
      <BaseButton v-show="editable" rounded @click="updateRequest(request)">
        Edit Request
      </BaseButton>
    </template>
    <template v-else #request-footer>
      <BaseButton
        v-for="(action, index) in actions"
        :key="index"
        :color="action.style"
        rounded
        @click="updateRequestStatus(action.action)"
      >
        {{ action.action }}
      </BaseButton>
    </template>
  </RequestCard>
</template>

<style lang="scss" module>
@import '@design';

.deviceDate {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 0;
}
.date {
  align-self: flex-end;
  font-style: italic;
  color: $color-primary;
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
