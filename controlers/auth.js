const { User, Car } = require("../models");
const {
  getHashValue,
  compareHashValue,
  signAccessToken,
} = require("../helpers/hash.helper");
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      include: Car,
      where: { email: email },
    });
    if (user === null) {
      return res.status(500).send({ msg: "user not found" });
    } else {
      // const isMatch = await compareHashValue(user.password, password);
      if (user.password != password) {
        return res.status(500).json({ msg: "password incorrect" });
      }
      const token = signAccessToken(user);
      return res.status(200).json({ msg: "login", user, token });
    }
  } catch (err) {
    return res.status(500).send({ err });
  }
};
const signup = async (req, res, next) => {
  try {
    const data = req.body;
    const isuser = await User.findOne({
      where: { email: data.email },
    });
    if (isuser) {
      return res.status(500).json({ msg: "email already exist" });
    }
    // const hashpassword = await getHashValue(req.body.password);
    // data["password"] = hashpassword;
    const user = await User.create(data);
    return res.status(200).json({ msg: "signup", user });
  } catch (err) {
    return res.status(500).send("Server Error!");
  }
};
const currrentUser = async (req, res, next) => {
  try {
    const { id } = req.user;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(500).json({ msg: "user not found " });
    }
    return res.status(200).json({ msg: "current", user });
  } catch (err) {
    return res.status(500).send("Server Error!");
  }
};

module.exports = {
  login,
  signup,
  currrentUser,
};
