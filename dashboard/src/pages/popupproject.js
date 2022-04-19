import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Popupproject = () => {
  const[proname,setProname]=useState({
        pname:''
  })
  var name,value;
  
  const handleproject=(e)=>
   {
     name=e.target.name;
     value=e.target.value;
     setProname({...proname,[name]:value})
    
  }
 
  // ****************************************************

  const addProject =async(e)=>
  { 
     e.preventDefault();
     const{pname}=proname;
    const projectRespond = await fetch('/insertproject',
   {
     method:"POST",
     headers:
     {
      "Content-Type":"application/json"
     },
     body:JSON.stringify({pname}) 

   })
   const ProjectData=await projectRespond.json();
   if( projectRespond.status===422 || ! ProjectData)
   {
      //document.getElementById('projectresult').innerHTML="Please Fill Date";
      toast('Please fill data');    
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
    <div className='popproject'>
        <div className='popprojectmargin '>
        <form className="row g-3" action='/project' method='POST'>
          <span id='projectresult'> </span>
  <div className="col-md-6">
    <label forHTML="inputEmail4" className="form-label">Project Name</label>
    <input type="text" name='pname'  value={proname.pname} 
    onChange={handleproject} className="form-control" id="inputEmail4"/>
  </div>
   
  <div className="col-12">
    <button type="submit"  onClick={(e)=>addProject(e)} className="mb-4 btn btn-danger" Require>AddProject</button>
  </div>
</form>
        </div>

    </div>
    <ToastContainer />

    </>
  )
}

export default Popupproject