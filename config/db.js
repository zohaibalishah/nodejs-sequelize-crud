const { Sequelize, DataTypes } = require("sequelize");
// const sequelize = new Sequelize('sqlite::memory:');
// const sequelize = new Sequelize("test", "root", "", {
//   host: "localhost",
//   dialect: "mysql" /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
// });


const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
  });

module.exports=sequelize
// const sqlite3=require("sqlite3").verbose()
// const db1=new sqlite3.Database(':memory:',(error)=>{
//     if(error){
//         console.log('err',d)

//     }
// console.log('db1',db1)

// })