const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const ObjectId=mongoose.Types.ObjectId;

const userSchema=new Schema({
    email:{type:String,unique:true},
    password:{type:String,unique:true},
    firstName: {type:String},
    lastName:{type:String,unique:true}
});
const adminSchema=new Schema({
    email:{type:String,unique:true},
    password:{type:String,unique:true},
    firstName: {type:String,unique:true},
    lastName:{type:String,unique:true}
});
const productSchema= new Schema({
    title: String,
    description: String,
    price: Number,
    imgURL: String,
    creatorId:ObjectId,
});
const purchaseSchema=new Schema({//add reffrences
    creatorId:ObjectId,
    userId:ObjectId
},{
    timestamps: true
});
const cartSchema=new Schema({
    creatorId:ObjectId,
    userId:ObjectId
},{
    timestamps: true
})

const userModel=mongoose.model("user",userSchema);
const adminModel=mongoose.model("admin",adminSchema);
const productModel=mongoose.model("product",productSchema);
const purchaseModel=mongoose.model("purchase",purchaseSchema);
const cartModel=mongoose.model("cart",cartSchema);
module.exports={
    userModel,
    adminModel,
    productModel,
    purchaseModel,
    cartModel
}