const {Router}=require("express");
const productRoute=Router();
const{userMiddleware}=require("../middleware/user");
const{purchaseModel,productModel}=require("../db");


productRoute.get('/purchase',userMiddleware,async (req,res)=>{
    const creatorId=req.userId;
    const ObjectId=req.body.ObjectId;
    await purchaseModel.create({
        creatorId,
        ObjectId
    })
    res.json({
        message:"You sucefully bought the course"
    })
})
productRoute.get('/preview',async (req,res)=>{
    const course=await productModel.find({});
    res.json({
        course
    })
})
module.exports={
    productRoute:productRoute
}