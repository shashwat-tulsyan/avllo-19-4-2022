const mongoose=require('mongoose');
const projectSchema=new mongoose.Schema({
    pname:
    {
        type:String,
        required:true
    }
})
const Project=mongoose.model('PROJECT',projectSchema);
module.exports=Project;