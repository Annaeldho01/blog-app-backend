const express = require("express")
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const cors = require("cors")
const jwt = require("jsonwebtoken")

let app=express()

app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(3030,()=>{
    console.log("server started")
})