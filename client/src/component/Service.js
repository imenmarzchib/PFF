
import React from 'react'
import { Link } from 'react-router-dom';
import Cards from './Cards';
import "./service.css";
const Service = () => {
  return (
    <div className='b'>
      <img style={{marginLeft:"150px"}} src='./imageser.jpeg'/>
      <div class="header">
    
  </div>
  
  <div class="row1-container">
    <div class="box box-down cyan">
    <Link  style={{textDecoration:"none"}} to="/lessons"> <h2 style={{color:"#88d914"}}>Lesson Plans </h2></Link>
      <p>Our ready-made lesson plans make it easy for classroom educators and homeschoolers to provide
         meaningful instruction to students.</p>
      <img src="https://cdn.education.com/files/static/homepage/icons/lessonPlans.svg" alt=""/>
    </div>

    <div class="box red">
    <Link  style={{textDecoration:"none"}} to="/club">  <h2 style={{color:"#ff5722"}}> club</h2></Link>
      <p>After school clubs are a great way to develop kids in different areas. Depending on the club that is created kids can grow in the area of the club such as science, 
        music,sports, or the like</p>
      <img src="https://cdn.education.com/files/static/homepage/icons/worksheets.svg" alt=""/>
    </div>

    <div class="box box-down blue">
    <Link  style={{textDecoration:"none"}} to="/games"><h2 style={{color:"#14c6cc"}}>Games</h2></Link>
      <p>We’ve got educational games galore: Sharpen math skills with Addition Pizza Party, learn letters with Alphabet Cloud Catcher, 
        and transform study time into an adventure every day!</p>
      <img  className='img' src="https://cdn.education.com/files/static/homepage/icons/games.svg" alt=""/>
    </div>
  </div>
 
  <div class="row2-container">
 
    <div class="box orange">
    <Link   style={{textDecoration:"none"}}to="/activity"> <h2 style={{color:"#fcb353"}}>  Activities  </h2></Link>
      <p>Get hands-on with learning! Our expert-designed activities bring hundreds of topics to life through science experiments,
         engaging writing prompts, creative art projects, and more.</p>
      <img src="https://cdn.education.com/files/static/homepage/icons/activities.svg" alt=""/>
   
   
    </div>
   
  </div>


    </div>
  )
}

export default Service
