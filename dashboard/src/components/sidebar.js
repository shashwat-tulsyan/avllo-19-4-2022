import React, { useState } from 'react'
import {motion} from 'framer-motion'
import {FaHome}from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'
const section=[
       { 
        path:'/',
        name:"Dashboard",
        icon:<FaHome/>,
        },
        { path:'/client',
        name:"Find a Person",
        icon:<FaHome/>,
            
            },{ 
              path:'/project',
        name:"Projects",
        icon:<FaHome/>,
              
                
                },{ 
                    path:'/profile',
                    name:"Profile",
                    icon:<FaHome/>,
                    },{ path:'/employ',
                    name:"Employees",
                    icon:<FaHome/>,
                      
                        },{ 

                          path:'/support',
                        name:"Support",
                        icon:<FaHome/>,
                           
                            },

]
const Sidebar = ({children}) =>{
    const[open ,setOpen]=useState(false);
    const toggle=()=>
    {
         setOpen(!open);
    }
  return (
      <>
        <section className='main-content'>
          <div className='row'>

          
               <div className='col-lg-2 col-sm-12'>
                   <motion.div animate={{width: !open? "230px":"45px"}} className="sidebar">
                       <div className='top-section'>
                           <div>
                           { !open && <h3 className='logo'>~AVLLO~</h3>}
                               </div>
                               <div className='icons'>
                               <span onClick={toggle}></span>
                               </div>
                               {/* <i className="fa-solid fa-bars"></i> */}

                       </div>
                      <div className='routes'>
                        {section.map((nam)=>
                        {
                           return(
                           <>
                           
                           <NavLink to={nam.path} key={section.name} className="iconslinks">
                             <div className='icons'>{nam.icon}
                                </div>
                           {!open && <div className='link'><h6> {nam.name}</h6>
                                </div>}
                           </NavLink>
                           </>)
                        })}
                      </div>
                      <div className='logout d-flex'>
                            <div>
                                 <FaHome/>
                             </div>
                             {!open && <div>
                                   <Link to="" >LogOut</Link>
                             </div>}
                             </div>
                   </motion.div>
               </div>
               <div className='child col-lg-10 col-sm-12'>
               {children}
               </div>
               </div>
        </section>
      
      </>
  )
}

export default Sidebar