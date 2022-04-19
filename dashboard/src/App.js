
import React from 'react'
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Dashboard from './pages/dashboard';
import Client from './pages/client';
import Employ from './pages/employ';
import Profile from './pages/profile';
import Project from './pages/project';
import Support from './pages/support';
import Sidebar from './components/sidebar';
// import Empdetail from './pages/empdetail';
import Empdetailpopup from './pages/empdetailpopup';
import Viewproject from './pages/viewproject';
function App() {
  return (
  <>
    <Router>
    <Sidebar>
       <Routes>
         <Route exact path='/' element={<Dashboard/>}/> 
         <Route exact path='/client' element={<Client/>}/> 
         <Route exact path='/employ' element={<Employ/>}/> 
         <Route exact path='/profile' element={<Profile/>}/> 
         <Route exact path='/project' element={<Project/>}/> 
         <Route exact path='/support' element={<Support/>}/>
         <Route path='/empdetailpopup/:id' element={<Empdetailpopup/>}/>
         <Route path='/viewproject/:id' element={<Viewproject/>}/> 
 
    </Routes>
     </Sidebar>


    </Router>
    
  </>
  );
}

export default App;
