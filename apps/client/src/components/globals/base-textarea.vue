<script>
export default {
  props: {
    rows: {
      type: Number,
      default: 5,
    },
    name: {
      type: String,
      default: '',
    },
    placeholder: {
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
    <textarea
      :name="name"
      :value="value"
      :rows="rows"
      :placeholder="placeholder"
      :class="[
        $style.textarea,
        { [$style.withError]: inputErrors.length >= 1 },
      ]"
      v-on="listeners"
    >
    </textarea>
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
.textarea {
  @extend %typography-small;

  display: block;
  width: 100%;
  padding: $size-input-padding-vertical $size-input-padding-horizontal;
  line-height: 1;
  border: $size-input-border solid $color-input-border;
  border-radius: $size-input-border-radius;
}

.withError {
  border-color: $color-error;
}
.inputError {
  display: block;
  padding: 5px $size-input-padding-horizontal 0 5px;
  font-size: 13px;
  line-height: 18px;
  color: $color-error;
  text-align: left;
}
</style>
