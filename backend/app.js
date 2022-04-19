const dotenv=require('dotenv');
const mongoose=require('mongoose');
const express=require('express');
const multer=require('multer');
const app=express();
dotenv.config({path:'./config.env'})
const DB=process.env.DATABASE
const PORT=process.env.PORTNO
require('./Database/connection');

app.use(express.json())
const Project=require('./Database/Models/projectSchema.js');
app.use(require('./Database/Routers/auth'));
const Employ=require('./Database/Models/employSchema');
const Support=require('./Database/Models/supportSchema');

const { route } = require('./Database/Routers/auth');




app.listen(PORT);
