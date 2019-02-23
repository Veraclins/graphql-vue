<script>
import AuthModal from '@layouts/forms/auth-modal';
import RequestFormModal from '@layouts/forms/request-modal';
import RequestModal from '@layouts/request-modal';
export default {
  components: { AuthModal, RequestFormModal, RequestModal },
};
</script>

<template>
  <div>
    <AuthModal />
    <RequestFormModal />
    <RequestModal />
  </div>
</template>
