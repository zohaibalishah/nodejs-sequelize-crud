const express=require("express");
const bodyParser=require("body-parser")
const app=express();

require("./models/products")
app.use(bodyParser())
app.use("/api/products",require("./routes/products"))
app.listen(4000,()=>{
    console.log('server is running')
})