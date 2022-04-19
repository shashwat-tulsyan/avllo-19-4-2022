const mongoose=require('mongoose');
const supportSchema=new mongoose.Schema({
    supp:
    {
        type:String,
        required:true
    },
    datee:
    {
      type:String,
      required:true
    }
})
const Support=mongoose.model('SUPPORT',supportSchema);
module.exports=Support;