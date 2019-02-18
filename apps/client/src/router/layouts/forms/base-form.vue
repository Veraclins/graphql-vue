<script>
export default {
  props: {
    properties: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      showModal: true,
    };
  },
  computed: {
    inProgress() {
      return this.properties.inProgress;
    },
  },
  mounted() {
    this.$root.$on('show-modal', modal => {
      this.showModal = modal.type === 'form';
    });
    this.$root.$on('close-modal', () => {
      this.closeModal();
    });
  },
  methods: {
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>

<template>
  <BaseModal>
    <div :class="$style.formContainer">
      <!-- Form header -->
      <slot name="form-header"> </slot>
      <form :class="$style.form" @submit.prevent="properties.action">
        <!-- Form inputs -->
        <slot name="form-inputs"> </slot>
        <!-- Submit button -->
        <BaseButton
          :disabled="inProgress"
          :class="$style.submitButton"
          type="submit"
        >
          <BaseIcon v-if="inProgress" name="sync" spin />
          <span v-else-if="properties.buttonText">{{
            properties.buttonText
          }}</span>
          <span v-else>Submit</span>
        </BaseButton>
        <!-- Form footer -->
        <div :class="$style.formFooter">
          <slot name="form-footer"> </slot>
        </div>
      </form>
    </div>
  </BaseModal>
</template>

<style lang="scss" module>
@import '@design';

.submitButton {
  width: 100%;
  border-radius: $size-button-border-radius;
}

.clickable {
  color: $color-primary;
  cursor: pointer;
  &:hover {
    color: darken($color-primary, 20%);
  }
}

.formTitle {
  padding: 0 0 20px;
  margin: auto;
  font-size: 20px;
  color: $color-primary;
  text-align: center;
}

.formFooter {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  font-size: 13px;
}

.formContainer {
  width: 100%;
  padding: 10px 30px 10px;
  margin: auto;
  background: $color-main;
}

.pullLeft {
  float: left;
}

.pullRight {
  float: right;
}

.messageContainer {
  padding: 10px;
  margin-bottom: 20px;
  color: $color-main;
  text-align: left;
}

.errorContainer {
  background: $color-error;
}

.successContainer {
  background: $color-success;
}

.successMessage {
  color: $color-main;
}

.textKeepNewLine {
  white-space: pre-line;
}

.inlineIcon {
  margin-right: 10px;
}

.form {
  text-align: center;
}
</style>
