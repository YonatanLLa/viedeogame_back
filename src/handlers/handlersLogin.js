// login for controllers
const { register, loginUser } = require("../controllers/user/register");
const handlerRegister = async (req, res) => {
  try {
    const { name, lastName, email, password } = req.body;
    if (!name || !lastName || !email || !password) {
      throw new Error(
        `Required data for register ${name || lastName || email || password}`
      );
    }
    const { username } = await register(name, lastName, email, password);
    // res.cookie("token", token);
    res.status(200).json({ dato: username + " resgistrado exitosamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const handlerLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { token, name } = await loginUser(email, password);

    res.cookie("token", token);
    res.status(200).json(name);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  handlerLogin,
  handlerRegister,
};
