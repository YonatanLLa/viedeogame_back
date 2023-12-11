const { TOKEN_SECRET } = require("../config.js");
const  jwt  = require("jsonwebtoken");
async function createAccessToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      TOKEN_SECRET,
      {
        expiresIn: "1d",
      },
      (err, token) => {
        console.log(token, err);
        if (err) reject(err);
        resolve(token);
      }
    );
  });
}

module.exports = {
  createAccessToken,
};
