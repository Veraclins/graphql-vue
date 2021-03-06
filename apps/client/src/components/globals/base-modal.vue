<script>
export default {
  inheritAttrs: false,
  props: {
    size: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      closeOut: false,
    };
  },
  created() {
    document.addEventListener('keydown', e => {
      if (!this.closeOut && e.keyCode === 27) {
        this.close();
      }
    });
  },
  mounted() {
    this.$root.$on('show-modal', () => {
      this.closeOut = false;
    });
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.close());
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
    <div
      :class="[$style.modalBackdrop, { [$style.fadeOut]: closeOut }]"
      @click.self="close"
    >
      <div
        :class="[
          $style.modal,
          { [$style.fadeOut]: closeOut },
          { [$style[size]]: size },
        ]"
      >
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
  z-index: $layer-modal-z-index;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);

  @include fadeIn(0.5);
}

.modal {
  z-index: $layer-modal-z-index + 1;
  display: flex;
  flex-direction: column;
  width: px-rem(500);
  max-width: 90%;
  max-height: 95%;
  padding: 10px 10px 10px;
  background: $color-main;
  border-radius: 10px;

  @include fadeIn(0.5);
}

.fadeOut {
  @include fadeOut(0.5);
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

.medium {
  width: px-rem(700);
}

.wide {
  width: px-rem(1000);
}
</style>
