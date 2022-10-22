const express = require('express');
const cors = require('cors');
const { json } = require('express');
require('dotenv').config();

const connection = require('./Config/Connection');
const UserController = require('./Controllers/User.controller');


const app = express();
app.use(cors());
app.use(json());
app.use('/user', UserController);

app.listen(5000, async()=>{
    await connection;
    console.log(`listening to port 5000`)
})