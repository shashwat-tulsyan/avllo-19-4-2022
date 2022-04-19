const mongoose=require('mongoose');
const DB=process.env.DATABASE
const PORT=process.env.PORTNO

mongoose.connect(DB).then(()=>{
    console.log('dataBase has been connected')
}).catch(err=>
    {
        console.log(err);
    })