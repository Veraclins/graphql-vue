<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
    value: {
      type: [String, Number],
      default: '',
    },
    options: {
      type: Array,
      default: () => [],
    },
    defaultOption: {
      type: String,
      default: 'Select one',
    },
    errors: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      inputErrors: this.errors,
    };
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: event => this.$emit('input', event.target.value),
      };
    },
  },
  watch: {
    errors(errors) {
      this.inputErrors = errors;
    },
  },
  mounted() {
    this.$on('input', () => {
      this.inputErrors = [];
    });
  },
};
</script>

<template>
  <div :class="$style.control">
    <select
      :name="name"
      :value="value"
      :class="[$style.select, { [$style.withError]: inputErrors.length >= 1 }]"
      v-on="listeners"
    >
      <option disabled value="">{{ defaultOption }}</option>
      <option v-for="(option, index) in options" :key="index" :value="option">{{
        option
      }}</option>
    </select>
    <section v-show="inputErrors.length >= 1">
      <span
        v-for="(error, index) in inputErrors"
        :key="index"
        :class="$style.inputError"
        >{{ error }}</span
      >
    </section>
  </div>
</template>

<style lang="scss" module>
@import '@design';
.control {
  margin-bottom: $size-grid-padding * 1.5;
}
.select {
  @extend %typography-small;

  display: block;
  width: 100%;
  padding: $size-input-padding-vertical $size-input-padding-horizontal;
  line-height: 1;
  background: $color-main;
  border: $size-input-border solid $color-input-border;
  border-radius: $size-input-border-radius;
}

.withError {
  border-color: $color-danger;
}
.inputError {
  display: block;
  padding: 5px $size-input-padding-horizontal 0 5px;
  font-size: 13px;
  line-height: 18px;
  color: $color-danger;
  text-align: left;
}
</style>
