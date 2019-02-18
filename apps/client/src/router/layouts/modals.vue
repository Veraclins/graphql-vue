<script>
import AuthModal from '@layouts/forms/auth-modal';
import RequestModal from '@layouts/forms/request-modal';
export default {
  components: { AuthModal, RequestModal },
};
</script>

<template>
  <div>
    <AuthModal />
    <RequestModal />
  </div>
</template>
