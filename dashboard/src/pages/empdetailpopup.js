import React,{useEffect,useState} from 'react'
import {Link, useParams} from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Empdetailpopup = () => {

  const[fetchdetails,setFetchdetails]=useState([])
  const{id}=useParams();
  let navigate = useNavigate();

   
useEffect(()=>{
  const getemploy =async()=>
  { 
  try
     {
        const response=await axios.get(`/fetempid/${id}`);
       // console.log(response);
        setFetchdetails(response.data);
     }
     catch(err)
     {
       console.log(err);
     }
  }
  getemploy()
  },[0])

   
 const deleteemploy=async()=>
 {
   
   // alert(id)
   if(window.confirm("Are you sure to want to delete this Profile")){
    try
    {
       const response=await axios.delete(`/deleteemp/${id}`);
     //console.log(response);
       //setSupportdetail(response.data);
       toast('Deleted succesfully');
       navigate('/employ');
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
  

return(
    <>
    <div className='projectcard'>
<div className=" text-center">
  <div className="col-12">
    <div className='empimage'>
     <img  className=''
      src={`/uploads/${fetchdetails.employimage}`}
        height="180" width="180" alt='image'/>
    </div>
<h6>Employe Name</h6>
  <h5 className="card-title mt-2 text-info">{fetchdetails.fname} {fetchdetails.lname}</h5>
  </div>       
  <div className='col-12 mt-1'>
   <h6>Salary</h6>
   <span>{fetchdetails.comment} Rs</span>
  </div>
  <div className="container-fluid mt-1">
  <div className="row ">
    <div className="col-6 ">
      <h6>Phone Number</h6>
      <span className='text-warning'>{fetchdetails.phone}</span>
    </div>
    <div className="col-6">
      <h6>Email Address</h6>
      <span className='text-danger'>{fetchdetails.email}</span>
       </div>
    </div>
    <h6>Address</h6>
    <span>{fetchdetails.address}</span>
</div>
  
<div className='mt-3'>
<div className="row ">
    <div className="col ">
    < button onClick={()=>deleteemploy()}  className="btn btn-sm btn-danger">Delete</button>
</div>
<div className="col">
   < button  className="btn btn-sm btn-warning">Update</button>
</div>
    <div className="col">
   <Link to="/employ">< button className="btn btn-sm btn-primary">Back</button></Link>

       </div>
    </div>


</div>
</div>

    </div>
    
    <ToastContainer />
    </>
  )
}

export default Empdetailpopup