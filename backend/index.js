const express = require("express")
const cors= require("cors")
const bodyParser=require("body-parser")
const server=express()
server.use(cors())
server.use(bodyParser.json())
const route = require('./route/route.js');
const { default: mongoose } = require('mongoose');
mongoose.connect("mongodb+srv://gauravpandeyidforfunctionup:XvjHpLyNrIONLzb1@cluster0.a7th0vg.mongodb.net/CRUD_Operation?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )
server.use('/', route);
server.listen(process.env.PORT||8080 ,()=>{
console.log("server started on port", process.env.PORT||8080)
})