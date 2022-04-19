




import React, { useState } from 'react'
import axios from 'axios'
//import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Employpop = () => {
  const[fname,setFname]=useState('')
  const[lname,setLname]=useState('')
  const[email,setEmail]=useState('')
  const[phone,setPhone]=useState('')
  const[address,setAddress]=useState('')
  const[comment,setComment]=useState('')
  const[filename,setFilename]=useState('')
  const[send,setSend]=useState('')

  const handleimage=(event)=>
    {
      setFilename(event.target.files[0])
    }

   
    //const navigate = useNavigate();

    const addEmploy =(e)=>
    {
      //toast('hello world');
      e.preventDefault();
      if(fname.length==="" &&
      lname.length===""
      && email.length==="" && 
      address.length==="" &&
       comment.length==="" &&
        phone.length==="")
      {
        toast('All fields are mandatory');
      }
      else
      {
          
        const formData=new FormData();
      formData.append('fname',fname)
      formData.append('lname',lname)
      formData.append('email',email)
      formData.append('address',address)
      formData.append('phone',phone)
      formData.append('employimage',filename)
      formData.append('comment',comment);
      setFname('');
      setLname('');
      setAddress('');
      setComment('');
      setEmail('');
      setPhone('');

     axios.post('/employ',formData).then((res)=>
     {
      toast("succesfully submitted");
     }
     ).catch(err=>
      {
        toast('server error')
      })
      }

      
      
    };


  return (
    <>
    <div className='employpop mt-3'> 

<form  className="row g-3"  action='/employ' encType='multipart/form-data'>
<div className="col-md-6">
  <span>{send}</span>
<label forHTML="inputEmail4" className="form-label">First Name</label>
<input  name="fname" value={fname}
 onChange={(e)=>setFname(e.target.value)} 
  type="text" className="form-control" id="inputEmail4"
  required />
</div>
<div className="col-md-6">
<label forHTML="inputPassword4" className="form-label">Last Name</label>
<input name="lname" value={lname}
 onChange={(e)=>setLname(e.target.value)}
   type="text" className="form-control"
    id="inputPassword4" required/>
</div>
<div className="col-md-6">
<label forHTML="inputEmail4" className="form-label">Email</label>
<input  
name="email" value={email} onChange={(e)=>setEmail(e.target.value)}  type="email" className="form-control" id="inputEmail4"/>
</div>
<div className="col-md-6">
<label forHTML="inputPassword4" className="form-label">Address</label>
<input   name="address" value={address} onChange={(e)=>setAddress(e.target.value)}  type="text" className="form-control" id="inputPassword4"/>
</div>
<div className="col-md-6">
<label forHTML="inputEmail4" className="form-label">Phone Number</label>
<input   name="phone" value={phone} onChange={(e)=>setPhone(e.target.value)}  type="Number" className="form-control" id="inputEmail4"/>
</div>
<div className="col-md-6">
<label forHTML="file" className="form-label">Upload Image</label>
<input   type="file" filename="employimage" onChange={handleimage}   className="form-control" id=""/>
</div>
<div className="col-md-12">
<label forHTML="inputPassword4" className="form-label">Salary</label>
<input   name="comment" value={comment} onChange={(e)=>setComment(e.target.value)}  type="text" className="form-control" id="inputPassword4"/>
</div>

<div className="col-12">
<button type="submit" onClick={addEmploy} className="btn btn-danger">Add</button>
</div>
</form >

</div>
<ToastContainer />

    </>
  )
}

export default Employpop