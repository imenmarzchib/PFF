
import React, { useState } from 'react'
import "./cards.css";
import Descriptionn from './services/Descriptionn';
const Cards = ({el, ping,setping}) => {

  const color=["pink","yellow","red","blue","orange","green"]
  return (
    <div className='imen'>
      <div style={{overflow:"none"}}><img src={el?.image}/></div>

      <div className='milieu'><h2>{el?.name}</h2>
      <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
</svg> 08:00-12:00 am</p>
    <h4 style={{color:"#f8a32a"}}>From:$30</h4>
      </div>

<Descriptionn el={el} ping={ping} setping={setping}/>

    
    </div>
  )
}

export default Cards
