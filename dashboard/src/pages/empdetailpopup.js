import React,{useEffect,useState} from 'react'
import {useParams} from "react-router-dom";
import axios from 'axios';


const Empdetailpopup = () => {

  const[fetchdetails,setFetchdetails]=useState([])
  const{id}=useParams();

   
useEffect(()=>{
  const getemploy =async()=>
  { 
  try
     {
        const response=await axios.get(`/fetempid/${id}`);
       // console.log(response);
        setFetchdetails(response.data);
     }
     catch(err)
     {
       console.log(err);
     }
  }
  getemploy()
  },[0])

  

return(
    <>
    
     <div>
     <div className="empdetail">
	<div className="outer">
		<div className="content animated fadeInLeft">

			<h5>{fetchdetails.fname}<br/> {fetchdetails.lname}</h5>
			<p>{fetchdetails.email}</p>
      <p>{fetchdetails.phone}</p>

			
			<div className="button">
				<a href="#"></a><a className="cart-btn" href="#"><i className="cart-icon ion-bag"></i>Delete</a>
			</div>
			
		</div>
	 <img src={`./uploads/${fetchdetails.employimage}`} width="300px" height="400" className=''/> 
	</div>
	<p className="footer">{fetchdetails.comment}</p>
</div>
     </div>

    </>
  )
}

export default Empdetailpopup