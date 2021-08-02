const exprress= require("express");
const mongoose= require("mongoose");
const multer =require("multer");
const colors= require("colors");
const path= require("path");
const session= require("express-session");


const app= exprress();

const PORT=process.env.PORT || 2020;
const mongoDbURI="mongodb://127.0.0.1:27017/shadow";

mongoose.connect(mongoDbURI)
.then(result=>{
    app.listen(PORT)
    console.log("Connected".green);
}).catch(err=>{
    console.log(err);
});


