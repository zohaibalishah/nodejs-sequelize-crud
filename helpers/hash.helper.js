const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");
const JWT_SECRET_KEY = "JWT_SECRET_KEY";
module.exports.getHashValue = async (value) => {
  const salt = await bcrypt.genSalt(10);
  const hashValue = await bcrypt.hash(value, salt);
  return hashValue;
};

module.exports.compareHashValue = async (value, userValue) => {
  const isMatch = await bcrypt.compare(value, userValue);
  return isMatch;
};

module.exports.signAccessToken = (user) => {
  const payload = {
    id: user.id,
    email: user.email,
  };
  const token = JWT.sign(payload, JWT_SECRET_KEY);
  return token;
};

module.exports.authenticate = (req, res, next) => {
  var authorization = req.header("Authorization");
  if (authorization) {
    var token = authorization.split(" ");
    try {
      JWT.verify(token[1], JWT_SECRET_KEY, function (err, user) {
        if (err) {
          return res.json({
            status: 0,
            msg: "Failed to authenticate token.",
          });
        } else {
          req.user = user;
          next();
        }
      });
    } catch (e) {
      return res.json({
        status: 0,
        msg: e.message,
      });
    }
  } else {
    return res.json({
      status: 0,
      msg: "Please provide Token.",
    });
  }
};
