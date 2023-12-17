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

  return {
    // token,
    username: newUser.name,
  };
};

const loginUser = async (email, password) => {
  console.log(email, password);

  try {
    const existEmail = await User.findOne({ email });
    if (!existEmail) {
      throw new Error("Email now exist");
    }

    const comparePassword = await bcrypt.compare(password, existEmail.password);
    if (!comparePassword) {
      throw new Error("Password incorrect");
    }

    const token = await createAccessToken({ id: existEmail._id });

    return {
      token,
      name: existEmail.name,
    };
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

module.exports = {
  register,
  loginUser,
};
