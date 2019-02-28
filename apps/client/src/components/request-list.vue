<script>
import RequestContainer from '@components/request-container';

export default {
  components: { RequestContainer },
  props: {
    requests: {
      type: Array,
      required: true,
    },
  },
  computed: {
    pending: function() {
      return this.requests.filter(request => request.status === 'PENDING');
    },
    approved: function() {
      return this.requests.filter(request => request.status === 'APPROVED');
    },
    resolved: function() {
      return this.requests.filter(request => request.status === 'RESOLVED');
    },
    disapproved: function() {
      return this.requests.filter(request => request.status === 'DISAPPROVED');
    },
  },
};
</script>

<template>
  <div>
    <div v-show="pending.length > 0" :class="$style.requestSection">
      <h1 :class="$style.pending">Pending Requests</h1>
      <div :class="$style.content">
        <RequestContainer
          v-for="request in pending"
          :key="request.id"
          :request="request"
        />
      </div>
    </div>
    <div v-show="disapproved.length > 0" :class="$style.requestSection">
      <h1 :class="$style.disapproved">Disapproved Requests</h1>
      <div :class="$style.content">
        <RequestContainer
          v-for="request in disapproved"
          :key="request.id"
          :request="request"
        />
      </div>
    </div>
    <div v-show="approved.length > 0" :class="$style.requestSection">
      <h1 :class="$style.approved">Approved Requests</h1>
      <div :class="$style.content">
        <RequestContainer
          v-for="request in approved"
          :key="request.id"
          :request="request"
        />
      </div>
    </div>
    <div v-show="resolved.length > 0" :class="$style.requestSection">
      <h1 :class="$style.resolved">Resolved Requests</h1>
      <div :class="$style.content">
        <RequestContainer
          v-for="request in resolved"
          :key="request.id"
          :request="request"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@design';

.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.requestSection {
  padding: 20px 10px;
  text-align: center;
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
