const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const app = express()
const port = process.env.PORT
const connectDb = require('./database/connect')



//middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

connectDb()


//routes
app.use('/api/users',require('./routes/userRoutes'))
app.use('/api/events',require('./routes/eventRoutes'))
app.use('/api/booking',require('./routes/bookingRoutes'))
app.use('/api/tickets',require('./routes/ticketRoutes'))

app.listen(port,()=>console.log(`server running on port ${port}`))