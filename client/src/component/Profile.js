
import React from 'react'


import  { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deletereserv } from '../js/reservation'
import { updateuser } from '../js/userSlice/userSlice'
import "./profile.css"
function Profile({ping,setping}) {
  const reservation=useSelector((state)=>state?.reservation?.reservations )

  const user=useSelector((state)=>state?.user?.user)


  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
const [edited, setedited] = useState({});
const dispatch=useDispatch();
const navigate=useNavigate();
  return (
    <div className="bodyprof">
    <div className="containerProfile">
      <div className="blocc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          <div className="tabsfont"> Edit Profile</div>
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          <div className="tabsfont">Posting center</div>
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          <div className="tabsfont">Reservations</div>
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <div className="cont">
          <img className='avatar' src="https://cdn-icons-png.flaticon.com/512/8487/8487881.png" alt="avatar" />
          <h1 className='title'>{user?.name}  {user?.lastName}</h1>
          </div>
          <div className="updateprof" style={{marginLeft:"30%"}}>
            <h5 className='h5profile'>Change Name</h5>
            <input className='prfinput' type="text" placeholder={user?.name} onChange={(e)=>{setedited({...edited,name:e.target.value})}} />
            <h5 className='h5profile'>Change LastName</h5>
            <input  className='prfinput'  type="text" placeholder={user?.lastName} onChange={(e)=>{setedited({...edited,lastName:e.target.value})}}/>
            
            <h5 className='h5profile'>Change Email</h5>
            <input  className='prfinput'  type="text" placeholder={user?.email} onChange={(e)=>{setedited({...edited,email:e.target.value})}} />
            <h5 className='h5profile'>Change Password</h5>
            <input  className='prfinput'  type="password" placeholder='New password' onChange={(e)=>{setedited({...edited,password:e.target.value})}}/>
            <button  onClick={()=>{dispatch (updateuser({id:user?._id,edited}));setping(!ping);navigate("/profile")}} style={{marginLeft:"-2%",marginTop:"10%"}} className='btn' >Update</button>
          </div>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <div className="cont">
          <img className='avatar' src="https://cdn-icons-png.flaticon.com/512/2945/2945506.png" alt="avatar" />
          <h1 className='title'>{user?.name}  {user?.lastName}</h1>
          </div>
          <div className="updateprof"style={{marginLeft:"30%"}}>
            <h5 className='h5profile'>name student</h5>
            <input className='prfinput' type="text" placeholder="name" />
            <h5 className='h5profile'>lastname student</h5>
            <input className='prfinput' type="text" placeholder="last name" />
            <h5 className='h5profile'>level</h5>
            <div className="select" style={{marginLeft:"10%"}} >
                  <select name="type" id="type">
                  <option value="">level</option>
                      <option value="Cat">Nursery</option>
                      <option value="Dog">Kindergarten Junior</option>
                      <option value="rabbit">Kindergarten Senior</option>
                      
                  </select>
                  </div>
            
             
            <button className='btn' style={{marginLeft:"-2%",marginTop:"10%"}}>Update</button>

        </div>
        </div>
        <div
          className={toggleState === 3 ? "content  active-content" : "content"}>
      
          <div className="cont">
          <img className='avatar' src="https://cdn-icons-png.flaticon.com/512/8487/8487881.png" alt="avatar" />
          <h1 className='title'>{user?.name}  {user?.lastName}</h1>
          </div>
          <table className='tableau' width="100% ">
            <tr >
              <th>Name User</th>
              <th>name Club</th>
              <th>image</th>
              <th>category</th>
              <th>time</th>
              <th>prix</th>
             
      
              </tr>
          {reservation?.filter((el)=>el.user_name==user?.name).map((el)=><tr className='trr'><td>{el.user_name}</td><td>{el.name}</td><td><img style={{width:"50px", height:"50px"}} src={el.image}></img></td>
          <td>{el.category}</td><td>{el.time}</td><td>{el.prix}</td><td><button onClick={()=>{
            
            setTimeout(() => {
              dispatch(deletereserv(el._id));
           setping(!ping);
            }, 3000);
           
              
            
          }}>x</button></td>
         
          </tr>)}
          </table>

        </div>
      
    </div>
    </div>
    </div>     
    
  );
}
export default Profile
