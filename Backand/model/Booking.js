const mongoose = require('mongoose')

const bookingSchema = mongoose.Schema({

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
    type: Number,
    required:true
},
Image:String


    
    


})

module.exports = mongoose.model('walid',bookingSchema)