const mongoose = require('mongoose')

const ContactSchema = mongoose.Schema({

    name: {
        type:String,
        required:true,
    },
    series:{
        type:Number,
        required:true,
    },
categories:{
    type:String,
    required:true,
},
model:{
    type: String,
    required:true
},
Image:String


    
    


})

module.exports = mongoose.model('walid',ContactSchema)