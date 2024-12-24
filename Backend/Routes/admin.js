const {Router}=require("express");
const createAdmin=Router();
const {adminModel}=require("../db");
const {productModel}=require("../db")
const bcrypt=require("bcrypt");
const {z}=require("zod")
const jwt =require("jsonwebtoken");
const {JWT_SECRET_ADMIN}=require("../config");
const { amdminMiddleware } = require("../middleware/admin");
createAdmin.post('/signup',async (req,res)=>{
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
         await adminModel.create({
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
});
createAdmin.post('/signin',async (req,res)=>{
     const email=req.body.email;
     const password=req.body.password;
     const response=await adminModel.findOne({
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
         },JWT_SECRET_ADMIN);
         return res.json({
             token
         })
     }else{
         return res.status(403).json({
         message:"Incorrect cread"
     })
     }
    
});
createAdmin.post('/product',amdminMiddleware,async (req,res)=>{
    const adminId=req.userId;
    const{title,description,price,imageURL}=req.body;
    const course=await productModel.create({
        title:title,
        description:description,
        price:price,
        imgURL:imageURL,
        creatorId:adminId
    })
    res.json({
        message:"Course Created",
        courseId:course._id
    })
    
})
createAdmin.put('/purchases',amdminMiddleware,async (req,res)=>{
    const adminId=req.userId;
    const{title,description,price,imageURL,courseId}=req.body;
    const course=await productModel.updateOne({
        _id:courseId,
        creatorId:adminId
    },{
        title:title,
        description:description,
        imgURL:imageURL,
        price:price
    })
    console.log(course);
    res.json({
        message:"Course Updated",
        courseId:course._id
    })
})
createAdmin.get('/course/bulk',amdminMiddleware,async (req,res)=>{
    const adminId=req.userId;
    const course=await productModel.find({
        creatorId:adminId
    });
    res.json({
        message:"Course Update",
        course
    })
})
module.exports={
    createAdmin:createAdmin
}







//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NTIxNjFmMThlMzk0Yjk4MjVmM2I3MCIsImlhdCI6MTczMzUxMzU5NX0.MLGtdVMAmEfax98zKh7cH5qUl7xnl9RX45xazEgs0p8
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NTIxNjFmMThlMzk0Yjk4MjVmM2I3MCIsImlhdCI6MTczMzQzMjg4NH0.cp0Wno4TglvwJCtRp3Oiq05MKKCfyQn-xjczrb_gKuA
//675336c79066e550fd05c363