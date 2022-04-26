import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


const Popupproject = () => {
  const[proname,setProname]=useState({
        pname:'',pb:'',sd:'', ed:'',  nom:'', percentage:'',
  })
  var name,value;
  
  const handleproject=(e)=>
   {
     name=e.target.name;
     value=e.target.value;
     setProname({...proname,[name]:value})
    
  }
  let navigate = useNavigate();

  // ****************************************************

  const addProject =async(e)=>
  { 
     e.preventDefault();
     const{pname,pb,sd,ed,nom, percentage}=proname;
    const projectRespond = await fetch('/insertproject',
   {
     method:"POST",
     headers:
     {
      "Content-Type":"application/json"
     },
     body:JSON.stringify({pname,pb,sd,ed,nom, percentage}) 

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
     navigate('/project');
     

   }
   
  }
  

  return (
    <>
    <div className='poppromain'>

  
    <div className='popproject'>
        <form className="row " action='/project' method='POST'>
          <span id='projectresult'> </span>
  <div className="col-md-6">
    <label forHTML="" className="form-label">Project Name</label>
    <input type="text" name='pname'  value={proname.pname} 
    onChange={handleproject} className="form-control" id=""/>
  </div>
  <div className="col-md-6">
    <label forHTML="" className="form-label">Project Budget</label>
    <input type="text" name='pb'  value={proname.pb}
    onChange={handleproject} className="form-control" id=""/>
  </div>
  <div className="col-md-6">
    <label forHTML="" className="form-label">Star Date</label>
    <input type="date" name='sd' placeholder='dd/mm' value={proname.sd}
    onChange={handleproject} className="form-control" id=""/>
  </div>
  <div className="col-md-6">
    <label forHTML="" className="form-label">End Date</label>
    <input type="date" name='ed' placeholder='dd/mm' value={proname.ed}
    onChange={handleproject} className="form-control" id=""/>
  </div>
  <div className="col-md-12">
    <label forHTML="" className="form-label">Number Of Members</label>
    <input type="text" name='nom'  value={proname.nom}
    onChange={handleproject} className="form-control" id=""/>
  </div>
  <div className="col-md-12 mt-4">
  <select className="form-select form-select" name='percentage' value={proname.percentage} onChange={handleproject} aria-label=".form-select-sm example">
  <option selected>Set Project Completion Percentage</option>
  <option value="10">10%</option>
  <option value="20">20%</option>
  <option value="30">30%</option>
  <option value="40">40%</option>
  <option value="50">50%</option>
  <option value="60">60%</option>
  <option value="70">70%</option>
  <option value="80">80%</option>
  <option value="90">90%</option>
  <option value="100">100%</option>
</select>
  </div>
   
  <div className="col-12">
    <button type="submit"  onClick={(e)=>addProject(e)} className="mt-5 mb-4 btn btn-danger" Require>AddProject</button>
  </div>
</form>
    

    </div>  </div>
    <ToastContainer />

    </>
  )
}

export default Popupproject