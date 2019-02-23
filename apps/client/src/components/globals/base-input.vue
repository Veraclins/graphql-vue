<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    value: {
      type: [String, Number],
      default: '',
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
    <input
      :name="name"
      :type="type"
      :value="value"
      :placeholder="placeholder"
      :class="[$style.input, { [$style.withError]: inputErrors.length >= 1 }]"
      v-on="listeners"
    />
    <section v-show="inputErrors.length >= 1" :class="$style.errorContainer">
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
.input {
  @extend %typography-small;

  display: block;
  width: 100%;
  padding: $size-input-padding-vertical $size-input-padding-horizontal;
  line-height: 1;
  border: $size-input-border solid $color-input-border;
  border-radius: $size-input-border-radius;
}

.withError {
  border-color: $color-danger;
}
.errorContainer {
  /* display: flex; */
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
