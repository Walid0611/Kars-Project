const express = require('express')

const contactRouter = express.Router()

const bookingSchema= require('../model/Booking')


contactRouter.get('/getuser',async(req,res)=>{
    try{
        const contact = await bookingSchema.find()
        res.status(200).json({msg:'this is ur user list',contact })
    }catch(err){
        console.log(err)
    }
})


contactRouter.post('/addUser',async(req,res)=>{
    try{
   const newContact = new bookingSchema(req.body)
   await  newContact.save()
     res.status(200).json({msg:'you could add ur new contact',newContact})
    }catch(err){
        console.log(err)
    }
})

contactRouter.put('/updateuser/:id',async(req,res)=>{
    try{
const {id}=req.params
const updateuser = await  bookingSchema.findByIdAndUpdate(id,{$set:{...req.body}})
res.status(200).json({msg:"you could update me",updateuser})
    }catch(err){
        console.log(err)
        res.send("theres a problem")
    }
})

contactRouter.delete('/deleteUser/:id',async(req,res)=>{
    try{
        const {id}=req.params
        const deleteBooking = await bookingSchema.findByIdAndDelete(id)
        res.status(200).json({msg:'you deleted that user'})
    }catch(err){
        console.log(err)
    }
})

contactRouter.get('/getuser/:id',async(req,res)=>{
    try{
        const {id}=req.params
        const getUniqueUser = await bookingSchema.findById(id)
        res.status(200).json({msg:'you found that user',getUniqueUser})
    }catch(err){
        console.log(err)
    }
})




module.exports= contactRouter