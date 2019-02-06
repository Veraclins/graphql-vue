<script>
export default {
  data() {
    return {
      showLoginModal: false,
    };
  },
  mounted() {
    this.$root.$on('show-modal', modal => {
      this.showLoginModal = modal.id === 'login';
    });
    this.$root.$on('close-modal', () => {
      this.closeModal();
    });
  },

  methods: {
    closeModal() {
      this.showLoginModal = false;
    },
  },
};
</script>

<template>
  <div>
    <BaseModal v-show="showLoginModal">
      <template #header>
        <h3>Hello Header</h3>
      </template>
      <p> Hello</p>
      <p> Hello</p>
      <p> Hello</p>
      <p> Hello</p>
      <p> Hello</p>
      <p> Hello</p>
      <p> Hello</p>
      <p> Hello</p>
      <p> Hello</p>
      <p> Hello</p>
      <p> Hello</p>
      <p> Hello</p>
      <p> Hello</p>
      <p> Hello</p>
      <p> Hello</p>
      <p> Hello</p>
      <p> Hello</p>
      <p> Hello</p>
      <p> Hello</p>
      <p> Hello</p>
      <p> Hello</p>
      <p> Hello</p>
      <p> Hello</p>
      <p> Hello</p>
      <p> Hello</p>
      <p> Hello</p>
      <p> Hello</p>
      <p> Hello</p>
      <p> Hello</p>
      <p> Hello</p>
      <p> Hello</p>
      <p> Hello</p>
      <p> Hello</p>
      <p> Hello</p>
      <template #footer>
        <h4>Here might be a page footer</h4>
      </template>
    </BaseModal>
  </div>
</template>
