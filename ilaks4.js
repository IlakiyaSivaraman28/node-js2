const express=require("express");
const app=express();
const path=require("path");

app.get("/html",(req,res)=>{
    res.sendFile(path.join(__dirname,"ilaks.html"));
})
app.get("/html",(req,res)=>{
    res.sendFile(path.join(__dirname,"ilaks2.html"));
})
app.get("/html",(req,res)=>{
    res.sendFile(path.join(__dirname,"ilaks3.html"));
})
app.listen(3978 ,()=>{
    console.log("server is running");
})
