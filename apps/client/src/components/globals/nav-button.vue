<template>
  <BaseButton :class="$style.navButton" outline v-on="$listeners">
    <slot />
  </BaseButton>
</template>

<style lang="scss" module>
@import '@design';

.navButton {
  @extend %typography-small;

  padding: 5px 20px;
  margin-left: $size-grid-padding;

  &:hover {
    color: $color-secondary;
    background: $color-button-bg;
  }
}
</style>
