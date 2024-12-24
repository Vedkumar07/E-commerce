const jwt=require("jsonwebtoken");
const {JWT_SECRET_ADMIN}=require("../config");
function amdminMiddleware(req,res,next){
    const token=req.headers.token;
    const decode=jwt.verify(token,JWT_SECRET_ADMIN);
    if(decode){
        req.userId=decode.id;
        next()
    }else{
        res.status(403).json({
            message:"You are not Signed in"
        })
    }
}
module.exports={
    amdminMiddleware:amdminMiddleware
}