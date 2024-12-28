const jwt = require("jsonwebtoken");
const {JWT_SECRET_USER}=require("../config");
function userMiddleware(req,res,next){
    const auth = req.headers["authorization"]
    const token=auth.split(" ")[1]
    console.log(`token: ${token}`)
    const decode=jwt.verify(token,JWT_SECRET_USER);
    console.log(`token: ${token}`)
    if(decode){
        req.userId=decode.id;
        next()
    }else{
        res.status(403).json({
            message:"You are not log in"
        })
    }
}
module.exports={
    userMiddleware:userMiddleware
}
