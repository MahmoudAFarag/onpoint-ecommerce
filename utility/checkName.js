const checkName = (name) => {
  const regex = /^[a-zA-Z]{4,20}$/;
  return regex.test(name);
};

export default checkName;
