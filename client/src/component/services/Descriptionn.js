

import React, { useState } from 'react';

import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import { addreserv } from '../../js/reservation';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width:"1000px",
    justifyContent:"space-between",
    backgroundColor:"rgb(187 183 211)",
    
  },
};

function Descriptionn({el,ping,setping}) {
   const navigate=useNavigate();
  const user=useSelector((state)=>state?.user?.user);
const dispatch=useDispatch();
const [reservation, setreservation] = useState({user_name:user?.name,
  name:el?.name,
  image:el?.image,
  category:el?.category,
  time:el?.time,
  prix:el?.prix,
  description:el?.description,
})

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = "white";
      
    }
  
    function closeModal() {
      setIsOpen(false);
    }
  
  return (
    <div>
    <button onClick={openModal}>see more</button>
   
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h2  style={{fontSize:"50"}} ref={(_subtitle) => (subtitle = _subtitle)}>{el.name}</h2>
      <div style={{display:"flex"}}><img src={el.image} style={{maxHeight:"300px", maxWidth:"350px",minHeight:"300px",minWidth:"350px"}}/>
      <div style={{display:"flex", flexDirection:"column",left:"50px" ,width:"600px"}}>
        <p style={{marginLeft:"50px",color:"white"}}>{el.description}</p>
        <h3 style={{marginLeft:"50px",color:"white"}}><span style={{color:"#532b99"}}>Time:</span>  {el.time}</h3>
        <h3 style={{marginLeft:"50px",color:"white"}}><span style={{color:"#532b99"}}>Price: </span> {el.prix} $</h3>
        </div></div>
 
      <button style={{backgroundColor:"#532b99"}} onClick={()=>{dispatch(addreserv(reservation));dispatch(setping(!ping));navigate("/profile")}}>Book me</button>
     
    </Modal>
    </div>
 
  )
}

export default Descriptionn
