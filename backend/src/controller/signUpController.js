const signUpModel=require('../models/signUpModel')
const valid= require('../validations/valid')
const jwt= require('jsonwebtoken')
const registerUser= async function(req,res){
    try{
    const {userName,phone,email,password}=req.body
    if(!valid.isValidData(userName)){
       return  res.status(400).send({status:false, message:"Please Enter a valid name in only lowercase and uppercase letters"})
    }
    if(!valid.validMobile(phone)){
        return res.status(400).send({status:false, message:"Please Enter a valid mobile number with 10 digits"})
    }
    if(!valid.validEmail(email)){
        return res.status(400).send({status:false, message:"Please Enter a valid email address"})
    }
    if(!valid.validPassword(password)){
        return res.status(400).send({status:false,message: "please Enter a valid password with min length 8 and max 15"})
    }
    const data= await signUpModel.create(req.body)
    const token= jwt.sign({email:email,userId:data._id.toString()},"wecandoit@sharmaji#hrishiji&pandeyji@isherethenudonotneedtofear")
    res.setHeader('x-api-token',token)
    res.status(200).send({status:true,data:token})


    }catch(err){
      if(err.message.includes('validation')){
        return res.status(400).send({status:false,message:err.message})
      }
      else if(err.message.includes('duplicate')){
       return  res.status(400).send({status:false,message:err.message})
      }
      else{
        return res.status(400).send({status:false,message:err.message})
      }
      
    }
}

const loginUser= async function(req,res){
    const {email,password}=req.body
    if(!valid.validEmail(email)){
        return res.status(400).send({status:false, message:"Please Enter a valid email address"})
    }
    if(!valid.validPassword(password)){
        return res.status(400).send({status:false,message: "please Enter a valid password with min length 8 and max 15"})
    }
    const user= await signUpModel.findOne(req.body)
    if(!user){
       return res.status(400).send({status:false,message:"user not found"})
    }
    const token= jwt.sign({email:email,userId:user._id.toString()},"wecandoit@sharmaji#hrishiji&pandeyji@isherethenudonotneedtofear")
    res.setHeader('x-api-token',token)
    res.status(200).send({status:true,data:token})

}

const deleteUser= async function(req,res){
    try{
        const {userName,phone,email,password}=req.body
        if(!valid.isValidData(userName)){
           return  res.status(400).send({status:false, message:"Please Enter a valid name in only lowercase and uppercase letters"})
        }
        if(!valid.validMobile(phone)){
            return res.status(400).send({status:false, message:"Please Enter a valid mobile number with 10 digits"})
        }
        if(!valid.validEmail(email)){
            return res.status(400).send({status:false, message:"Please Enter a valid email address"})
        }
        if(!valid.validPassword(password)){
            return res.status(400).send({status:false,message: "please Enter a valid password with min length 8 and max 15"})
        }
        const data= await signUpModel.updateOne(req.body,{$set:{isDeleted:true,deletedAt:Date.now()}})
       return res.status(200).send({status:true,data:"Your Account has deleted Successfully"})
    
        }catch(err){
           return res.status(500).send({status:false,message:err.message})
            
        }
}

const permanentDeleteUser= async function(req,res){
    try{
        const {userName,phone,email,password}=req.body
        if(!valid.isValidData(userName)){
           return  res.status(400).send({status:false, message:"Please Enter a valid name in only lowercase and uppercase letters"})
        }
        if(!valid.validMobile(phone)){
            return res.status(400).send({status:false, message:"Please Enter a valid mobile number with 10 digits"})
        }
        if(!valid.validEmail(email)){
            return res.status(400).send({status:false, message:"Please Enter a valid email address"})
        }
        if(!valid.validPassword(password)){
            return res.status(400).send({status:false,message: "please Enter a valid password with min length 8 and max 15"})
        }
        const data= await signUpModel.deleteOne(req.body)
        res.status(200).send({status:true,data:"Your Account has deleted permanently"})
    
        }catch(err){
           return res.status(500).send({status:false,message:err.message})
            
        }
}
module.exports={registerUser,loginUser,deleteUser,permanentDeleteUser}