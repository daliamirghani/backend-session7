require('dotenv').config({path:"./config/vars.env"})
const express = require("express")
const app = express()
const port= 3000;

const router = require("./routes/route.js")
app.use("/books", router)

app.listen(port, ()=> console.log(`server running on port ${port} `))