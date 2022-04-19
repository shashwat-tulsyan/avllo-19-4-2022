import React, { useEffect, useState } from 'react'
import Popupproject from './popupproject'
import axios from 'axios';
import { Link } from 'react-router-dom';

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
        
    <button type="button" className="btn btn-primary" onClick={popup}>Click To Add Project</button> 
    <div className='mt-2'>
    {openpopup && <button type="button" className="close btn btn-light" onClick={()=>setOpenpopup(false)} >X</button>}  
    {openpopup && <Popupproject/>}  

   </div> 
    <div className='scrolleffect'>
   <div className="projectadded ">
      <table className="table1 table ">
  <thead className=''>
    <tr>
    <th scope="col">Project _id</th>
    <th scope="col">Project Name</th> 
    <th scope="col">Due Date</th>
    <th scope="col">Progress</th>
    <th scope="col">Details</th>
    </tr>
  </thead>
  <tbody>
  
      {fetchpro.map((see)=>
      {
        const{_id,pname}=see
        return(
          <>
            <tr>
          <td scope="row" key={fetchpro._id}>{_id}</td>
      

      <td>{pname}</td>
    

      <td>due udu uddu</td>

      <td>delete</td>
      <td> <Link to={`/viewproject/${_id}`}><button className='btn btn-danger'>View</button></Link></td>

      </tr>
          </>
        )
      })}
    
  </tbody>
</table>

   </div>
   </div>
  


   </div>
   </>
  )
}

export default Project