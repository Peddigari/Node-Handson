const express=require("express")
const app=express();
const port=3001;
const cors=require("cors")
const validate=require("./middleware/userMiddleware")
const  {login,signup,register} = require("./controller/userController")
const routes = require("./router/userRouting")

app.use(cors());
app.use("/api",routes)
// const appmiddle=(req,res,next)=>{
//     res.send("APP level middleware running")
//     console.log("APP level middleware running")
// }
// app.use(appmiddle) 

app.get("/api/readData",(req,res)=>{
    res.send("welcome")
})

app.get("/api/main",(req,res)=>{
    res.send({
        "what is express":"Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application.Its a layer built on the top of the Node js that helps manage servers and routes."
    })
})

// app.get("/login",validate,login)
// app.get("/signup",validate,signup) 
// app.get("/register",register)




app.listen(port,()=>{
    try{
        console.log(`server is running on port ${port}`);
    }catch(err){
        console.log(`we got error at ${err}`)
    }
});