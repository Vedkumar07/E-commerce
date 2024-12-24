const {Router}= require ("express");
const userRouter=Router();
const {userModel}=require("../db");
const {purchaseModel}=require("../db")
const bcrypt=require("bcrypt");
const {z}=require("zod")
const jwt =require("jsonwebtoken");
const {JWT_SECRET_USER}=require("../config");
const {userMiddleware}=require("../middleware/user")

userRouter.post('/signup',async (req,res)=>{
    const requireBody=z.object({
        email:z.string().min(5).max(100).email(),
        password:z.string().min(5).max(100),
        firstName:z.string().min(3).max(100),
        lastName:z.string().min(3).max(100)
    })
    const parseDataWithSucess=requireBody.safeParse(req.body);
    if(!parseDataWithSucess.success){
       return res.status(400).json({
            message:"Incorrect format",
            error:parseDataWithSucess.error
        });
    }
    const email=req.body.email;
    const password=req.body.password;
    const firstName=req.body.firstName;
    const lastName=req.body.lastName;
    try{
        const hasedPassword=await bcrypt.hash(password,10);
        await userModel.create({
            email:email,
            password:hasedPassword,
            firstName:firstName,
            lastName:lastName
        });
        return res.json({
            message:"You are Signed up"
        })
    }catch(e){
        return res.status(500).json({
            message:"Error During signUp",
            error:e.message
        })
    }
})
userRouter.post('/signin',async (req,res)=>{
    const email=req.body.email;
     const password=req.body.password;
     const response=await userModel.findOne({
         email:email
     });
     if(!response){
         res.status(403).json({
             message:"user dosent exist"
         })
     }
     const passwordMatch=await bcrypt.compare(password,response.password);
     if(passwordMatch){
         const token=jwt.sign({
             id:response._id.toString()
         },JWT_SECRET_USER);
         return res.json({
             token
         })
     }else{
         return res.status(403).json({
         message:"Incorrect cread"
     })
     }
})
userRouter.get('/purchases',userMiddleware,async (req,res)=>{
    const creatorId=req.userId;
    const courses=await purchaseModel.find({
        creatorId
});
const courseData=await productModel.find({
    _id:{$in:courses.map(x=>x.courseId)}
})
    res.json({
        courseData
    })
})
module.exports={
    userRouter:userRouter
}

//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NTQ5OTMyMmRiNjZhYzU2ODFjMTVlYSIsImlhdCI6MTczMzkxNzQ2N30.b94VhndJReTxC6FDZDG3CqxoVT9rfGVLVfhPZYqkE-I"
//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NTk3ZGQ1YTYxMDliMTc3NWUwMzQyMiIsImlhdCI6MTczMzkxODIyOH0.a95-Gp3fCn0qkZsaLT5tla1EVxNJYTo3Pnde39YA4IY"
//"67597f4fa6109b1775e03425"