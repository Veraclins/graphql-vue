<script>
export default {
  props: {
    size: {
      type: String,
      default: '',
    },
  },
};
</script>

<template>
  <div :class="[$style.cardContainer, { [$style[size]]: size }]">
    <div :class="$style.cardBody">
      <slot />
    </div>
    <div :class="$style.cardFooter">
      <slot name="card-footer" />
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@design';

.cardContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  max-width: 100%;
  padding: 0 20px;
  margin: 15px auto;
  border-radius: 5px;
  box-shadow: 0 4px 8px 4px $color-primary;
}

.cardFooter {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  color: $color-primary;
}
.cardBody {
  padding: 10px;
  text-align: center;
}

.medium {
  width: 700px;
  max-width: 100%;
}
</style>
