
const express = require('express');
const loginRoute=require('./auth/login');
const userRoute = require('./user/user');
const registerRoute = require('./auth/register');
require('./db/database');
//----------------------------------------------------------------

const app = express();
// this call midleware
app.use(express.json());
app.use('/register',registerRoute);
app.use(express.urlencoded());
// route user that export from user.js
app.use('/user',userRoute);
// route user that export from login.js
app.use('/login',loginRoute);
// port listening on http://localhost:8080
const port=8080;
app.listen(port,()=>{
    console.log("Server runing on port " + port);
},);

//----------------------------------------------------------------

