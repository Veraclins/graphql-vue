<script>
import { login, signup } from '@services/auth';
import { formatErrors } from '@services/errors';
import showToaster from '@utils/show-toaster';
import BaseForm from '@layouts/forms/base-form';
export default {
  components: { BaseForm },
  data() {
    return {
      username: '',
      showModal: false,
      modalId: '',
      email: '',
      password: '',
      confirmPassword: '',
      usernamePlaceHolder: '',
      errors: {},
      validationErrors: {},
      isSignUp: false,
      formProperties: {},
    };
  },
  created() {
    this.showLogInForm();
  },
  mounted() {
    this.$root.$on('show-modal', modal => {
      this.openModal(modal);
    });
    this.$root.$on('close-modal', () => {
      this.closeModal();
    });
  },
  methods: {
    closeModal() {
      this.showModal = false;
      this.modalId = '';
    },
    openModal(modal) {
      if (modal.id === 'signup') this.showSignUpForm();
      if (modal.id === 'login') this.showLogInForm();
      this.showModal = modal.id === 'login' || modal.id === 'signup';
    },
    // Try to log the user in with the username
    // and password they provided.
    async logIn() {
      this.clearErrors();
      this.formProperties.inProgress = true;

      try {
        await login(this.username, this.password);
        this.formProperties.inProgress = false;
        this.closeModal();
      } catch (err) {
        this.setError(err);
      }
    },
    // Try to create a new account for the user
    // with the username and password they provided.
    async signUp() {
      this.clearErrors();
      this.formProperties.inProgress = true;
      try {
        await signup(
          this.email,
          this.password,
          this.confirmPassword,
          this.username
        );
        this.formProperties.inProgress = false;
        this.closeModal();
      } catch (err) {
        this.setError(err);
      }
    },

    showSignUpForm() {
      this.formProperties = {
        title: 'Create a new account',
        buttonText: 'Sign up',
        leftLinkText: '',
        rightLinkText: 'Already have an account?',
        rightAction: this.showLogInForm,
        action: this.signUp,
        inProgress: false,
      };
      this.isSignUp = true;
      this.usernamePlaceHolder = 'Username';
      this.clearErrors();
      setTimeout(() => this.clearContent(), 310);
    },

    showLogInForm() {
      this.formProperties = {
        title: 'Login to access your account',
        buttonText: 'Log in',
        rightLinkText: 'Create an account',
        rightAction: this.showSignUpForm,
        action: this.logIn,
        inProgress: false,
      };
      this.clearErrors();
      this.isSignUp = false;
      this.usernamePlaceHolder = 'Email or username';
      this.clearContent();
    },

    clearErrors() {
      // Reset the errors if it existed.
      this.errors = {};
      this.validationErrors = {};
    },

    clearContent() {
      this.username = '';
      this.email = '';
      this.password = '';
      this.confirmPassword = '';
    },

    async setError(err) {
      this.formProperties.inProgress = false;
      const errors = formatErrors(err);
      if (errors.code === 'BAD_USER_INPUT') {
        this.validationErrors = errors.errors;
      }
      this.errors = errors;
      showToaster(this.$root, errors.message, 'error');
    },
  },
};
</script>

<template>
  <BaseForm v-show="showModal" :properties="formProperties">
    <template #form-header>
      <p :class="$style.formTitle">{{ formProperties.title }}</p>
    </template>
    <template #form-inputs>
      <BaseInput
        v-model="username"
        :errors="validationErrors.username"
        name="username"
        :placeholder="usernamePlaceHolder"
      />
      <BaseInput
        v-if="isSignUp"
        v-model="email"
        :errors="validationErrors.email"
        name="email"
        placeholder="Email"
      />
      <BaseInput
        v-model="password"
        :errors="validationErrors.password"
        name="password"
        type="password"
        placeholder="Password"
      />
      <BaseInput
        v-if="isSignUp"
        v-model="confirmPassword"
        :errors="validationErrors.confirmPassword"
        name="confirmPassword"
        type="password"
        placeholder="Confirm your Password"
      />
    </template>
    <template #form-footer>
      <span :v-if="formProperties.rightLinkText">
        <a :class="$style.clickable" @click="formProperties.rightAction">{{
          formProperties.rightLinkText
        }}</a>
      </span>
    </template>
  </BaseForm>
</template>

<style lang="scss" module>
@import '@design';
.clickable {
  padding-top: 10px;
  color: $color-primary;
  cursor: pointer;
  &:hover {
    color: darken($color-primary, 20%);
  }
}

.formTitle {
  padding: 0 0 20px;
  margin: auto;
  font-size: 20px;
  color: $color-primary;
  text-align: center;
}
</style>
