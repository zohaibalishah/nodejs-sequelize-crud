const express = require("express");
const router = express.Router();
const userControler = require("../controlers/auth");
const {authenticate} =require("../helpers/hash.helper")
router.post("/login", userControler.login);
router.post("/signup", userControler.signup);
router.get("/",authenticate, userControler.currrentUser);

module.exports = router;
