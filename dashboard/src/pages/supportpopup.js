import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Supportpopup = () => {
const[supportdata , setSupportdata]=useState({
  supp:"", datee:""
})
var name,value
const handlesupport=(e)=>
{   
    name=e.target.name
    value=e.target.value
    setSupportdata({...supportdata,[name]:value})
}

const submitSupport=async(e)=>
{
   e.preventDefault()
   
   
    const{supp,datee}=supportdata;
    const supportRespond = await fetch('/support',
     {
       method:"POST",
       headers:
       {
        "Content-Type":"application/json"
       },
       body:JSON.stringify({supp,datee}) 
  
     })
     const SupportData=await supportRespond.json();
     if( supportRespond.status===422 || ! SupportData)
     {
        //document.getElementById('projectresult').innerHTML="Please Fill Date";
        toast('Please fill all the data');    
     }
     else
     {
       //document.getElementById('projectresult').innerHTML="Your data is Successfully submitted Please close the tab";
       //navigate('/');
       toast("Data submitted succesfully");
  
     }
   
   
   

}
  return (
   <>
   <div className='supportform mt-1'>
        <div>
        <form className="row g-3">
  <div className="col-md-6">
    <label forhtml="inputEmail4" className="form-label">Enter your Query</label>
    <input required type="text" name='supp' value={supportdata.supp} onChange={handlesupport} className="form-control" id="inputEmail4"/>
  </div>
   <div className="col-md-6">
    <label forhtml="inputPassword4" className="form-label">Date</label>
    <input required type="Date"  name='datee' value={supportdata.datee}  onChange={handlesupport} className="form-control" id="inputPassword4"/>
  </div> 
 
    
  <div className="col-12">
    <button type="submit" onClick={submitSupport} className="btn btn-success">Generate Token</button>
  </div>
</form>
        </div>

    </div>    <ToastContainer />

   </>
  )
}

export default Supportpopup