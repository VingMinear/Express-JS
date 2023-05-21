// we need mongoose to use query data or something from the database mongodb

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://minea:minea123@minear.7nhkqtd.mongodb.net/').then((response)=>{
    console.log("connect to database success");
}).catch((error)=>{
    console.log("connect to database error : "+error);
});
 

module.exports =mongoose;