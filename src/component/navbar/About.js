import React from "react";
import '../Sass/S.scss';
import { IoArrowBackCircle } from "react-icons/io5";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { CgArrowLongRightR } from "react-icons/cg";
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoArrowForwardCircle } from "react-icons/io5";


export const About = ()=>{
    const nav = useNavigate()
    return(
        <div>
           
           <Navbar expand="lg" className="bg-body-tertiary mt-3 navbar-light" id="navbar" >
  <Container fluid>
    <Navbar.Brand href="#" style={{fontSize:"20px", fontWeight:"bolder",marginLeft:"40px"}} className="me-auto">RAMYA JEGAN</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav className="ms-auto my-2 my-lg-0 " style={{ maxHeight: '200px', justifyContent: "space-around",marginRight:"20px" }} >
      <Nav.Link className="db" style={{color:"green"}} onClick={()=>nav('/')}> HOME</Nav.Link>
        <Nav.Link className="db" style={{color:"green"}} onClick={()=>nav('/about')}>ABOUT ME</Nav.Link>
        <Nav.Link className="db" style={{color:"green"}} onClick={()=>nav('/resume')}>RESUME</Nav.Link>
        <Nav.Link className="db" style={{color:"green"}} onClick={()=>nav('/project')}>PROJECTS</Nav.Link>
        <Nav.Link className="db"  style={{color:"green"}} onClick={()=>nav('/contact')}>CONTACT</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>    
   </Navbar>

   <div class="card mb-3" id="home">
   <div class="row pt-5">
  <div class="col-sm-12">
    <div class="card" style={{backgroundColor:"black",color:"white",opacity:"0.6"}}>
      <div class="card-body">
      <p class="card-text align-left" style={{textAlign:"left"}}> <span style={{fontSize:"27px",color:"green"}}><CgArrowLongRightR /> </span>ABOUT</p>
        <h5 class="card-title" style={{textAlign:"left",fontSize:"50px",fontWeight:"bolder",letterSpacing:"0.1px"}}>Learn More about me </h5>
      <p class="card-text align-left"  style={{textAlign:"left",color:"green",fontSize:"30px"}}>Frontend Web Developer</p>
        
        <p class="card-text"  style={{textAlign:"left",paddingLeft:"30px",lineHeight:"28px",fontStyle:"italic"}}>"Hello! I'm Ramya, a passionate front-end web developer with a love for crafting engaging and user-friendly digital experiences." With a degree in Engineering and I had upskilled myself in a Frontend web development course, I've always been fascinated by the intersection of technology and creativity. My journey into front-end development began last year". I'm particularly passionate about creating pixel-perfect designs and translating them into seamless, interactive user experiences.
        My skill set includes expertise in HTML, CSS, and JavaScript, along with proficiency in frameworks such as Bootstrap & React.js. I'm also well-versed in responsive design principles, version control systems like Git.I'm excited about the possibilities that lie ahead in the world of front-end development, and I'm always on the lookout for new challenges and collaborations. Feel free to browse my portfolio to see some of my recent work, and don't hesitate to reach out—I'd love to chat about how we can bring your vision to life</p>
        <div>
        <ul class="row " style={{textAlign:"left"}}>
                        <li class="col-sm-12 col-lg-6 col-md-6 " style={{ fontWeight: "bolder", fontSize: "15px",listStyle:"none",padding:"10px 0px" }}><IoIosArrowDroprightCircle style={{ color: "green", fontSize: "20px" }} /> Birthday : <span style={{ fontWeight: "300" }}> 3 Oct 1997  </span></li>
                        <li class="col-sm-12 col-lg-6 col-md-6 " style={{ fontWeight: "bolder", fontSize: "15px",listStyle:"none",padding:"10px 0px" }}><IoIosArrowDroprightCircle style={{ color: "green", fontSize: "20px" }} /> Website : <span style={{ fontWeight: "300" }}> portfolio.com </span></li>
                        <li class="col-sm-12 col-lg-6 col-md-6 " style={{ fontWeight: "bolder", fontSize: "15px",listStyle:"none",padding:"10px 0px" }}><IoIosArrowDroprightCircle style={{ color: "green", fontSize: "20px" }} /> Phone : <span style={{ fontWeight: "300" }}> +91-8778810306  </span></li>
                        <li class="col-sm-12 col-lg-6 col-md-6 " style={{ fontWeight: "bolder", fontSize: "15px",listStyle:"none",padding:"10px 0px" }}><IoIosArrowDroprightCircle style={{ color: "green", fontSize: "20px" }} /> Degree : <span style={{ fontWeight: "300" }}> B.E  </span></li>
                        <li class="col-sm-12 col-lg-6 col-md-6 " style={{ fontWeight: "bolder", fontSize: "15px",listStyle:"none",padding:"10px 0px"}}><IoIosArrowDroprightCircle style={{ color: "green", fontSize: "20px" }} /> Email : <span style={{ fontWeight: "300" }}> ramyaj134@gmail.com  </span></li>
                        <li class="col-sm-12 col-lg-6 col-md-6 " style={{ fontWeight: "bolder", fontSize: "15px",listStyle:"none",padding:"10px 0px" }}><IoIosArrowDroprightCircle style={{ color: "green", fontSize: "20px" }} /> City : <span style={{ fontWeight: "300" }}> TN,India </span></li>
                </ul>
                </div>



       <div>
           <p class="card-text align-left" style={{textAlign:"left"}}> <span style={{fontSize:"27px",color:"green"}}><CgArrowLongRightR /> </span>  SKILLS </p>
       <div class="d-sm-flex justify-content-center" > 
       <div style={{alignItems:"center"}}>
       </div>
       <div class="col-sm-12 col-lg-5 ps-3" >
        <div>
          <p> HTML - 80% </p>
        {/* <p style={{textAlign:"left",paddingTop:"-20px"}}> HTML  <span style={{textAlign:"right"}}> <p> 80% </p></span></p> */}
       <div class="progress"> 
       <div class="progress-bar progress-bar" role="progressbar" style={{width: "85%" ,ariaValuenow:"85" ,ariaValuemin:"0" ,ariaValuemax:"100",backgroundColor:"green"}}></div>
        </div>
        </div>
        <div class="pt-2">
          <p> CSS - 75% </p>
        {/* <p style={{textAlign:"left",paddingTop:"-20px"}}> HTML  <span style={{textAlign:"right"}}> <p> 80% </p></span></p> */}
       <div class="progress"> 
       <div class="progress-bar progress-bar" role="progressbar" style={{width: "75%" ,ariaValuenow:"75" ,ariaValuemin:"0" ,ariaValuemax:"100",backgroundColor:"green"}}></div>
        </div>
        </div>
        <div class="pt-2">
          <p> Javascript - 65% </p>
        {/* <p style={{textAlign:"left",paddingTop:"-20px"}}> HTML  <span style={{textAlign:"right"}}> <p> 80% </p></span></p> */}
       <div class="progress"> 
       <div class="progress-bar progress-bar" role="progressbar" style={{width: "65%" ,ariaValuenow:"65" ,ariaValuemin:"0" ,ariaValuemax:"100",backgroundColor:"green"}}></div>
        </div>
        </div>
        </div>
        <div class="col-sm-12 col-lg-5 ps-3">
        <div>
          <p> Bootstrap - 85% </p>
        {/* <p style={{textAlign:"left",paddingTop:"-20px"}}> HTML  <span style={{textAlign:"right"}}> <p> 80% </p></span></p> */}
       <div class="progress"> 
       <div class="progress-bar progress-bar" role="progressbar" style={{width: "85%" ,ariaValuenow:"85" ,ariaValuemin:"0" ,ariaValuemax:"100",backgroundColor:"green"}}></div>
        </div>
        </div>
        <div class="pt-2">
          <p> ReactJS - 70% </p>
        {/* <p style={{textAlign:"left",paddingTop:"-20px"}}> HTML  <span style={{textAlign:"right"}}> <p> 80% </p></span></p> */}
       <div class="progress"> 
       <div class="progress-bar progress-bar" role="progressbar" style={{width: "70%" ,ariaValuenow:"70" ,ariaValuemin:"0" ,ariaValuemax:"100",backgroundColor:"green"}}></div>
        </div>
        </div>
        <div class="pt-2">
          <p> Redux- 80% </p>
        {/* <p style={{textAlign:"left",paddingTop:"-20px"}}> HTML  <span style={{textAlign:"right"}}> <p> 80% </p></span></p> */}
       <div class="progress"> 
       <div class="progress-bar progress-bar" role="progressbar" style={{width: "80%" ,ariaValuenow:"80" ,ariaValuemin:"0" ,ariaValuemax:"100",backgroundColor:"green"}}></div>
        </div>
        </div>
        </div>
       </div>
       </div>
       

      </div>  
  </div>
   </div>
    </div>
    

</div>

<p > <span><IoArrowBackCircle onClick={()=>nav('/')} style={{color:"green",fontSize:"40px",paddingRight:"10px"}}/></span>
Developed by <span style={{color:"green",fontStyle:"italic",textShadow:"5px 5px 3px green"}}> Ramya Jegan</span>
<span><IoArrowForwardCircle  onClick={()=>nav('/resume')} style={{color:"green",fontSize:"40px",paddingLeft:"10px"}}/></span>
 </p>
</div>
    )
}