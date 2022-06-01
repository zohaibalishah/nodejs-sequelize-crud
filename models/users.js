const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const { getHashValue } = require("../helpers/hash.helper");
const User = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    // firstName: DataTypes.TEXT,
    // lastName: DataTypes.TEXT,
    name: DataTypes.STRING,
    // fullname: {
    //   type: DataTypes.STRING,
    //   get() {
    //     const fullName = this.name+"sss";
    //     return fullName;
    //   },
    // },
    email: DataTypes.STRING,
    password: {
      type: DataTypes.STRING,
      async set(value) {
        const hash = await getHashValue(value);
        this.setDataValue("password", hash);
      },
    },
  },
  { timestamps: false }
);

module.exports = User;
