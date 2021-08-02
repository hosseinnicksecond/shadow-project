const express= require("express");
const mongoose= require("mongoose");
const multer =require("multer");
const colors= require("colors");
const path= require("path");
const session= require("express-session");


const app= express();

const PORT=process.env.PORT || 2020;
const mongoDbURI="mongodb://127.0.0.1:27017/shadow";

const fileStorage= multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"images");
    },
    filename:(req,file,cb)=>{
        cb(null,new Date().toISOString+"-"+file.fieldname+"%%"+file.originalname);
    }
});

const fileFilter=(req,file,cb)=>{
    if(file.mimetype==="image/jpg"||file.mimetype==="image/jpeg"){
        cb(null,true);
    }else{
        cb(null, false);
    }
};

app.set("view engine","ejs");

app.use(express.static(path.join(__dirname,"public")));

app.use(express.static(path.join(__dirname,"images")));

app.use(multer({storage:fileStorage,fileFilter:fileFilter}).fields([{name:"field1"},{name:"field2"}]));







mongoose.connect(mongoDbURI)
.then(result=>{
    app.listen(PORT)
    console.log("Connected".green);
}).catch(err=>{
    console.log(err);
});


