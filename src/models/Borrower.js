const mongoose=require("mongoose")
const validator=require("validator")
const BorrowerSchema = new mongoose.Schema({
      name:{
          type:String,
          trim:true,
          required:true,
      },
        phone_no:{
          type:String,
          required:true
         },
         address:{
          type:String,
          trim:true,
          required:true,
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
    loan_amount:{
        type:Number,
        required:true
    },
    interestRate:{
        type:String,
        required:true
    },loan_start:{
        type:Date,
        required:true
    },
    loan_end:{
        type:Date,
        required:true
    }


})

const Borrower=mongoose.model("Borrower",BorrowerSchema)
module.exports=Borrower