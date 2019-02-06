<template>
  <BaseButton :class="$style.navButton" v-on="$listeners">
    <slot />
  </BaseButton>
</template>

<style lang="scss" module>
@import '@design';

.navButton {
  @extend %typography-small;

  padding: 5px 20px;
  margin-left: $size-grid-padding;
  color: $color-button-text;
  cursor: pointer;
  background: $color-outline-button-bg;
  border: 1px solid $color-outline-button-border;
  &:hover {
    color: $color-text;
    background: $color-button-bg;
  }
}
</style>
