var express = require("express")

var exApp = new express()

exApp.get("/",(req,res)=>{
  res.write("Get Request")
  res.end()
})

exApp.post("/",(req,res)=>{
  res.write("Post Request")
  res.end()
})

exApp.put("/",(req,res)=>{
  res.write("Put Request")
  res.end()
})

exApp.delete("/",(req,res)=>{
  res.write("Delete Request")
  res.end()
})

exApp.listen(5000,()=>{
  console.log("Express server started")
})