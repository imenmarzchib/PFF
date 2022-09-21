import React, { useEffect } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./Home.css";
import Aos from 'aos'
import "aos/dist/aos.css"

const Home = () => {
    useEffect(() => {
        Aos.init({
            duration:2000
        });
        }, [])

  return (
    <div style={{width:"100%"}}>
       <Carousel emulateTouch
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        stopOnHover	={false}
        autoPlay
        interval={3000}>

                <div class="carousel-item">
                <div class="carousel-caption">
                <div className='anim'><h2  data-aos="fade-right" style={{color:"#0083e9",fontSize:"50px"}}>The Best School </h2>
                 <h1 style={{color:"#ff431d",fontSize:"70px",fontFamily:"Oleo Script"}} data-aos="fade-left">For your Kids</h1>
                 <div>
                    <ul data-aos="fade-right" style={{fontSize:"20px",color:"black",listStyleType:"none"}}>
                        <li style={{textDecoration:"none "}}>Attractive coures</li>
                        <li style={{textDecoration:"none"}}>Best teachers</li>
                        <li style={{textDecoration:"none"}}>Learn and play school</li>
                    </ul>
                 </div>
                 </div>
                                    </div>
                    <img src="https://kidsheaven.wpengine.com/wp-content/uploads/2017/03/slider1.jpg" alt=""/>
                   
                </div>
                
                <div class="carousel-item">
                <div class="carousel-caption">
                <div className='anim1'>
                    <div>
                    <img style={{width:"70px",heigth:"70px",marginTop:"0px"}} data-aos="fade-right"src="https://kidsheaven.wpengine.com/wp-content/uploads/2017/03/slider2-img1.png"/>
                    <h2 style={{color:"rgba(255,105,0,1)"}}>Math Activities</h2>
                    </div>
                    <img style={{width:"70px",heigth:"70px",marginTop:"0px"}} data-aos="fade-right"src="https://kidsheaven.wpengine.com/wp-content/uploads/2017/03/slider2-img2.png"/>
                    <h2 style={{color:"rgba(255,105,0,1)"}}>Logical Thinking</h2>
                 <div>
                 <img style={{width:"70px",heigth:"70px",marginTop:"0px"}} data-aos="fade-right"src="https://kidsheaven.wpengine.com/wp-content/uploads/2017/03/slider2-img4.png"/>
                    <h2 style={{color:"rgba(255,105,0,1)"}}>Musical Training</h2>
                 </div>
                 </div>
                                    </div>
                  <img src="https://kidsheaven.wpengine.com/wp-content/uploads/2017/03/slider2.jpg" />
                   
                </div>
                   
                   
                
                <div >
                    <img   src="https://kidsheaven.wpengine.com/wp-content/uploads/2017/03/slider3.jpg" />
                    </div>
     </Carousel>
            <div className='partie2'>
                <div className="carré">
                     
                    <img src="./capture1.png"/><p>Here the classes are conducted in tune with the nature…</p>
            

                </div>
                <div className="carré"><img src="./capture2.png"/><p>More than 1000 kids have gained the confidence to walk tall.</p></div>
                <div className="carré"><img src="./capture3.png"/><p>Emphasis is more on hands on training rather than class room</p></div>
                <div className="carré"><img src="./capture4.png"/><p>Creativity finds expression through these children, if only we allow it</p></div>
            </div>
          
               <div style={{width:"100%"}}>
                
                <img  style={{width:"1684px",marginTop:"20px"}} src="https://kidsheaven.wpengine.com/wp-content/uploads/2016/11/fullwidth-slider-section-min.jpg?id=9229" alt=""/>
                </div>
                <div className='Experimentation'>
                    <div><h1 style={{color:"#7249bc",marginLeft:"450px"}}>Experimentation Nurtures Creativity</h1>
                   
                 <img style={{marginTop:"0px",marginLeft:"450px"}} src="https://kidsheaven.wpengine.com/wp-content/uploads/2016/11/title_bg.png"/>
                 <div className='activity'>
                 <div className='cartt cartt1'>
                    <img src="https://kidsheaven.wpengine.com/wp-content/uploads/2016/11/home_03.jpg"/>
                    <h2 style={{color:"#ff3467",marginLeft:"15px"}}>Building Confidence</h2>
                     <p style={{marginLeft:"15px"}}>Aean auctoetnliir pis terios. ante ipsummis fauulet utrice posere cubtsed
                         leo pharetu nec augue. dui bibendum ornare elementum.</p>
                         <button style={{marginTop:"50px", backgroundColor:"#ff3467"}}>read more</button>
                 </div>
                 <div className='cartt cartt2'>
                    <img src="https://kidsheaven.wpengine.com/wp-content/uploads/2016/11/home_05.jpg"/>
                    <h2 style={{color:"#78d6fe",marginLeft:"15px"}}>Creative Expressions</h2>
                     <p style={{marginLeft:"15px"}}>Aean auctoetnliir pis terios. ante ipsummis fauulet utrice posere cubtsed leo pharetu nec augue.
                         dui bibendum ornare elementum.</p>
                         <button style={{marginTop:"50px",backgroundColor:"#78d6fe"}}>read more</button>
                 </div>
                 <div className='cartt cartt3'>
                    <img src="https://kidsheaven.wpengine.com/wp-content/uploads/2016/11/home_09.jpg"/>
                    <h2 style={{color:"#94dd2c",marginLeft:"15px"}}>Interaction Based Methods</h2>
                     <p style={{marginLeft:"15px"}}>Aean auctoetnliir pis terios. ante ipsummis fauulet utrice posere cubtsed leo pharetu nec augue. dui bibendum ornare elementum</p>
                         <button style={{backgroundColor:"#94dd2c"}}>read more</button>
                 </div>
                 <div className='cartt cartt4'>
                    <img   src="https://kidsheaven.wpengine.com/wp-content/uploads/2016/11/home_07.jpg"/>
                    <h2 style={{color:"#ffd338",marginLeft:"15px"}}>Sports Builds Up Intelligence</h2>
                     <p style={{marginLeft:"15px"}}>Aean auctoetnliir pis terios. ante ipsummis fauulet utrice posere cubtsed leo pharetu nec augue.
                         dui bibendum ornare elementum.</p>
                         <button style={{backgroundColor:"#ffd338"}}>read more</button>
                 </div>
                 </div>
                </div>
                </div>
                <div style={{display:"flex",justifyContent:"space-around",margin:"30px"}}>
                   <img data-aos="fade-right" src='https://kidsheaven.wpengine.com/wp-content/uploads/2016/11/kid-painting2.jpg'/>
                   <div>
                   <img style={{width:"100%"}}  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"src="./pink.PNG"/>
                   <div  data-aos="zoom-in" style={{display:"flex"}}><img  style={{width:"50%"}} src="https://kidsheaven.wpengine.com/wp-content/uploads/2017/01/sun.jpg"/>
                   <img   data-aos="fade-up" style={{width:"50%"}} src="https://kidsheaven.wpengine.com/wp-content/uploads/2017/01/teacher-kid.jpg"/>
                  
                  
                  </div> 
                </div>
                </div>
                <div className='bleu'>
                    <img  src="https://kidsheaven.wpengine.com/wp-content/uploads/2017/01/testimonial1.png" alt=''/>
                <div className='bleu-1'>
                <h1 style={{color:"white", fontFamily: 'Kaushan Script', }} >Make your children's life special by enrolling themin our academy</h1>
                
                <a className='a' href="#" style={{marginLeft:"200px"}}>
                       <span></span>
                       <span></span>
                       <span></span>
                       <span></span>
                      enroll your children
                  </a>
                </div>
                </div>
                <img  style={{marginTop:"0px", width:"100%"}} src="https://kidsheaven.wpengine.com/wp-content/themes/kids-world/images/footer_top_strip.jpg"/>
               
            </div>
  )
}

export default Home

