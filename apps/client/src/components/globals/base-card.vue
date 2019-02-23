<script>
export default {};
</script>

<template>
  <div :class="$style.cardContainer">
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
  color: $color-primary;
}
</style>
