const express = require('express');
const router=express.Router();

router.post('/', (req, res)=>{
    res.json({
        message:"get data successfully",

    });
});
router.get('/', (req, res)=>{
    res.json({
        message:"get data successfully",
    });
});
//http://localhost:8080/user/15 -> res : this is id 15
router.patch('/:id', (req, res)=>{
    res.send("this is id :"+req.params.id);
});
router.delete('/:id', (req, res)=>{
    res.send("this id have been deleted :"+req.params.id);
});


module.exports = router;