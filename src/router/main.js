const express=require("express")
const Borrower = require("../models/Borrower")
const router=express.Router()
const Lender=require("../models/Lender")
router.post("/create",async(req,res)=>{
     const borrower=new Borrower(req.body[0])
     try{
         await borrower.save()
         const lender=new Lender({
             ...req.body[1],
             borrower:borrower._id.toString()
         })
         await lender.save()
         res.status(200).send([borrower,lender])

     }catch(e){
        res.status(500).send(error)
     }
})
router.get("/getInfo",async (req,res)=>{
    try{
        const borrower=await Borrower.find()
        let array=await Promise.all(borrower.map(async (b)=>{
            let lender=await Lender.findOne({
                borrower:b._id.toString()
      })
        return [b,lender]
    }))
        res.send(array)
    }catch(e){
        res.status(500).send(e)
    }
})
module.exports= router