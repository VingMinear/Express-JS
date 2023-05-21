const mongoose =require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    age:{
        type:Number,
        min:18,
        max: 65,
        require:true,
    },
    phone:{
        type:String,    
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    created:{
        type:Date,
        default:Date.now(),
    },
});
module.exports = mongoose.model('users',userSchema);