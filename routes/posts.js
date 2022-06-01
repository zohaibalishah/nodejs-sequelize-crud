const express = require("express");
const router = express.Router();
const posts = require("../controlers/posts");
const {authenticate} =require("../helpers/hash.helper")

router.get("/", posts.postsList);
router.get("/:id", posts.postsById);
router.post("/", authenticate,posts.postsAdd);
router.put("/:id", posts.postsUpdate);
router.delete("/:id", posts.postsDelete);

module.exports = router;
