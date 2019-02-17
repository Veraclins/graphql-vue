const showToaster = (root, message, theme = 'success') => {
  root.$emit('show-toaster', {
    message,
    theme,
  });
};

export default showToaster;
