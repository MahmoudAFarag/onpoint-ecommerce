export const checkEmail = (email: string) => {
  const isEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return isEmail.test(String(email).toLowerCase());
};

export const checkPassword = (password: string) => {
  const isPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return isPassword.test(String(password));
};

export const checkUsername = (username: string) => {
  const isUsername = /^[a-zA-Z0-9]{3,}$/;
  return isUsername.test(String(username));
};
