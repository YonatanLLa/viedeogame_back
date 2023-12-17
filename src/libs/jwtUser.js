const { TOKEN_SECRET } = require("../config.js");
const jwt = require("jsonwebtoken");

const jwtUser = (token) => {
  if (!token) {
    throw new Error({ message: "Token no proporcionado" });
  }
  let id;
  try {
    const tokenParts = token.split("Bearer").pop().trim();
    const tokenized = jwt.verify(tokenParts, TOKEN_SECRET);

    id = tokenized.id;
    return id;
  } catch (error) {
    console.log("error", error.message);
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  jwtUser,
};
