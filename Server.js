const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const dburl = "mongodb://localhost:27017/airlinesystem"
mongoose.connect(dburl).then(() => {
    console.log("Connected to DB Successfully")
}).catch((err) => {
    console.log(err.message) 
});

const app = express() 
app.use(cors())
app.use(express.json()) 

const userrouter = require("./routes/userroute")
const adminrouter = require('./routes/adminroutes')
const transrouter = require('./routes/transroute');

app.use("",userrouter)
app.use("",adminrouter)
app.use("",transrouter)


const port = 2024
app.listen( port, () =>{
    console.log(`Server is Running at ${port}`)
})