import React from 'react'
import { useSelector } from 'react-redux'
import Cards from '../Cards';
const Lessons = ({ping,setping}) => {
  const services= useSelector((state)=>state.service.services);

  return (
    <div>
      {services?.filter((el)=>el.category=="lessons").map((el)=><Cards el={el}  ping={ping} setping={setping}/>)}
    </div>
  )
}

export default Lessons
