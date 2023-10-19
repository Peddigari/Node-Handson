//const express=require("express")

//const router=express.Router()

//or
const {login,signup,register} = require("../controller/userController")
const route=require("express").Router();
const usercontrol = require("../controller/userController");
const validate = require("../middleware/userMiddleware")
// route.get("/api/login",(req,res)=>{
//     res.send("this is our login page")
// });
// route.get("/api/signup",(req,res)=>{
//     res.send("this is our signup page")
// });
// route.get("/api/register",(req,res)=>{
//     res.send("this is our register page")
// });

route.get("/login",validate,login)
route.get("/signup",signup)
route.get("/register",register)
module.exports=route;

// http://localhost:5000/user/api/login
// http://localhost:5000/user/api/signup