const express = require("express");
const dummydata = require("./dummydata")
const cors=require("cors")
const arr=[]
const app = express();
app.use(cors({
    origin:"*"
}))
app.use(express.json())
app.get("/about",(req,res)=>{
    res.send("i am about")
});
app.get("/contact",(req,res)=>{
    res.send("i am contact")
});
app.get("/",(req,res)=>{
    res.send("i am home")
});
app.get("/fetchJson",(req,res)=>{
    res.send(dummydata)
});
app.post("/login",(req,res)=>{
   const data=req.body
   console.log(data)
   arr.push(data)
    res.send(arr)
});

app.listen(3000,()=>{
    console.log("server is good")
})