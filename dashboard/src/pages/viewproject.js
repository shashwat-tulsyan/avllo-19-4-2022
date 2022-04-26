import React, { useState,useEffect } from 'react'
import axios from 'axios'
import {Link, useParams} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import ProgressBar from "@ramonak/react-progress-bar";



const Viewproject = () => {
  const[proname,setProname]=useState({
    pname:'',pb:'',sd:'', ed:'',  nom:'', percentage:'',
})
  let navigate = useNavigate();

    const[projectdata, setProjectdata]=useState([])
    //const[deleteproo,setDeleteproo]=useState([])
    const[updateproject,setUpdateproject]=([])
    const{id}=useParams();


    useEffect(()=>{
        const getproject =async()=>
        { 
        try
           {
              const response=await axios.get(`/fetproid/${id}`);
            // console.log(response);
              setProjectdata(response.data);
           }
           catch(err)
           {
             console.log(err);
           }
        }
        getproject()
        },[0]) 
          
       const deleteproject=async()=>
       {
         if(window.confirm("Are you sure to want to delete this project")){
        try
        {
           const response=await axios.delete(`/deleteproject/${id}`);
         //console.log(response);
           //setProjectdata(response.data);
           toast('Deleted succesfully');
           navigate('/project');
        }
        catch(err)
        {
          //console.log(err);
        } 
      }
      else
      {
        toast('not deleted');
      }
       }
         var name,value
  
  return (
    <>
 <div className='projectcard'>
<div className=" text-center">
  <div className="col-12">
  <h5>Project Name</h5>
  <h5 className="card-title mt-2 text-info">{projectdata.pname}</h5>
  </div>       

  <div className='col-12 mt-3'>
   <h6>Total Members</h6>
   <span>{projectdata.nom}</span>
  </div>
  <div className="container-fluid mt-1">
  <div className="row ">
    <div className="col-6 ">
      <h6>Start Date</h6>
      <span className='text-warning'>{projectdata.sd}</span>
    </div>
    <div className="col-6">
      <h6>End Date</h6>
      <span className='text-danger'>{projectdata.ed}</span>
       </div>
    </div>
  <div className='mt-5'>
    <span>Progress...</span>
      {<ProgressBar completed={projectdata.percentage}/>}
    </div>
</div>
  <div>
     <span className='mt-3'>Budget : {projectdata.pb}Rs</span>
  </div>
<div className='mt-5'>
<div className="row ">
    <div className="col ">
    < button onClick={deleteproject} className="btn btn-sm btn-danger">Delete</button>
</div>
<div className="col">
   <Link to={`/updateproject/${id}`}>< button className="btn btn-sm btn-warning">Update</button></Link>
</div>
    <div className="col">
   <Link to="/project" >< button className="btn btn-sm btn-primary">Back</button></Link>

       </div>
    </div>


</div>
</div>

    </div>
    {/* <button type="button" onClick={deleteproject} className="btn btn-warning">delete</button> */}

    
    <ToastContainer />


    </>
  )
}

export default Viewproject