const express = require('express')
const dotenv = require('dotenv').config
const cors = require('cors')
const app = express()
const port = process.env.PORT


//middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))



app.listen(port,()=>console.log(`server running on port ${port}`))