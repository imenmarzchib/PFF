
import './App.css';
import Login from './component/Login';
import {  Route, Routes,useNavigate, Link  } from "react-router-dom";
import {  getusers, logout, userCurrent } from "./js/userSlice/userSlice";
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import NavBar from  './component/NavBar'
import Home from './component/Home';
import Footer from './component/Footer';
import About from './component/About';
import Contact from './component/Contact';
import Service from './component/Service';
import { getService } from './js/ServiceSlice';
import Activity from './component/services/Activity';
import Games from './component/services/Games';
import Clubs from './component/services/Clubs';
import Lessons from './component/services/Lessons';
import Profile from './component/Profile';
import Dashboard from './component/Dashboard';
import { getreserv } from './js/reservation';




function App() {


  const isAuth = localStorage.getItem("token");
const [ping, setping] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    
    
    dispatch( userCurrent());
    dispatch( getService());  
    dispatch( getreserv()); 
    dispatch( getusers()); 

  }, [ping]);
  return (
    
    <div className="App">
      <NavBar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path="/login" element={<Login ping={ping} setping ={setping}   />} />
      <Route path="/profile" element={<Profile ping={ping} setping ={setping} />} />
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/activity' element={<Activity ping={ping} setping ={setping}/>}/>
      <Route path='/games' element={<Games ping={ping} setping ={setping}/>}/>
      <Route path='/club' element={<Clubs ping={ping} setping ={setping}/>}/>
      <Route path='/lessons' element={<Lessons ping={ping} setping ={setping}/>}/>
      <Route path='/dashboard' element={<Dashboard ping={ping} setping ={setping}/>}/>
      </Routes>
       <Footer/> 

      {/* {isAuth?<button onClick={()=>{dispatch(logout());
      navigate("/");
      }}>Logout</button>:null} */}
      
      
        
       
        
       
     
      
    </div>
  );
}

export default App;
