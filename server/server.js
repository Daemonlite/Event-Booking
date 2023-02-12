const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const app = express()
const port = process.env.PORT
const connectDb = require('./database/connect')
const cloudinary = require('cloudinary').v2


//middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

connectDb()

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
  });
//routes
app.use('/api/users',require('./routes/userRoutes'))
app.use('/api/events',require('./routes/eventRoutes'))
app.use('/api/booking',require('./routes/bookingRoutes'))
app.use('/api/tickets',require('./routes/ticketRoutes'))

app.listen(port,()=>console.log(`server running on port ${port}`))