const Chat = require('../models/chatModel');

const createChat = async function (req, res) {
  try {
    const { senderId, recipientId, content } = req.body;

    const chat = await Chat.create({
      senderId,
      recipientId,
      content,
    });

    res.status(200).send({ status: true, data: chat });
  } catch(err){
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
};

const getChatById = async function (req, res) {
  try {
    const { chatId } = req.params;

    const chat = await Chat.findById(chatId);

    if (!chat) {
      return res.status(404).send({ status: false, message: 'Chat not found' });
    }

    res.status(200).send({ status: true, data: chat });
  } catch (err) {
    res.status(500).send({ status: false, message: err.message });
  }
};

const updateChat = async function (req, res) {
  try {
    const { chatId } = req.params;
    const updates = req.body;

    const chat = await Chat.findByIdAndUpdate(chatId, updates, { new: true });

    if (!chat) {
      return res.status(404).send({ status: false, message: 'Chat not found' });
    }

    res.status(200).send({ status: true, data: chat });
  } catch(err){
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
};

const deleteChat = async function (req, res) {
  try {
    const { chatId } = req.params;

    const chat = await Chat.findByIdAndDelete(chatId);

    if (!chat) {
      return res.status(404).send({ status: false, message: 'Chat not found' });
    }

    res.status(200).send({ status: true, data: 'Chat deleted successfully' });
  } catch (err) {
    res.status(500).send({ status: false, message: err.message });
  }
};

module.exports = { createChat, getChatById, updateChat, deleteChat };
