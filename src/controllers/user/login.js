const bcrypt = require("bcryptjs")

const login = async (name, lastName, email, password) => {
  console.log(name, lastName, email, password);

  const hashPassword = await bcrypt.hash(password, 10)
  return {
    name, lastName, email, password: hashPassword
  }
};

module.exports = {
  login,
};
