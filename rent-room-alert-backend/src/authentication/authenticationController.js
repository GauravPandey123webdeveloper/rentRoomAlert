const jwt = require("jsonwebtoken");
const ownerModel=require("../models/ownerModel")
const tenantModel= require("../models/tenantModel")
// checking authentication
const authentication = async function (req, res, next) {
  try {
    let token = req.headers["x-api-key"];
    if (!token) {
      res.status(401).send({ status: false, message: "Please log in First " });
    } else {
      const decodedToken = jwt.verify(
        token,
        "wecandoit@sharmaji#hrishiji&pandeyji@isherethenudonotneedtofear"
      );
      if (!decodedToken) {
        res
          .status(401)
          .send({ status: false, message: "verification failded" });
      } else {
        req.decodedToken = decodedToken;
        next();
      }
    }
  } catch (err) {
    res.status(401).send({ status: false, message: "Authentication failed" });
  }
};
// checking the authorisation by authorid
const authorisation = async function (req, res, next) {
  try {
    const oEmail = req.params.email;
    const Oid = await ownerModel.findOne({ email: oEmail }).select({ _id: 0, userId: 1 });
    const Tid = await tenantModel.findOne({ email: oEmail }).select({ _id: 0, userId: 1 });
    const decId = req.decodedToken.userId;
    if(decId==Oid.userId){
        next()
    }else if(decId==Tid.userId){
        next()
    }
    else{
        res.status(403).send({status:false,message:"You are not authorised"})
    }
  } catch (err) {
    res.status(400).send({ status: false, message: "Invalid email" });
  }
};
module.exports = { authentication, authorisation };