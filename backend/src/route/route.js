const express = require('express');
const router = express.Router();
router.post("/demo", (req,res)=>{
    console.log(req.body)
    res.send(req.body)
})
module.exports=router