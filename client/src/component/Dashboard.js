
import React from 'react'


import  { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deletereserv } from '../js/reservation'
import { addService, deleteService } from '../js/ServiceSlice'
import { deleteuser, updateuser } from '../js/userSlice/userSlice'
import "./profile.css"

const Dashboard = ({ping,setping}) => {
  const [service, setservice] = useState({

  })
  const [search, setsearch] = useState("activity")
    const reservation=useSelector((state)=>state?.reservation?.reservations )

    const user=useSelector((state)=>state?.user?.user)
  const users=useSelector((state)=>state?.user?.users)
  const services= useSelector((state)=>state?.service?.services);

  const [show, setshow] = useState(false);
  
    const [toggleState, setToggleState] = useState(1);
  
    const toggleTab = (index) => {
      setToggleState(index);
    };
  const [edited, setedited] = useState({});
  const dispatch=useDispatch();
  const navigate=useNavigate();
  return (
    <div>
    <div className="bodyprof">
    <div className="containerProfile">
      <div className="blocc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          <div className="tabsfont"> Admin</div>
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          <div className="tabsfont">Services</div>
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
          <table className='tableau' width="120% "style={{ textAlign: "center",marginLeft:"-200px"}}>
            <tr>
              <th>Name User</th>
              <th>Last name</th>
              <th>email</th>
           
             
       <th></th>
              </tr>
          {users?.map((el)=><tr><td>{el.name}</td><td>{el.lastName}</td>
         <td>{el.email}</td><td><button onClick={()=>{
            
            setTimeout(() => {
              dispatch(deleteuser(el._id));
           setping(!ping);
            }, 1000);
           
              
            
          }}>x</button></td>
         
          </tr>)}
          </table>


          </div>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <div className="cont">
          <img className='avatar' src="https://cdn-icons-png.flaticon.com/512/2945/2945506.png" alt="avatar" />
          <h1 className='title'>{user?.name}  {user?.lastName}</h1>
          </div>
          <div className="updateprof">
            
            <button style={{width:"150px !important",height:"40px",color:"white"}} onClick={()=>setshow(!show)}>add services</button>
            <select style={{marginLeft:"390px",backgroundColor:"#887fbb",color:"white"}} name="pets" id="pet-select" onChange={(e) =>
                setsearch(e.target.value )
              }>
    <option value="activity">activity</option>
    <option value="club">club</option>
    <option value="games">games</option>
    <option value="lessons">lessons</option>
</select>
            <table width="120% " style={{textAlign: "center",marginLeft:"-200px",marginTop:"40px",}}>
            <tr style={{textAlign: "center",marginTop:"30px"}}>
              <th>Name</th>
              <th>Image</th>
              <th>category</th>
              <th>time</th>
              <th>prix</th>
             

              </tr>
          {services?.filter((el)=>el.category==search).map((el)=><tr style={{marginTop:"30px"}}><td>{el.name}</td><td><img style={{width:"50px", height:"50px"}} src={el.image}></img></td><td>{el.category}</td>
          <td>{el.time}</td><td>{el.prix}</td><td><button onClick={()=>{
            
            setTimeout(() => {
              dispatch(deleteService(el._id));
           setping(!ping);
            }, 1000);
           
              
            
          }}>x</button></td>
         
          </tr>)}
          </table>
  
  {show?    <div className='addservice'>
       <div className='modal'>
        <div className='div' onClick={()=>setshow(!show)}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="red" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
</svg></div>
<label>Name</label>
<input type="text" placeholder='name' className='input' onChange={(e) =>
                setservice({ ...service, name: e.target.value })
              }></input>
<label>Image</label>
<input type="text" placeholder='name' className='input' onChange={(e) =>
                setservice({ ...service, image: e.target.value })
              }></input>
<label>Category</label>
<select name="pets" id="pet-select" onChange={(e) =>
                setservice({ ...service, category: e.target.value })
              }>
    <option value="activity">activity</option>
    <option value="club">club</option>
    <option value="games">games</option>
    <option value="lessons">lessons</option>
</select>
<label>Time</label>
<input type="text" placeholder='name' className='input'onChange={(e) =>
                setservice({ ...service, time: e.target.value })
              }></input>
<label>Prix</label>
<input type="text" placeholder='name' className='input' onChange={(e) =>
                setservice({ ...service, prix: e.target.value })
              }></input>
<label>Description</label>
<input type="text" placeholder='name' className='input' onChange={(e) =>
                setservice({ ...service, description: e.target.value })
              }></input>
<button onClick={()=>
  {  dispatch(addService(service));
    setTimeout(() => {
    
      setshow(!show);
   setping(!ping);
    }, 1000);
   
  }
}>Post</button>
       </div>

      </div>:null}

        </div>
        </div>
        <div
          className={toggleState === 3 ? "content  active-content" : "content"}>
      
          <div className="cont">
          <img className='avatar' src="https://cdn-icons-png.flaticon.com/512/8487/8487881.png" alt="avatar" />
          <h1 className='title'>{user?.name}  {user?.lastName}</h1>
          </div>
          <table className='tableau' width="100% " style={{  textAlign: "center",marginTop:"30px"}}>
            <tr>
              <th>Name User</th>
              <th>name Club</th>
              <th>image</th>
              <th>category</th>
              <th>time</th>
              <th>prix</th>
             
       <th></th>
              </tr>
          {reservation?.map((el)=><tr><td>{el.user_name}</td><td>{el.name}</td><td><img style={{width:"50px", height:"50px"}} src={el.image}></img></td>
          <td>{el.category}</td><td>{el.time}</td><td>{el.prix}</td><td><button onClick={()=>{
            
            setTimeout(() => {
              dispatch(deletereserv(el._id));
           setping(!ping);
            }, 1000);
           
              
            
          }}>x</button></td>
         
          </tr>)}
          </table>

        </div>
      
    </div>
    </div>
    </div>     
    
    </div>
  )
}

export default Dashboard
