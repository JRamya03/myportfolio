import React from "react";
import { useNavigate } from "react-router-dom";
import '../Sass/S.scss';
import { IoArrowBackCircle } from "react-icons/io5";
import Container from 'react-bootstrap/Container';  
import Nav from 'react-bootstrap/Nav';
import { CgArrowLongRightR } from "react-icons/cg";
import Navbar from 'react-bootstrap/Navbar';
import { IoArrowForwardCircle } from "react-icons/io5";
import p1 from '../assets/bbredux2.PNG'
import p2 from '../assets/cont3.PNG'
import p3 from '../assets/tt2.PNG'
import p4 from '../assets/restoran.PNG'
import p5 from '../assets/bag.PNG'

import { RiStackshareLine } from "react-icons/ri";
import { FaLink } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";



export const Project = ()=>{
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
    <p class="card-text align-left" style={{textAlign:"left"}}> <span style={{fontSize:"27px",color:"green"}}><CgArrowLongRightR /> </span>Projects</p>
        
        <div class="row">
      <div class="col-lg-6">
        <h5 class="card-title ps-2" style={{textAlign:"left",fontSize:"50px",fontWeight:"bolder",letterSpacing:"0.1px",fontStyle:"italic"}}>Check My <span style={{color:"green",textDecorationLine:"none"}}> Projects</span></h5>
    </div>
</div>
      <div class="card-body">
      <div class="row">
    
  <div class="col-sm-6" >
  <ul>
  <li style={{textAlign:"left",color:"green",fontSize:"25px"}}> Big-Basket using Redux</li> 
  </ul>
    <div class="card border-0 mb-3" >
      <div class="card-body bg-dark text-light" > 
               <p ><RiStackshareLine style={{fontSize:"25px",color:"green", fontWeight:"bolder"}} />  ReactJS, Redux & Bootstrap </p>   
        <img className="project1" src={p1} style={{width:"100%"}}/>
        <div class="pt-4 pb-2">
        <a class="button2"  href="https://bigbasket-redux-withauth.netlify.app/"><FaLink /> </a>
        <a class="button2" href="https://github.com/JRamya03/bigbasket-redux"><FaGithub /></a>
        </div>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
  <ul>
  <li style={{textAlign:"left",color:"green",fontSize:"25px"}}> Big-Basket using Context</li> 
  </ul>
    <div class="card border-0 mb-3" >
      <div class="card-body bg-dark text-light" > 
               <p ><RiStackshareLine style={{fontSize:"25px",color:"green", fontWeight:"bolder"}} />  ReactJS, Context & Bootstrap </p>   
        <img className="project1" src={p2} style={{width:"100%"}}/>
        <div class="pt-4 pb-2">
        <a class="button2"  href="https://context-bb.netlify.app/"> <FaLink /> </a>
        <a class="button2" href="https://github.com/JRamya03/bigbasket-context"><FaGithub /></a>
        </div>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
  <ul>
  <li style={{textAlign:"left",color:"green",fontSize:"25px"}}> Task Mangement (CRUD application)</li> 
  </ul>
    <div class="card border-0 mb-3" >
      <div class="card-body bg-dark text-light" > 
               <p ><RiStackshareLine style={{fontSize:"25px",color:"green", fontWeight:"bolder"}} />  ReactJS, Redux & Bootstrap </p>   
        <img className="project1" src={p3} style={{width:"100%"}}/>
        <div class="pt-4 pb-2">
        <a class="button2"  href="https://crud-task-manage.netlify.app/"> <FaLink /> </a>
        <a class="button2" href="https://github.com/JRamya03/task-management-"><FaGithub /></a>
        </div>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
  <ul>
  <li style={{textAlign:"left",color:"green",fontSize:"25px"}}> Restoran app</li> 
  </ul>
    <div class="card border-0 mb-3" >
      <div class="card-body bg-dark text-light" > 
               <p ><RiStackshareLine style={{fontSize:"25px",color:"green", fontWeight:"bolder"}} />  HTML,CSS & Bootstrap</p>   
        <img className="project1" src={p4} style={{width:"100%"}}/>
        <div class="pt-4 pb-2">
        <a class="button2"  href="https://restaurant-app-bootstrap.netlify.app/"> <FaLink /> </a>
        <a class="button2" href="https://github.com/JRamya03/resApp-bootstrap"><FaGithub /></a>
        </div>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
  <ul>
  <li style={{textAlign:"left",color:"green",fontSize:"25px"}}> MY Bag Store</li> 
  </ul>
    <div class="card border-0 mb-3" >
      <div class="card-body bg-dark text-light" > 
               <p ><RiStackshareLine style={{fontSize:"25px",color:"green", fontWeight:"bolder"}} />  HTML & CSS </p>   
        <img className="project1" src={p5} style={{width:"100%"}}/>
        <div class="pt-4 pb-2">
        <a class="button2"  href="https://mybagstore-mq.netlify.app/"> <FaLink /> </a>
        <a class="button2" href="https://github.com/JRamya03/mybagstore-mq"><FaGithub /></a>
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

<p > <span><IoArrowBackCircle onClick={()=>nav('/resume')} style={{color:"green",fontSize:"40px",paddingRight:"10px"}}/></span>
Developed by <span style={{color:"green",fontStyle:"italic",textShadow:"5px 5px 3px green"}}> Ramya Jegan</span>
<span><IoArrowForwardCircle  onClick={()=>nav('/contact')} style={{color:"green",fontSize:"40px",paddingLeft:"10px"}}/></span>
 </p>
        </div>
    )
}