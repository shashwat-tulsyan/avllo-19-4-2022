const mongoose=require('mongoose');
const employSchema=new mongoose.Schema({
    fname:
    {
        type:String,
        required:true
    },
    lname:
    {
      type:String,
      required:true
    },
    email:
    {
        type:String,
        required:true
    },
    address:
    {
        type:String,
        required:true
    },
    phone:
    {
        type:String,
        required:true
    },
    employimage:
    {
        type:String,
        required:true
    },
    comment:
    {
        type:String,
        required:true
    }


})
const Employ=mongoose.model('EMPLOY',employSchema);
module.exports=Employ;