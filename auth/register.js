const express=require("express");
const router=express.Router();
const userModel=require('../models/user_model');

// register user or add user
router.post('/',async (req,res)=>{

   const data={
    name:req.body.name,
    age:req.body.age,
    phone:req.body.phone,
    password:req.body.password,
   }
   
   try {
    const user = new userModel(data);
    // it mean submit to data base that userModel is using mogooses 
    await user.save();
    res.json(user);
   } catch (error) {
    res.json(error);
   }

});

// get users
router.get('/',async(req,res)=>{
    const users=await userModel.find();
    res.json(users);
});

// get users by id
router.get('/:id',async(req,res)=>{

    try {
        const users=await userModel.findById(req.params.id);
        res.json(users);
    } catch (error) {
        res.json(error);
    }

});

module.exports=router;