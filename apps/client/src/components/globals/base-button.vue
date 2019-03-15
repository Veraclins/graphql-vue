<script>
export default {
  props: {
    outline: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: null,
    },
    plane: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<template>
  <button
    :class="[
      $style.button,
      { [$style[color]]: color },
      { [$style.outline]: outline },
      { [$style.rounded]: rounded },
    ]"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<style lang="scss" module>
@import '@design';

.button {
  @extend %typography-small;

  padding: $size-button-padding;
  color: $color-button-text;
  cursor: pointer;
  background: $color-button-bg;
  border: none;

  &:disabled {
    cursor: not-allowed;
    background: darken($color-button-bg, 15%);
  }
  &:hover {
    background: darken($color-button-bg, 15%);
  }
}

.outline {
  background-color: transparent;
  border: 1px solid $color-outline-button-border;
}

.rounded {
  border: 1px solid;
  border-radius: 8px;
}

.primary {
  background-color: $color-primary;
  border: 1px solid $color-primary;
}
.secondary {
  background-color: $color-secondary;
  border: 1px solid $color-secondary;
}
.success {
  background-color: $color-success;
  border: 1px solid $color-success;
}
.danger {
  background-color: $color-danger;
  border: 1px solid $color-danger;
}

.warning {
  background-color: $color-warning;
  border: 1px solid $color-warning;
}
.info {
  background-color: $color-info;
  border: 1px solid $color-info;
}
</style>
