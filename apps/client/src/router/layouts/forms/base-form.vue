<script>
export default {
  props: {
    properties: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    inProgress() {
      return this.properties.inProgress;
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

.form {
  text-align: center;
}
</style>
