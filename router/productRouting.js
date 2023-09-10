const Productroute=require("express").Router()

Productroute.get("/api/productList",(req,res)=>{
    res.send("this is our products list page")
})
Productroute.get("/api/productList/:age",(req,res)=>{
    const age=req.params.age
    if(age>=18){
       return res.send("user is allowed")
    }
    
        res.send("user not allowed")
    

    // console.log(age)
    // res.send(age)
})
Productroute.get("/api/createProduct",(req,res)=>{
    // const age=req.query.age
    // const name=req.query.name
    // or
    const{age,name,role}=req.query

    res.send({age,name,role})
})
module.exports=Productroute;
