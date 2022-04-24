export const validateUsername = (input: string): boolean => {
  return input.length >= 4 && input.length <= 12;
};

export const validateEmail = (input: string): boolean => {
  const re =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  return re.test(input);
};

export const validatePassword = (input: string): boolean => {
  return input.length >= 4 && input.length <= 12;
};
