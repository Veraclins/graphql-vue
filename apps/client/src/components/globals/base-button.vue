<script>
export default {
  props: {
    outline: {
      type: Boolean,
      default: false,
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
      { [$style.outline]: outline },
      { [$style.plane]: plane },
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
  color: $color-button-text;
  background: transparent;
  border: 1px solid $color-outline-button-border;

  &:disabled {
    cursor: not-allowed;
    background: darken($color-button-bg, 15%);
  }
  &:hover {
    background: darken($color-button-bg, 15%);
  }
}
.plane {
  color: $color-secondary;
  background: transparent;
  border: none;
}
</style>
