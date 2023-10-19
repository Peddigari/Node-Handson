const login=(req,res)=>{
    res.send("Login page")
    
}
const signup=((req,res)=>{
    res.send("signup page")
    
})
const register=((req,res)=>{
    res.send("register page")
    
})
module.exports = {login,signup,register}