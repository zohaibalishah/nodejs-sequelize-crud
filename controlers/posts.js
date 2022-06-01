const {Post, User} = require("../models");

const postsList = async (req, res, next) => {
  try {
    const posts = await Post.findAll({
      attributes:['id','title','description','isPublished'],
      include:{
        model:User,
        attributes:['id','name','email']
      }
    });
    return res.status(200).json({ msg: "list", posts });
  } catch (err) {
    return res.status(500).send({ err });
  }
};
const postsAdd = async (req, res, next) => {
  try {
    const {id}=req.user
    const data = req.body;
    data['user_id']=id
    const post = new Post(data);
    await post.save();
    return res.status(200).json({ msg: "add", post });
  } catch (err) {
    return res.status(500).send("Server Error!");
  }
};
const postsById = async (req, res, next) => {
  try {
    const postId = req.params.id;
    const post = await Post.findByPk(postId);
    res.status(200).json({ msg: "get post by id", post });
  } catch (err) {
    return res.status(500).send("Server Error!");
  }
};
const postsUpdate = async (req, res, next) => {
  try {
    const postId = req.params.id;
    const data = req.body;
    const result = await Post.update(data, {
      where: {
        id: postId,
      },
    });
    return res.status(200).json({ msg: "update", postId, result });
  } catch (err) {
    return res.status(500).send("Server Error!");
  }
};
const postsDelete = async (req, res, next) => {
  try {
    const postId = req.params.id;
    const result = await Post.destroy({
      where: {
        id: postId,
      },
    });
    return res.status(200).json({ msg: "delete post", postId, result });
  } catch (err) {
    return res.status(500).send("Server Error!");
  }
};

module.exports = {
  postsList,
  postsAdd,
  postsById,
  postsUpdate,
  postsDelete,
};
