//import userRoutes from './routes/userRoute.js'
const express = require('express');
require('dotenv').config()
const app = express()
const cors = require("cors")
const port = process.env.PORT=3002;

/*app.get('/',(req,res)=>{
    res.send("hello")
})*/
//use cors
app.use(cors())
//use json
app.use(express.json())
//to lkoload routes
//app.use("/api/user",userRoutes)
//app.use(router)

app.listen(port,()=>{
    console.log(`server running at port ${port}`)
})