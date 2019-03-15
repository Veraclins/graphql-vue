<script>
export default {
  props: {
    request: {
      type: Object,
      required: true,
    },
  },
  methods: {
    showRequest(request) {
      this.$root.$emit('show-modal', { id: 'show-request', request });
    },
  },
};
</script>

<template>
  <BaseCard>
    <p>{{ request.title }}</p>
    <template #card-footer>
      <small>{{ request.status }}</small>
      <a @click="showRequest(request)">View</a>
    </template>
  </BaseCard>
</template>

<style lang="scss" module>
@import '@design';

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
