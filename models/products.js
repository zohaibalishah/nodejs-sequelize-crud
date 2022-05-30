const { Sequelize, DataTypes } = require("sequelize");
// const sequelize = new Sequelize("sqlite::memory:");
const sequelize = new Sequelize("test", "root", "", {
  host: "localhost",
  dialect: "mysql" /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
});
const dbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

dbConnection();

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
