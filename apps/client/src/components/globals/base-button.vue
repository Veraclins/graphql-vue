<template>
  <button :class="$style.button" v-on="$listeners">
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
    background: $color-button-disabled-bg;
  }
  &:hover {
    background: darken($color-button-bg, 15%);
  }
}
</style>
