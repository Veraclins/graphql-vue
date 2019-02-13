<script>
export default {
  inheritAttrs: false,
  data() {
    return {
      closeOut: false,
    };
  },
  mounted() {
    this.$root.$on('show-modal', () => {
      this.closeOut = false;
    });
  },
  methods: {
    close() {
      this.closeOut = true;
      this.$root.$emit('close-modal');
    },
  },
};
</script>

<template>
  <transition name="modal-fade">
    <div :class="[$style.modalBackdrop, { [$style.fadeOut]: closeOut }]">
      <div :class="[$style.modal, { [$style.fadeOut]: closeOut }]">
        <header :class="$style.modalHeader">
          <slot name="header" />
          <button type="button" :class="$style.btnClose" @click="close">
            <BaseIcon name="times-circle" />
          </button>
        </header>
        <section :class="$style.modalBody">
          <slot> </slot>
        </section>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" module>
@import '@design';
.modalBackdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  animation: fadein 0.5s linear;
}

.modal {
  /* z-index: $layer-modal-z-index; */
  display: flex;
  flex-direction: column;
  width: px-rem(500);
  max-width: 90%;
  max-height: 95%;
  padding: 10px 10px 10px;
  background: $color-main;
  border-radius: 10px;
  animation: fadein 0.5s linear;
}

.fadeOut {
  animation: fadeout 0.5s linear;
}

@keyframes fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeout {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.modalHeader {
  display: flex;
  justify-content: flex-end;
  padding-bottom: 8px;
}

.modalBody {
  position: relative;
  top: 0;
  left: 0;
  flex: 1;
  width: 100%;
  height: 100%;
  overflow: auto;
  text-align: justify;
}

.btnClose {
  font-size: 28px;
  font-weight: bold;
  color: $color-primary;
  cursor: pointer;
  background: transparent;
  border: none;
}
</style>
