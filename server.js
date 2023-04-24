const express = require('express');
const loginRoute=require('./auth/login');

//----------------------------------------------------------------

const app = express();
app.use(express.json());
app.use(express.urlencoded());
const port=8080;
app.listen(port,()=>{
    console.log("Server runing on port " + port);
},);

//----------------------------------------------------------------

app.use('/login',loginRoute);