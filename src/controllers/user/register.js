const { User } = require("../../db.js");
const bcrypt = require("bcryptjs");
const { createAccessToken } = require("../../libs/jwt.js");

const register = async (name, lastName, email, password) => {
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
  console.log(newUser.id, "created");
  const token = await createAccessToken({ id: newUser.id });
  res.cookie("token", token);

  
};

module.exports = {
  register,
};
