import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Supportpopup from './supportpopup'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Support = () => {
  const [supportpop,setSupportpopup]=useState(false)
  const [supportdetail, setSupportdetail]=useState([])
  let navigate = useNavigate();

  useEffect(()=>
  {
    const fetch = async()=>
    {
        try
        {
          const response =await axios.get('/supportdata')
          setSupportdetail(response.data);
          //console.log(response.data);
        }
        catch(err)
        {
          console.log(err);
        } 
    }
    fetch()
  },[])

  const deletesupport=async(id)=>
  {
   // alert(id)
    if(window.confirm("Are you sure to want to delete this Support")){
      try
      {
         const response=await axios.delete(`/supportdel/${id}`);
       //console.log(response);
         //setSupportdetail(response.data);
         toast('Deleted succesfully');
         navigate('/support');
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
  

    
    <div className='support-top'>
      <p>Support</p>
    </div>
    <div className='ss mt-2'>
    <button type="button" className="btn btn-warning" onClick={()=>setSupportpopup(!supportpop)}>Create Token</button>
    </div>
    <div className='sf w-90 mt-2'>
    {supportpop && <button type="button" className="close btn btn-dark" onClick={()=>setSupportpopup(false)} >Close</button>}  

      {supportpop && <Supportpopup/>}
    </div>

    <div className='sup supporttable table-responsive '>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Support _id</th>
     

      <th scope="col">Token</th> 
      
      <th scope="col">Date</th>
      
      <th scope="col">Status</th>
      
      <th scope="col">Operations</th>
      

      
    </tr>
  </thead>
  <tbody>
      {supportdetail.map((see ,key)=>
      {
        const{_id,supp,datee}=see
        return(<>
        <tr key={_id}>
      <th scope="row">{_id}</th>
      

      <td>{supp}</td>
    

      <td>{datee}</td>
     

      <td>pending</td>
      
      <td><button onClick={()=>deletesupport(_id)} className='btn btn-sm btn-danger'>Delete</button></td>
      

    </tr>
        </>)
      })}
  </tbody>
</table>
    </div>  <ToastContainer />
    </>
  )
}

export default Support