import React from 'react'
import { useSelector } from 'react-redux'
import Cards from '../Cards';

function Activity({ping,setping}) {
    const services= useSelector((state)=>state?.service?.services);


  return (
    <div style={{display:"flex", justifyContent:"space-around",width:"100%",flexWrap:"wrap", marginTop:"133px"}}>
      {services?.filter((el)=>el.category=="activity").map((el)=><Cards el={el} ping={ping} setping={setping}/>)}
    </div>
  )
}

export default Activity
