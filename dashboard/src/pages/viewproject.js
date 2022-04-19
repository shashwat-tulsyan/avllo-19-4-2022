import React, { useState,useEffect } from 'react'
import axios from 'axios'
import {useParams} from "react-router-dom";


const Viewproject = () => {
    const[projectdata, setProjectdata]=useState([])
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
    

  return (
    <>
    {/* {projectdata._id} */}
    <div className='projectcard'>
        <div className=''>
            <div className='projectname'>
            <h4>{projectdata.pname}</h4>
            </div>

        </div>

    </div>
    


    </>
  )
}

export default Viewproject