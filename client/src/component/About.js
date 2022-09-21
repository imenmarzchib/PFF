import React, { useEffect } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./about.css";
import Aos from 'aos'
import "aos/dist/aos.css"
const About = () => {
  useEffect(() => {
    Aos.init({
        duration:2000
    });
    }, [])
  return (
    <div>
        
      <div className='about1'>
      <div className='type'>
      <h2 style={{color:"#8a64eb",marginLeft:"-500px"}}>Learn Explore Grow :</h2>
      <img style={{marginLeft:"-500px"}} src="https://kidsheaven.wpengine.com/wp-content/uploads/2016/11/title_bg.png"/>
        <div className='type1'>
        <img width="100" height="100" src="https://kidsheaven.wpengine.com/wp-content/uploads/2017/02/icon5.jpg" alt="" /> 
       <div className='typea1'>
        <h4 style={{color:"#ff6900"}}>Nursery School</h4>
        <p>Nursery schools, maintained nurseries and pre-schools tend to cater for children aged between 2 and 4,
             offering early education in the couple of years before they begin "big school".</p>
        </div>
        </div>
        <div className='type1'>
        <img width="100" height="100" src="https://kidsheaven.wpengine.com/wp-content/uploads/2017/02/icon6.jpg"  alt="" />
        <div className='typea1'>
        <h4 style={{color:"#0ecad4"}}>Kindergarten Junior</h4>
        <p>is a preschool educational approach based on playing, singing, practical activities such as drawing, 
            and social interaction as part of the transition from home to school</p>
        </div>
        
        </div>
        
        <div className='type1'>
        <img width="100" height="100" src="https://kidsheaven.wpengine.com/wp-content/uploads/2017/02/icon4.jpg"  alt="" />
        <div className='typea1'>
       
       <h4 style={{color:"#00d084"}}>Kindergarten Senior</h4>
       <p>Senior kindergarten is for 5- and 6-year-olds. Park Tudor's private kindergarten program is focused on developing early learning skills and habits in an environment where children can be active
        , engaged and excited about learning.</p>
       </div>
        </div>
      </div>
      <img width="410" height="530" src="https://kidsheaven.wpengine.com/wp-content/uploads/2017/02/img14.jpg" alt=""  srcset="https://kidsheaven.wpengine.com/wp-content/uploads/2017/02/img14.jpg 510w, https://kidsheaven.wpengine.com/wp-content/uploads/2017/02/img14-243x300.jpg 243w" sizes="(max-width: 510px) 100vw, 510px" />
    </div>
    <div className='about2'>
      <div className='garcons'><img src="https://sp-ao.shortpixel.ai/client/q_glossy,ret_img/https://kidsworldtexas.com/wp-content/uploads/2019/04/aboutuspicboy.jpg" alt=""/></div>
    
        <div className='anas'>
        <div> < h1 style={{color:"#00d084"}}>KIDS WORLD LEARNING CENTER OFFERS:</h1></div>
       <div className='aboutb1'>
        <div className='moraba3'><h3 style={{display:"flex"}}> <img src="./icon 1.png"/>PURPOSEFUL PLAY BASED LEARNING</h3>
        <p>Guided by highly trained teachers, our curriculum offers playful,
             age-appropriate learning opportunities for children</p>
        </div>
        <div className='moraba3 drt'><h3 style={{display:"flex"}}><img style={{marginTop:"-12px"}} src="./icon2.png"/>STEAM</h3>
        <p>Our program incorporates STEAM learning (science, technology, engineering, arts and mathematics) into exciting,
             fun experiences for children.</p>
        </div>
        </div>
        <div>
        <div className='aboutb1'>
        <div className='moraba3 '><h3 style={{display:"flex"}}><img src="./icon 3.png"/>HEALTH and SAFETY</h3>
        <p>From every detail of our classroom and playground design to our high standards of cleanliness,
             we do everything to make children safe and secure.</p>
        </div>
        
        <div>
        <div className='moraba3 drt'><h3 style={{display:"flex"}}><img  style={{marginTop:"-12px"}}src="./icon4.png"/>SECURITY</h3>
        <p>SECURITYCoded Entry to the parent Finger Print clock in and out system , 
            cameras in all the rooms and Administration overlooking every aspect of our day.</p>
        </div> 
        </div>  
        </div>
        </div>
       </div>
      </div>
      <div className='avis' style={{marginTop:"50px"}}>
      {/* <div> < h1 style={{color:"#00d084", marginLeft:"520px",marginBottom:"-180px"}}>Join the Kidsworld community!:</h1></div>  */}
      {/* <Carousel emulateTouch
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        stopOnHover	={false}
        autoPlay
        interval={3000}>

                <div class="carousel-item">
                <div class="carousel-caption">
                </div>
                
                                    
                 <div class="parents" ><img className="parentImage" src="https://cdn.education.com/files/static/homepage/teachers/meet/amyjo-meiners.jpg"/>
                 <div className='parole'><p>Kidsworld has multiple resources organized for any learning tool you might need as a teacher, parent, and student, and I love the ability to be able to sort by grade, subject, enrichment, or type.</p></div>
                   
                </div>
                </div>
                
                <div class="carousel-item">
                <div class="carousel-caption">
                
                 </div>
                 <div class="parents" ><img className="parentImage" src="https://cdn.education.com/files/static/homepage/teachers/meet/jeune-provost.jpg"/>
                 <div className='parole'><p>Kidsworld  has given my students the opportunity to be creative while engaged in meaningful problem solving.</p></div>
                   
                </div>                 
             
                   
                </div>
                <div class="carousel-item">
                <div class="carousel-caption">
                
                 </div>
                                    
                 <div class="parents" ><img className="parentImage" src="https://cdn.education.com/files/static/homepage/teachers/meet/darbie-valenti.jpg"/>
                 <div className='parole'><p>Ideas to help inspire me as I design lessons and a plethora of resources to meet my students' varied needs make Education.com an extremely valuable resource.</p></div>
                   
                </div>  
                   
                </div> 
     </Carousel> */}
    <div style={{display:"flex",justifyContent:"space-between"}}>
      <img  data-aos="fade-right"src='https://kidsheaven.wpengine.com/wp-content/uploads/2017/02/award1.jpg'/>
      <div data-aos="fade-left"><h1 style={{color:"#887fbb"}}>At Kidsworld, on completion of the course, a course completion certificate is issued to the student.</h1>
      <p>Class leaders were presented with their Certificates of Course Completion before a crowd of cadets, and they were obviously extremely proud at their achievements. </p>
      </div>
    </div>
      </div>
    </div>
  
  )
}

export default About
