import React from "react";
import { useNavigate } from "react-router-dom";
import '../Sass/S.scss';
import { IoArrowBackCircle } from "react-icons/io5";
import Container from 'react-bootstrap/Container';  
import Nav from 'react-bootstrap/Nav';
import { CgArrowLongRightR } from "react-icons/cg";
import Navbar from 'react-bootstrap/Navbar';
import { IoArrowForwardCircle } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import { FaPhone } from "react-icons/fa6";
import { FaLocationPin } from "react-icons/fa6";
import { RiStackshareLine } from "react-icons/ri";
import { FaLink } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


export const Contact = ()=>{
  let nav=useNavigate();
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
    <p class="card-text align-left" style={{textAlign:"left"}}> <span style={{fontSize:"27px",color:"green"}}><CgArrowLongRightR /> </span>Contact Info</p>
        
        <div class="row">
      <div class="col-lg-6">
        <h5 class="card-title ps-2" style={{textAlign:"left",fontSize:"50px",fontWeight:"bolder",letterSpacing:"0.1px",fontStyle:"italic"}}>Feel Free to  <span style={{color:"green",textDecorationLine:"none"}}> Reach me</span></h5>
    </div>
</div>
      <div class="card-body" >
      <div class="row">
    
  <div class="col-sm-4" >
    <div class="card border-0 mb-3" >
      <div class="card-body bg-dark text-light" > 
              <div >
              <FaLocationPin style={{fontSize:"35px",color:"green",marginTop:"-50px",border:"2px solid green",borderRadius:"50%",padding:"3px 3px"}}/>
              </div>
              <div>
               <p>  Madurai </p>   
               <a href="www.ramyaj134@gmail.com"  style={{textDecoration:"none",color:"white",fontSize:"18px"}}>  Tamilnadu, India </a>   
              </div>
       
      </div>
    </div>
  </div>
  <div class="col-sm-4" >
    <div class="card border-0 mb-3" >
      <div class="card-body bg-dark text-light" > 
              <div >
              <FaPhone style={{fontSize:"35px",color:"green",marginTop:"-50px",border:"2px solid green",borderRadius:"50%",padding:"3px 3px"}}/>
              </div>
              <div>
               <p>  Phone </p>   
               <a href="www.ramyaj134@gmail.com"  style={{textDecoration:"none",color:"white",fontSize:"18px"}}>  +91-8778810306 </a>   
              </div>
       
      </div>
    </div>
  </div>
  <div class="col-sm-4" >
    <div class="card border-0 mb-3" >
      <div class="card-body bg-dark text-light" > 
              <div >
              <CgMail style={{fontSize:"40px",color:"green",marginTop:"-50px",border:"2px solid green",borderRadius:"50%",padding:"3px 3px"}}/>
              </div>
              <div>
               <p>  GMAIL </p>   
               <a href="www.ramyaj134@gmail.com"  style={{textDecoration:"none",color:"white",fontSize:"18px"}}>  ramyaj134@gmail.com </a>   

              </div>
       
      </div>
    </div>
  </div>
  <div class="col-sm-4 pt-3" >
    <div class="card border-0 mb-3" >
      <div class="card-body bg-dark text-light" > 
              <div >
              <FaGithub  style={{fontSize:"40px",color:"green",marginTop:"-50px",border:"2px solid green",borderRadius:"50%",padding:"3px 3px"}}/>
              </div>
              <div>
               <p>  GitHub </p>   
               <a href="https://github.com/JRamya03"  style={{textDecoration:"none",color:"white",fontSize:"18px"}}>  ramyajegan </a>   
              </div>
      </div>
    </div>
  </div>
  <div class="col-sm-4 pt-3" >
    <div class="card border-0 mb-3" >
      <div class="card-body bg-dark text-light" > 
              <div >
              <FaLinkedin style={{fontSize:"40px",color:"green",marginTop:"-50px",border:"2px solid green",borderRadius:"50%",padding:"3px 3px"}}/>
              </div>
              <div>
               <p>  Linked-In </p>   
               <a href="http://www.linkedin.com/in/ramyajegan"  style={{textDecoration:"none",color:"white",fontSize:"18px"}}>  ramyajegan </a>   
              </div>
      </div>
    </div>
  </div>
  <div class="col-sm-4 pt-3" >
    <div class="card border-0 mb-3" >
      <div class="card-body bg-dark text-light" > 
              <div >
              <FaWhatsapp style={{fontSize:"40px",color:"green",marginTop:"-50px",border:"2px solid green",borderRadius:"50%",padding:"3px 3px"}}/>
              </div>
              <div>
               <p>  Whatsapp </p>   
               <a   style={{textDecoration:"none",color:"white",fontSize:"18px"}}>  +91-8778810306 </a>   
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

<p > <span><IoArrowBackCircle onClick={()=>nav('/project')} style={{color:"green",fontSize:"40px",paddingRight:"10px"}}/></span>
Developed by <span style={{color:"green",fontStyle:"italic",textShadow:"5px 5px 3px green"}}> Ramya Jegan</span>
<span><IoArrowForwardCircle  onClick={()=>nav('/')} style={{color:"green",fontSize:"40px",paddingLeft:"10px"}}/></span>
 </p>
        </div>
    )
}