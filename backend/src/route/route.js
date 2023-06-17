const express = require('express');
const signUp=require('../controller/signUpController')
const router = express.Router();
router.post("/demo", (req,res)=>{
    console.log(req.body)
    res.send(req.body)
})
router.post('/signUp',signUp.registerUser)
router.put('/deleteUser',signUp.deleteUser)
router.delete('/permanentDeleteUser',signUp.permanentDeleteUser)
module.exports=router