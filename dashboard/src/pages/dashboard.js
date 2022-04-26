import React,{useState,useEffect} from 'react'
import axios from 'axios'
import ProgressBar from "@ramonak/react-progress-bar";
import { Link } from 'react-router-dom';
const Dashboard = () => {
  const[fetchpro,setFetchpro]=useState([])

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
//console.log((fetchpro.sd, fetchpro.ed))
  return(
    <>
      <div className='dashboard'>
        <div className='dash'> 
          <p>Active Project</p>
        </div>
           
      <div className='currentproject d-grid'>
      <div className='container text-center'>
       <div>
       
       {fetchpro.map((see)=>
       {
           return(<>
          <div className='showproject mt-3'>
             <div>
                <h6>Project Name</h6>
                <span className='text-success'>{see.pname}</span>
             </div>
             <div className='dayleft mt-2'>
               <p>Day's Left</p>
               <span>{see.sd}-{see.ed}</span>
               <br/>
              <span className='mt-5'>Progress%....</span>
              {<ProgressBar width='50%' margin='auto' completed={see.percentage}/>}   
             </div>
              <Link to={`/viewproject/${see._id}`}><button className='btn btn-sm btn-danger mt-3'>View</button></Link>
          </div>

          <div>
          
          </div>

           </>)
       })}
       </div>
      </div>
      </div>
      <div className='mt-5'>
 <div className='dash'> 
          <p>Work health</p>
        </div>
        <div className='barprogress mt-4'>
        <ProgressBar 
    completed={90}
    bgColor="#7be26a"
    height="2rem"
    borderRadius="0.5rem"
    baseBgColor="#f2f2ec"
    labelColor="#141313"
    width='60%'
    margin='auto'
    maxCompleted={100}
    />
        </div>
 </div>
 <hr/>
 <div className='moneyearned text-center mt-3'>
  <h5>Total Money Earned</h5>
  {"1200000"}
 </div>
 <div className='totalexpenses text-center mt-3'>
  <h5>Total Expenses</h5>
  {"4000000"}
 </div>
 </div>
 
    </>
  )
}

export default Dashboard