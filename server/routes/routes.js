const express= require("express");
const router=express.Router();
const { controllerRegisterUser } = require('../controllers/users');
router.post('/user',controllerRegisterUser);

module.exports=router;