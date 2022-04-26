const mongoose=require('mongoose');
const projectSchema=new mongoose.Schema({
    pname:
    {
        type:String,
        required:true
    },
    pb:
    {
        type:String,
        required:true
    },
    sd:
    {
        type:String,
        required:true
    },
    ed:
    {
        type:String,
        required:true
    },
    nom:
    {
        type:String,
        required:true
    },
    percentage:
    {
        type:String,
        required:true
    }
})
const Project=mongoose.model('PROJECT',projectSchema);
module.exports=Project;


//pname,pb,sd,ed,nom, percentage