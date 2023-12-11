// login for controllers
const { register } = require("../controllers/user/register");
const handlerRegister = async (req, res) => {
  try {
    const { name, lastName, email, password } = req.body;
    if (!name || !lastName || !email || !password) {
      throw new Error(
        `Required data for register ${name || lastName || email || password}`
      );
    }
    const newUser = await register(name, lastName, email, password);
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
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
