const express = require("express")
const cors = require("cors")
const route = require('./route/route.js');
const { default: mongoose } = require('mongoose');
require('dotenv').config()
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
mongoose.connect(process.env.mongoDb, {useNewUrlParser: true}).then(() => console.log("MongoDb is connected")).catch(err => console.log(err))
app.use('/', route);
app.listen(process.env.PORT, () => {
    console.log("server started on port", process.env.PORT)
})