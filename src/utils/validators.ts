export const alphanumeric = (value: string) => {
  if (!value) {
    return 'This field is required.'; // Consistent error message for required
  }
  const alphanumericRegex = /^[a-zA-Z0-9]+$/;
  if (!alphanumericRegex.test(value)) {
    return 'Must contain only letters and numbers.';
  }
  return undefined;
};