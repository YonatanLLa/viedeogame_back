const { User } = require("../../db");
const bcrypt = require("bcryptjs");

const login = async (name, lastName, email, password) => {
  const hashPassword = await bcrypt.hash(password, 10);

  const userExists = await User.findOne({ where: { email: email } });
  if (userExists) {
    throw new Error(`User with emil: '${email}', already exists`);
  }

  const newUser = await User.create({
    email: email,
    password: hashPassword,
    name: name,
    lastName: lastName,
  });

  return {
    email: newUser.email,
    name: newUser.name,
    lastName: newUser.lastName
  };
};

module.exports = {
  login,
};
