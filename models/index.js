const User = require("./users");
const Car = require("./car");
const Post = require("./posts");
const Product = require("./products");

Car.belongsTo(User,{foreignKey:'user_id'});
User.hasOne(Car,{foreignKey:'user_id'});
User.hasMany(Post,{foreignKey:'user_id'});
Post.belongsTo(User,{foreignKey:'user_id'});




module.exports={User,Car,Post,Product}
