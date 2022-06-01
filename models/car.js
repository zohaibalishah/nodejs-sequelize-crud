const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Car = sequelize.define(
  "cars",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    model: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
  },
  { timestamps: false }
);
module.exports = Car;
