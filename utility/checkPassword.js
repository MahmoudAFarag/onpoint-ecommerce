const checkPassword = (password) => {
  const isPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
  return isPassword.test(String(password));
};

export default checkPassword;
