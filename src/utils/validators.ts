export const alphanumeric = (value: string) => {
  if (!value?.trim()) {
    return 'This field is required.';
  }

  const trimmed = value.trim();
  const alphanumericRegex = /^[a-zA-Z0-9 ]+$/;

  if (!alphanumericRegex.test(trimmed)) {
    return 'Must contain only letters, numbers, and spaces (no leading or trailing spaces).';
  }

  return undefined;
};
