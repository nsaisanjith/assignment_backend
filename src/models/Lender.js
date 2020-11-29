const mongoose=require("mongoose")
const validator= require("validator")

const LenderSchema = new mongoose.Schema({
       name:{
           type:String,
           trim:true,
           required:true
        },
        phone_no:{
            type:String,
            trime:true,
            required:true
        },
        address:{
            type:String,
            trim:true,
            required:true
        },
        email:{
            type:String,
            trim:true,
            required:true,
            validate(value){
                if(!validator.isEmail(value)){
                    throw new Error("Invalid Email Address")
                }
            }
        },
        borrower:{
            type:String,
            required:true
        }
    
})

const Lender=mongoose.model("Lender",LenderSchema)
module.exports=Lender