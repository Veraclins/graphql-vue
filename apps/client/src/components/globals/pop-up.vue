<script>
export default {
  props: {
    timeout: {
      type: Number,
      default: 5000,
    },
  },
  data() {
    return {
      items: [],
      closeOut: false,
    };
  },
  mounted() {
    this.$root.$on('show-toaster', options => {
      const { message, theme, timeout = this.timeout } = options;
      this.add(message, { theme, timeout });
    });
  },
  methods: {
    success(message, option = {}) {
      this.add(message, { theme: 'toast-success', timeout: option.timeout });
    },
    info(message, option = {}) {
      this.add(message, { theme: 'toast-info', timeout: option.timeout });
    },
    warning(message, option = {}) {
      this.add(message, { theme: 'toast-warning', timeout: option.timeout });
    },
    error(message, option = {}) {
      this.add(message, { theme: 'toastError', timeout: option.timeout });
    },
    add(message, { theme, timeout }) {
      if (!this.$parent) {
        this.$mount();
        document.body.appendChild(this.$el);
      }
      let item = { message, theme, key: `${Date.now()}-${Math.random()}` };
      this.items.push(item);
      setTimeout(() => this.remove(item), timeout || this.timeout);
    },
    remove(item) {
      let i = this.items.indexOf(item);
      if (i >= 0) {
        this.items.splice(i, 1);
      }
    },
  },
};
</script>

<template>
  <div :class="$style.toaster">
    <transition-group name="toast">
      <div
        v-for="item in items"
        :key="item.key"
        :class="[$style.toast, { [$style[item.theme]]: item.theme }]"
      >
        <a :class="$style.toastBtnClear" @click="remove(item)"></a>
        {{ item.message }}
      </div>
    </transition-group>
  </div>
</template>

<style lang="scss" module>
@import '@design';

.toaster {
  position: fixed;
  top: 85px;
  left: 50%;
  z-index: $layer-popover-z-index;
  min-width: 300px;
  max-width: 700px;
  padding: 0 10px;
  transform: translateX(-50%);

  .toast {
    display: block;
    padding: 1rem;
    margin-bottom: 10px;
    color: $color-main;
    background: rgba(69, 77, 93, 0.9);
    border: 1px solid #454d5d;
    border-color: #454d5d;
    border-radius: 8px;

    @include fadeIn(0.5);
  }
  .toastEnter,
  .toastLeaveTo {
    -webkit-transform: translate(100%);
    transform: translate(100%);
  }
  .success {
    background: rgba(50, 182, 67, 0.9);
    border-color: #32b643;
  }
  .warning {
    background: rgba(255, 183, 0, 0.9);
    border-color: #ffb700;
  }
  .info {
    background: rgba(91, 192, 222, 0.9);
    border-color: #5bc0de;
  }
  .error {
    background: $color-danger;
  }
  .primary {
    background: rgba(66, 139, 202, 0.9);
    border-color: #428bca;
  }
  .toastBtnClear {
    float: right;
    margin-left: 10px;
    color: currentColor;
    text-decoration: none;
    cursor: pointer;
    background: transparent;
    border: 0;
    opacity: 0.45;
  }
  .toastBtnClear:hover {
    opacity: 0.85;
  }
  .toastBtnClear::before {
    content: '\2715';
  }

  @include small {
    width: 100%;
  }
}
</style>
