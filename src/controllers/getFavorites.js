const { jwtUser } = require("../libs/jwtUser");

const getFavorites = async (gameId) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: "Token no proporcionado" });
  }
  const userId = jwtUser(token);
  
};

module.exports = getFavorites;
