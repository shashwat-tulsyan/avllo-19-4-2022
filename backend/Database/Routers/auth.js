const express=require('express');
const router=express.Router();
const Project=require('../Models/projectSchema');
const Employ=require('../Models/employSchema');
const Support=require('../Models/supportSchema');

const multer=require('multer');
var path = require('path')


//*******************************project************************************** */ 
router.post('/insertproject',async(req,res)=>
{
 //   console.log(req.body);
    const {pname}=req.body;
    if(!pname)
    {
        return res.status(422).json({error:"please insert datataaa"});
    }
    try
    {
        const project= new Project({pname});
const insertdata=await project.save();
if(!insertdata)
    {
       console.log("not inserted");
       return res.status(404).json({error:"not inserted"});
    }
    else
    {
        console.log("inserted");
        return res.status(200).json({message:"inserted"});

    }

    }
    catch(err)
    {
      console.log(err);
    }

})
// fetching project..............
router.get('/fetpro',function(req,res){
  Project.find({}).exec(function(err,projects){
      if(err)
      {
       console.log(err);
       res.json({error:"cannor fetch the data"});
      }
      else
      {
       //console.log(projects);
       res.json(projects);
      }
  })
});

// fetching single data for project
router.get('/fetproid/:id',(req,res)=>
{
    Project.findById(req.params.id).then((project)=> //you have to write req.params.id then only it will fetch tje data
    {
        res.json(project)
        //employ:employ
    }).catch(err=>
        {
            res.status(400).json(err);
        })
})
// *******************************************employyyy***************************************


   var storage = multer.diskStorage({

    destination:(req,file,callback)=>
    {
       callback(null,'../dashboard/public/uploads/');
    },
    filename:(req,file,callback)=>
    {
      //const uniqueSuffix = Date.now()+Math.round(Math.random() * 1E9)
      callback(null,file.originalname)
    }
    });

 const upload=multer({storage:storage});
//  
  router.post('/employ', upload.single('employimage'),async(req,res)=>
  {
    const employ=new Employ({
      fname:req.body.fname,
      lname:req.body.lname,
      email:req.body.email,
      address:req.body.address,
      phone:req.body.phone,
      comment:req.body.comment,
      employimage:req.file.originalname,
    })
   const insert= await employ.save();
   if(insert)
   {
    return res.status(200).json({message:"employ inserted"});

   }
   else
   {
    return res.status(404).json({error:"employ not inserted"});

   }
    
  })
//  fetching employee.............................................
router.get('/fetemp',(req,res)=>
{
    Employ.find().then((employ)=>{res.json(employ)}).catch(err=>
        {
            res.status(400).json(err);
        })
})


// fetching single employ data........
router.get('/fetempid/:id',(req,res)=>
{
    Employ.findById(req.params.id).then((employ)=> //you have to write req.params.id then only it will fetch tje data
    {
        res.json(employ)
        //employ:employ
    }).catch(err=>
        {
            res.status(400).json(err);
        })
})


// ***********************************support schema***********************************************
router.post('/support',async(req,res)=>
{
  const {supp,datee}=req.body;
  if(!supp  &&  !datee)
  {
        return res.status(422).json({error:"please insert datataaa"});
    }
    try
    {
    const support= new Support({supp,datee});
const insertdata=await support.save();
if(!insertdata)
    {
      // console.log("not inserted");
       return res.status(404).json({error:"not inserted"});
    }
    else
    {
       // console.log("inserted");
        return res.status(200).json({message:"inserted"});

    }

    }
    catch(err)
    {
     // console.log(err);
    }

})

// ***************************************fetching support data*******************************************
router.get('/supportdata',(req,res)=>
{
    Support.find().then((support)=>{res.json(support)}).catch(err=>
        {
            res.status(400).json(err);
        })
})
// **********************************************************************************
// **********************************************************************************
// **********************************************************************************
// **********************************************************************************
// **********************************************************************************


module.exports=router;