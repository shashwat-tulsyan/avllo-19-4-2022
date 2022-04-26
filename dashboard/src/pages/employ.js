import React, { useState,useEffect } from 'react'
import Employpop from './employpop'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Empdetailpopup from './empdetailpopup';
//import Empdetailpopup from './empdetailpopup';

const Employ = () => {
  const[employpop ,setEmploypop]=useState(false)
  const[fetchemp,setFetchemp]=useState([])
  const[empdetail,setEmpdetail]=useState(false)

  useEffect(()=>{
    const getemp =async()=>
    {
       try
       {
          const response= await axios.get('/fetemp');
          console.log(response);
          setFetchemp(response.data);
       }
       catch(err)
       {
         console.log(err);
       }
    }
    getemp()
    },[])

  return (
    <>
    <div className='client mt-3'>
    <button type="submit" class="btn btn-primary" onClick={()=>setEmploypop(!employpop)} >Add Members</button>
    <div className='mt-2'>
    {employpop && <button type="button" className="close btn btn-light" onClick={()=>setEmploypop(false)} >X</button>}  
    {employpop && <Employpop/>}
    </div>
    </div>
      <div className="employadd mt-5">
      {/* {empdetail && <Empdetailpopup />} */}
<div className='supporttable table-responsive w-auto'>


   <table className="table">
   
  <thead className=''>
    <tr>
    <th scope="col">Employ Pic</th>
    <th scope="col">First Name</th>
    <th scope="col">Last Name</th> 
    <th scope="col">Phone Number</th>
    <th scope="col">Email Adress</th>
    <th scope="col">Employ Address</th>
    <th scope="col">Salary</th>
    <th scope="col">Details</th>


    </tr>
  </thead>
  <tbody>
  
      {fetchemp.map((see)=>
      {
        const{_id, fname,lname,email,address,phone,comment,employimage}=see
        return(
          <>
            <tr>

  <td scope="row" key={fetchemp._id}><img src={`./uploads/${employimage}`} height='100' width='100' alt='image' /></td>
  <td>{fname}</td>
  <td>{lname}</td>
  <td>{phone}</td>
  <td>{email}</td>
  <td>{address}</td>
  <td>{comment}</td>
  <td>
  {/* <button className='btn btn-danger' onClick={()=>setEmpdetail(!empdetail)} >View</button> */}
  <Link to={`/empdetailpopup/${_id}`}><button className='btn btn-sm btn-warning'>View</button></Link>
  </td>
  </tr>
  
  </>
  )
  })}
  </tbody>
</table>
</div>

   </div>

      </>
  )
}

export default Employ