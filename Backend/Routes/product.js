const {Router}=require("express");
const productRoute=Router();
const{userMiddleware}=require("../middleware/user");
const{purchaseModel,productModel}=require("../db");

productRoute.get('/preview',async (req,res)=>{
    const course=await productModel.find({});
    res.json({
        course
    })
})
module.exports={
    productRoute:productRoute
}