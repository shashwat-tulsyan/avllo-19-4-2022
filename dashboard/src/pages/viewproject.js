import React, { useState,useEffect } from 'react'
import axios from 'axios'
import {useParams} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Viewproject = () => {
  let navigate = useNavigate();

    const[projectdata, setProjectdata]=useState([])
    //const[deleteproo,setDeleteproo]=useState([])
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
         
          

  return (
    <>
    {/* {projectdata._id} */}
    <div className='projectcard'>
        <div className=''>
            <div className='projectname text-center'>
            <h4>{projectdata.pname}</h4>
        </div>
        </div>

    </div>
    <button type="button" onClick={deleteproject} className="btn btn-warning">delete</button>

    
    <ToastContainer />


    </>
  )
}

export default Viewproject