import React, { useEffect, useState } from 'react'
import Popupproject from './popupproject'
import axios from 'axios';
import { Link } from 'react-router-dom';
import ProgressBar from "@ramonak/react-progress-bar";

const Project = () => {
const [openpopup,setOpenpopup]=useState(false);
const[fetchpro,setFetchpro]=useState([])


// fetching data..........

useEffect(()=>{
const getpro =async()=>
{
   try
   {
      const response= await axios.get('/fetpro');
     // console.log(response);
      setFetchpro(response.data);
   }
   catch(err)
   {
     console.log(err);
   }
}
getpro()
},[])

const popup=()=>
{
  setOpenpopup(!openpopup);
}

// deleting data..............


  return (
   <>
   <div className='projectsection mt-3'>
     <div className='pp'>
     <button type="button" className="btn btn-primary" onClick={popup}>Click To Add Project</button> 

     </div>
        
    <div className='mt-2'>
    {openpopup && <button type="button" className="close btn btn-light" onClick={()=>setOpenpopup(false)} >X</button>}  
    {openpopup && <Popupproject/>}  

   </div> 
   <div className='supporttable table-responsive w-auto'>
   <table className="table">
  <thead className='p-5'>
    <tr>
    <th scope="col">Project _id</th>
    <th scope="col">Project Name</th> 
    <th scope="col">Project Budget</th>
    <th scope="col">Start Date</th>
    <th scope="col">End Date</th>
    <th scope="col">Total Members</th>
    <th scope="col">Progress %</th>
    <th scope="col">View Project</th>


    </tr>
  </thead>
  <tbody>
  
      {fetchpro.map((see)=>
      {
        const{_id,pname,pb,sd,ed,nom, percentage}=see
        return(
          <>
            <tr>
    <td scope="row" key={fetchpro._id}>{_id}</td>
    <td >{pname}</td>
    <td>{pb}</td>
    <td className='text-info'>{sd}</td>
    <td className='text-danger'>{ed}</td>
    <td>{nom}</td>
    <td><ProgressBar completed={percentage}/></td>
 <td> <Link to={`/viewproject/${_id}`}><button className='btn btn-sm btn-danger'>View</button></Link></td>

      </tr>
          </>
        )
      })}
    
  </tbody>
</table></div>
   </div>
   </>
  )
}

export default Project