const express = require("express");
const route = require("./router/userRouting")
const Productroute = require("./router/productRouting")
const dummydata = require("./dummydata")
const {Data} = require("./dummydata")
const port=5000
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
    // res.send("what is express:Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application.Its a layer built on the top of the Node js that helps manage servers and routes.")
    res.send({
        "msg":"what is express",
        ans:Data
    })

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

app.use("/user",route)
app.use("/user",Productroute)

app.listen(5000,()=>{
    console.log(`server is good on ${port}`)
})
