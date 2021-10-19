const db = require('../config/firebase.config.js')
const response=require('express').response;
const controllerRegisterUser=async (req,res=response)=>{
    
    // const docRef=db.collection('users').doc()
    // await docRef.set({
    //     email: req.body.email,
    //     password:req.body.password,
    //     user_rol: 1815
    //   });

    res.end()
}

module.exports={
    controllerRegisterUser,
}