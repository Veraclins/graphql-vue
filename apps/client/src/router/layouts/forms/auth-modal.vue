<script>
import { login, signup } from '@services/auth';
import { formatErrors } from '@services/errors';
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
      resetEmail: '',
      usernamePlaceHolder: '',
      errors: {},
      validationErrors: {},
      isSuccess: false,
      isSignUp: false,
      inProgress: false,
      formProperties: {},
    };
  },
  created() {
    this.showLogInForm();
  },
  mounted() {
    this.$root.$on('show-modal', modal => {
      if (modal.id === 'signup') this.showSignUpForm();
      if (modal.id === 'login') this.showLogInForm();
      this.showModal = modal.id === 'login' || modal.id === 'signup';
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
    // Try to log the user in with the username
    // and password they provided.
    async logIn() {
      this.clearErrors();
      this.inProgress = true;

      try {
        await login(this.username, this.password);
        this.isSuccess = true;
        this.closeModal();
      } catch (err) {
        this.setError(err);
      }

      this.inProgress = false;
    },
    // Try to create a new account for the user
    // with the username and password they provided.
    async signUp() {
      this.clearErrors();
      this.inProgress = true;
      try {
        await signup(
          this.email,
          this.password,
          this.confirmPassword,
          this.username
        );
        this.isSuccess = true;
        this.closeModal();
      } catch (err) {
        this.setError(err);
      }

      this.inProgress = false;
    },

    showSignUpForm() {
      this.formProperties = {
        title: 'Create a new account',
        buttonText: 'Sign up',
        leftLinkText: '',
        rightLinkText: 'Already have an account?',
        rightAction: this.showLogInForm,
        action: this.signUp,
      };
      this.isSignUp = true;
      this.usernamePlaceHolder = 'Username';
      this.clearErrors();
      this.clearContent();
    },

    showLogInForm() {
      this.formProperties = {
        title: 'Login to access your account',
        buttonText: 'Log in',
        rightLinkText: 'Create an account',
        rightAction: this.showSignUpForm,
        action: this.logIn,
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
      this.resetEmail = '';
    },

    async setError(err) {
      this.isSuccess = false;
      const errors = formatErrors(err);
      if (errors.code === 'BAD_USER_INPUT') {
        this.validationErrors = errors.errors;
      }
      if (
        errors.code === 'RESOURCE_CONFLICT' ||
        errors.code === 'UNAUTHENTICATED'
      ) {
        this.validationErrors = {
          username: [errors.message],
        };
      }
      this.errors = errors;
    },
  },
};
</script>

<template>
  <BaseForm v-show="showModal" :properties="formProperties">
    <template #form-header>
      <p :class="$style.formTitle">{{ formProperties.title }}</p>
      <div
        v-if="isSuccess"
        :class="[$style.messageContainer, $style.successContainer]"
      >
        <div :class="$style.textKeepNewLine">
          <span v-if="isSignUp">Sign Up Successfull! </span>
          <span v-else>Login Successfull! </span>
        </div>
      </div>
    </template>
    <template #form-inputs>
      <BaseInput
        v-if="isSignUp"
        v-model="email"
        :errors="validationErrors.email"
        name="email"
        placeholder="Email"
      />
      <BaseInput
        v-model="username"
        :errors="validationErrors.username"
        name="username"
        :placeholder="usernamePlaceHolder"
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

.largeButton {
  width: 100%;
  border-radius: $size-button-border-radius;
}

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

.formFooter {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  font-size: 13px;
}

.formContainer {
  width: 100%;
  padding: 10px 30px 20px;
  margin: auto;
  background: $color-main;
}

.pullLeft {
  float: left;
}

.pullRight {
  float: right;
}

.messageContainer {
  padding: 2px 5px;
  margin-bottom: 10px;
  font-size: 14px;
  color: $color-main;
  text-align: left;
  border-radius: 5px;
}

.errorContainer {
  background: $color-error;
}

.successContainer {
  background: $color-success;
}

.successMessage {
  color: $color-main;
}

.textKeepNewLine {
  white-space: pre-line;
}

.inlineIcon {
  margin-right: 10px;
}

.form {
  text-align: center;
}
</style>
