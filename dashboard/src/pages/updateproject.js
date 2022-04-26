import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
const Updateproject = () =>{
  const{id}=useParams();

  useEffect(()=>{
    const getproject =async()=>
    { 
    try
       {
          const response=await axios.get(`/projectupdate/${id}`);
           console.log(response.data);
         // setProjectdata(response.data);
       }
       catch(err)
       {
         console.log(err);
       }
    }
    getproject()
    },[0])

 
  // const[state ,setState]=useState({
  //   pname:'',pb:'',sd:'', ed:'',  nom:'', percentage:'',
  // });
  // const{id}=useParams();

  // const{pname,pb,sd, ed,  nom, percentage,}=state;

  // useEffect(()=>
  // {
  //   if(id)
  //   {
  //     updateData(id);
    
  //   }
  // })

  // const updateData=async(id)=>
  // {
  //   const response=await axios.get(`/projectupdate/${id}`);
  //   if(response)
  //   {
  //     console.log(response.data)
  //   }
  // }

  return (
    <>
     <div className='projectupdate mt-5 bg-light'>
        <div className='popprojectmargin '>
        <form className="row g-3" >
          <span id='projectresult'> </span>
  <div className="col-md-6">
    <label  className="form-label" >Project Name</label>
    <input type="text" name='pname' 
     className="form-control" />
  </div>
  <div className="col-md-6">
    <label  className="form-label">Project Budget</label>
    <input type="text" name='pb'  
    onChange="" className="form-control" id=""/>
  </div>
  <div className="col-md-6">
    <label  className="form-label">Star Date</label>
    <input type="date" name='sd' placeholder='dd/mm' 
    onChange="" className="form-control" id=""/>
  </div>
  <div className="col-md-6">
    <label  className="form-label">End Date</label>
    <input type="date" name='ed' placeholder='dd/mm' 
    onChange="" className="form-control" id=""/>
  </div>
  <div className="col-md-12">
    <label  className="form-label">Number Of Members</label>
    <input type="text" 
    onChange="" className="form-control" id=""/>
  </div>
  <div className="col-md-12">
  <select className="form-select form-select" name='percentage'  onChange="" aria-label=".form-select-sm example">
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
    <button type="submit" className="mb-4 btn btn-danger" Require>Set</button>
  </div>
</form>
        </div>

    </div>
    </>
  )
}

export default Updateproject