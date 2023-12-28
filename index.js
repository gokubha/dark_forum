const express = require('express')
const app = express()
const db = require('./server/config/db')
db()
const seed = require('./server/config/seed')
const adminRoutes = require("./server/Routes/adminRoutes")
const userRoutes = require("./server/Routes/userRoutes")

app.use(express.urlencoded({ extended: false, limit: '50mb', parameterLimit: 3000 }))

app.get("/",(req,res)=>{
  res.send("💀💀💀FUCK YOU BRO💀💀💀")
})

app.use("/user", userRoutes)
app.use("/admin", adminRoutes)


app.listen(4000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("server is running");
  }
})
