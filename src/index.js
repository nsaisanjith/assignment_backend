const express=require("express")
const app=express()
require("./Db/mongoose")
const mainRouter=require("./router/main")
const port=4000
app.use(express.json())
app.use(mainRouter)
app.listen(port,()=>{
    console.log("running")
})