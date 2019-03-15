<script>
import AuthModal from '@layouts/forms/auth-modal';
import RequestFormModal from '@layouts/forms/request-modal';
import RequestDetailsModal from '@layouts/request-details';
export default {
  components: { AuthModal, RequestFormModal, RequestDetailsModal },
};
</script>

<template>
  <div>
    <AuthModal />
    <RequestFormModal />
    <RequestDetailsModal />
  </div>
</template>
