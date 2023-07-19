const mongoose = require('mongoose')

const ContactSchema = mongoose.Schema({

    nome:String,
    series:Number,
    categories:String,
    model:String,
    color:String

    
    


})

module.exports = mongoose.model('walid',ContactSchema)