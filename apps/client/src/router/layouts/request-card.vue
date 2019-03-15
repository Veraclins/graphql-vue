<template>
  <BaseModal size="medium">
    <div :class="$style.requestContainer">
      <!-- request header -->
      <div :class="$style.requestHeader">
        <slot name="request-header" />
      </div>
      <!-- request inputs -->
      <slot name="request-body"> </slot>
      <!-- request footer -->
      <div :class="$style.requestFooter">
        <slot name="request-footer"> </slot>
      </div>
    </div>
  </BaseModal>
</template>

<style lang="scss" module>
@import '@design';

.requestHeader {
  display: flex;
  justify-content: space-between;
  padding: 0 0 20px;
  margin: auto;
  font-size: 20px;
  color: $color-primary;
  text-align: left;
}

.requestFooter {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 13px;
}

.requestContainer {
  width: 100%;
  padding: 10px;
  margin: auto;
  background: $color-main;
}
</style>
