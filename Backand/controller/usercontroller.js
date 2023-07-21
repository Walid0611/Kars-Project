const userSchema = require('../model/user')

const bcrypt = require('bcrypt')

//token jwt 
const jwt = require('jsonwebtoken')

exports.register=async(req,res)=>{
    try{
       
        
const {name,email,password}=req.body
// user email unique 
const found = await userSchema.findOne({email})
if(found){return res.json({msg:'you already have an account , go to login  '})}
const newUser = await new userSchema(req.body)


const saltRounds = 10
const salt = bcrypt.genSaltSync(saltRounds);
const hash = bcrypt.hashSync(password, salt);
newUser.password = hash
newUser.save()
res.json({msg:'welcome to the groupe',newUser})
    }catch(err){
        console.log(err)
        res.json({msg:'you have something wrong with ur register'})
    }
}

exports.login=async(req,res)=>{
    try{
const {email,password}=req.body
const found = await userSchema.findOne({email})

if(!found){return res.json({msg:'please register'})}

const match = await bcrypt.compare(password,found.password )
if(!match){return res.json({msg:'password incorrect'})}
//partie token 
const payload = {id : found._id}
var token = jwt.sign(payload,process.env.privateKey)
res.json({msg:'ur welcome login ', found,token})


}catch(err){
        console.log(err)
        res.json({msg:'you have a prob with ur login'})
    }
}

exports.userUpdate=async(req,res)=>{
try{
const {id}=req.params
const updateContact = await userSchema.findByIdAndUpdate(id,{$set:{...req.body}})
res.json({msg:'you have an update',updateContact})
}catch(err){
    console.log(err)
    res.send('you have a problem in update')
}
}

exports.getAll=async(req,res)=>{
    try{
        const all = await userSchema.find()
res.send(all)
    }catch(err){
        console.log(err)
    }
}