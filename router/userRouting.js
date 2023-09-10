//const express=require("express")

//const router=express.Router()

//or

const route=require("express").Router()
route.get("/api/login",(req,res)=>{
    res.send("this is our login page")
});
route.get("/api/signup",(req,res)=>{
    res.send("this is our signup page")
});
route.get("/api/register",(req,res)=>{
    res.send("this is our register page")
});

// route.get("/api/login",login)
// route.get("/api/signup",signup)
// route.get("/api/register",register)
module.exports=route;

// http://localhost:5000/user/api/login
// http://localhost:5000/user/api/signup