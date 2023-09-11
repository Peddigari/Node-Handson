const validate=(req,res,next)=>{
    // try{
    //     const age=req.query.age;
        if(req.query.age>=18){
            next();
        }else{
            res.send({msg:"user not allowed"});
            console.log("specific middleware running")
        }
    }
// };

module.exports=validate;