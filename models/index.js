// const { Sequelize } = require("sequelize");
// const sequelize = new Sequelize("sqlite::memory:");

// // Option 3: Passing parameters separately (other dialects)
// // const sequelize = new Sequelize("database", "username", "password", {
// //   host: "localhost",
// //   dialect: "mysql" /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
// // });

// const dbConnection = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log("Connection has been established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// };

// dbConnection()

// const db={}
// db.Sequelize=Sequelize
// db.sequelize=sequelize

// module.exports =db
