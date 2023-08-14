const express = require ('express')
const app = express()
const cors = require('cors')
const connectdb = require('./config/conecteddb')
require ('dotenv').config()




//import routes
const userRoute = require('./routes/routeuser')
const BookingRouter = require ('./routes/BookingRoute')

app.use(cors())
app.use(express.json())

// partie conection db
connectdb()

//path principale de login 
app.use('/auth',userRoute)

app.use ('/booking',BookingRouter)

app.use((req,res)=>{
    res.send("API is running...")
    
    })

    const port =  process.env.PORT || 3002

app.listen(port,err=>{
    err?console.log(err):console.log('go port${port}')
})