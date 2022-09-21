import React from 'react'
import { useState } from 'react'
import "./NavBar.css"
import { logout } from "../js/userSlice/userSlice";
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
const NavBar = () => {
    const [color, setColor] = useState(false)
  const changeColor=()=>{
    if(window.scrollY>=90){
      setColor(true)
    }else{
      setColor(false)
    }
  }
  window.addEventListener('scroll',changeColor)
  const dispatch =useDispatch();
const navigate=useNavigate();
  const user=useSelector((state)=>state.user.user)
  console.log(user)
  return (
    <div>
      <div className={color? 'navv nav2':'navv'}>



      
    <div className='log'>
        <img src="https://kidsheaven.wpengine.com/wp-content/themes/kids-world/images/logo.png"/>
    </div>
    <div className='liste' >
        
        <h5><Link to ="/" style={{textDecoration:"none",color:"#f8a32a"}}>Home</Link></h5>
        
        <h5><Link to ="/about" style={{textDecoration:"none",color:"#10b6fe"}}>About </Link></h5>
    
       
        <h5><Link to ="/service" style={{textDecoration:"none",color:"#ff5722"}}>Service</Link></h5>
        <h5><Link to ="/contact" style={{textDecoration:"none",color:"#15d401"}}>Contact</Link></h5>
        <h5> {user?.category=="admin"? <Link to ="/dashboard" style={{textDecoration:"none",color:"#00d084"}}>Dashboard</Link> :null}</h5>
       <h5> {user?  <Link  to="/profile" style={{textDecoration:"none",color:"#88d914"}}>Profile</Link>:null}</h5>
        </div>
        <div>
        <h5><Link to ="/login" style={{textDecoration:"none",color:"#bd0404"}}>Sign in</Link></h5>
        </div>
        <h5 onClick={()=>{dispatch(logout());navigate("/");}}>{user? <Link  to="/" style={{textDecoration:"none",color:"#bd0404"}}>Logout</Link>:null}</h5>
        </div>
        
    <div className='ico'>
   
    </div>
    </div>
 
 
   )
}

export default NavBar


  
  





