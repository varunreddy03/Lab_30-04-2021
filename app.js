var express = require("express")

var exApp = new express()

exApp.get("/",(req,res)=>{
  res.write("Get Request")
  res.end()
})

exApp.get("/student",(req,res)=>{
  res.write("In Student end point get request")
  res.end()
})

exApp.get("/student/:id",(req,res)=>{
  res.write("Student details of "+req.params.id+" fetched")
  res.end()
})
exApp.listen(5000,()=>{
  console.log("Express server started at 5000...")
})