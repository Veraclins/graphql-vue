<script>
import { create, update } from '@services/request';
import { formatErrors } from '@services/errors';
import showToaster from '@utils/show-toaster';
import BaseForm from '@layouts/forms/base-form';
export default {
  components: { BaseForm },
  data() {
    return {
      showModal: false,
      requestId: '',
      title: '',
      device: '',
      description: '',
      errors: {},
      options: ['Laptop Pc', 'Smartphone', 'Desktop Pc', 'Tablet', 'Others'],
      validationErrors: {},
      isUpdate: false,
      formProperties: {},
    };
  },
  created() {
    this.showCreateForm();
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
    },
    openModal(modal) {
      if (modal.id === 'create-request') this.showCreateForm();
      if (modal.id === 'update-request') this.showUpdateForm(modal.request);
      this.showModal =
        modal.id === 'create-request' || modal.id === 'update-request';
    },

    isSuccess(message) {
      this.closeModal();
      showToaster(this.$root, message);
      this.$root.$emit('request-updated');
    },

    async create() {
      this.clearErrors();
      this.inProgress = true;
      const args = {
        title: this.title,
        device: this.device,
        description: this.description,
      };
      try {
        await create(args);
        this.isSuccess('Request created successfully!');
      } catch (err) {
        console.log(err);
        this.setError(err);
      }
      this.formProperties.inProgress = false;
    },

    async update() {
      this.clearErrors();
      this.inProgress = true;
      const args = {
        id: this.requestId,
        title: this.title,
        device: this.device,
        description: this.description,
      };
      try {
        await update(args);
        this.isSuccess('Request updated successfully!');
      } catch (err) {
        this.setError(err);
      }
      this.formProperties.inProgress = false;
    },

    showUpdateForm(request) {
      this.requestId = request.id;
      this.title = request.title;
      this.device = request.device;
      this.description = request.description;
      this.formProperties = {
        title: 'Update the request',
        buttonText: 'Update Request',
        inProgress: false,
        action: this.update,
      };
      this.isUpdate = true;
      this.clearErrors();
    },

    showCreateForm() {
      this.formProperties = {
        title: 'Create a new Request',
        buttonText: 'Create Request',
        inProgress: false,
        action: this.create,
      };
      this.isUpdate = false;
      this.clearErrors();
      this.clearContent();
    },

    clearErrors() {
      // Reset the errors if it existed.
      this.errors = {};
      this.validationErrors = {};
    },

    clearContent() {
      this.title = '';
      this.device = '';
      this.description = '';
    },

    async setError(err) {
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
        v-model="title"
        :errors="validationErrors.title"
        name="title"
        placeholder="Title"
      />
      <BaseSelect
        v-model="device"
        :errors="validationErrors.device"
        name="device"
        :options="options"
        :default-option="'Please select a device'"
      />
      <BaseTextarea
        v-model="description"
        :errors="validationErrors.description"
        name="description"
        placeholder="Enter a brief description of the request"
      />
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
  background: $color-danger;
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
