const express=require('express');
const router=express.Router();


router.post('/',(req,res)=>{
    const {phone}=req.body;
    if(phone==null){
        res.json({
            message:"body required",
            req:req.body,
        });
    }else if(phone!=0974278786){
        res.json({
            message:"phone number is invalid"
        });
    }else{
        res.json({
            phone:req.body,
            message:"login successful",
            token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
            refresh_token:"wRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
        });
    }
   
});
module.exports=router;