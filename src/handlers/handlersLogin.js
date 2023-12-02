// login for controllers
const { login } = require("../controllers/user/login");
const handlerRegister = async (req, res) => {
  try {
    const { name, lastName, email, password } = req.body;
    if (!name || !lastName || !email || !password) {
      throw new Error(
        `Required data for register ${name || lastName || email || password}`
      );
    }
    const newUser = await login(name, lastName, email, password);
    res.status(200).json(newUser);
  } catch (error) {
    console.log(error.message);
  }
};

const handlerLogin = (req, res) => {
  try {
  } catch (error) {}
};

module.exports = {
  handlerLogin,
  handlerRegister,
};
