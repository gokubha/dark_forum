const express = require('express')
const app = express()
const db = require('./server/config/db')
const seed = require('./server/config/seed')
const mongoose = require('mongoose')
var cors = require('cors')
var path = require('path')
app.use(cors())

db()

app.use(express.urlencoded({ extended: false, limit: '50mb', parameterLimit: 30000000 }))
app.use(express.static(path.join(__dirname,'/server/public')));


const adminRoutes = require("./server/Routes/adminRoutes")
const userRoutes = require("./server/Routes/userRoutes")

app.use("/user", userRoutes)
app.use("/admin", adminRoutes)

app.get("/",(req,res)=>{
  res.send("💀💀💀YO00 BRO💀💀💀")
})

app.listen(5000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("server is running");
  }
})
