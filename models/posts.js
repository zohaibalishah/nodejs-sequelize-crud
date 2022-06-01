const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Post = sequelize.define(
  "posts",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    isPublished: DataTypes.BOOLEAN,
    user_id: DataTypes.INTEGER,

  },
  { timestamps: false }
);
module.exports = Post;
