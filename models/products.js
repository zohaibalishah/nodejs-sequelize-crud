const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Product = sequelize.define(
  "products",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    mrp: DataTypes.FLOAT,
    stock: DataTypes.INTEGER,
    isPublished: DataTypes.BOOLEAN,
  },
  { timestamps: false }
);

module.exports = Product;
