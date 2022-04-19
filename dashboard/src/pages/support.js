import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Supportpopup from './supportpopup'


const Support = () => {
  const [supportpop,setSupportpopup]=useState(false)
  const [supportdetail, setSupportdetail]=useState([])
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
  return (
    <>
    
    <div className='support mt-2'>
    <button type="button" className="btn btn-warning" onClick={()=>setSupportpopup(!supportpop)}>Create Token</button>
    </div>
    <div className='mt-2'>
    {supportpop && <button type="button" className="close btn btn-light" onClick={()=>setSupportpopup(false)} >X</button>}  

      {supportpop && <Supportpopup/>}
    </div>

    <div className='supporttable mt-3'>
    <table className="table1 table w-a">
  <thead>
    <tr>
      <th scope="col">Support _id</th>
      <th scope="col"></th>
      <th scope="col"></th>

      <th scope="col">Token</th> 
      <th scope="col"></th>
      <th scope="col">Date</th>
      <th scope="col"></th>
      <th scope="col">Status</th>
      <th scope="col"></th>
      <th scope="col">Operations</th>
      <th scope="col"></th>

      
    </tr>
  </thead>
  <tbody>
      {supportdetail.map((see ,key)=>
      {
        const{_id,supp,datee}=see
        return(<>
        <tr key={_id}>
      <th scope="row">{_id}</th>
      <td></td>
      <td></td>

      <td>{supp}</td>
      <td></td>

      <td>{datee}</td>
      <td></td>

      <td>pending</td>
      <td></td>
      <td>......</td>
      <td></td>

    </tr>
        </>)
      })}
  </tbody>
</table>
    </div>
    </>
  )
}

export default Support