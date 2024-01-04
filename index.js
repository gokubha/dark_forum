const express = require('express')
const app = express()
const db = require('./server/config/db')
var cors = require('cors')
db()
const seed = require('./server/config/seed')
const adminRoutes = require("./server/Routes/adminRoutes")
const userRoutes = require("./server/Routes/userRoutes")
app.use(cors())

app.use(express.urlencoded({ extended: false, limit: '50mb', parameterLimit: 3000 }))

app.get("/",(req,res)=>{
  res.send("💀💀💀FUCK YOU BRO💀💀💀")
})

app.use("/api/user", userRoutes)
app.use("/api/admin", adminRoutes)


app.listen(4000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("server is running");
  }
})
