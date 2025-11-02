import React from "react";
import { useNavigate } from "react-router-dom";
import "../Sass/S.scss";
import { IoArrowBackCircle } from "react-icons/io5";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { CgArrowLongRightR } from "react-icons/cg";
import Navbar from "react-bootstrap/Navbar";
import { IoArrowForwardCircle } from "react-icons/io5";
import { FaRegCalendarDays } from "react-icons/fa6";
import resume from "../Sass/Ramya_Cv_9_25.pdf";
import { IoLocationOutline } from "react-icons/io5";
import { RiGraduationCapFill } from "react-icons/ri";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { FaSchool } from "react-icons/fa";

export const Resume = () => {
  let nav = useNavigate();
  return (
    <div>
      <Navbar
        expand="lg"
        className="bg-body-tertiary mt-3 navbar-light"
        id="navbar"
      >
        <Container fluid>
          <Navbar.Brand
            href="#"
            style={{
              fontSize: "20px",
              fontWeight: "bolder",
              marginLeft: "40px",
            }}
            className="me-auto"
          >
            RAMYA JEGAN
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0 "
              style={{
                maxHeight: "200px",
                justifyContent: "space-around",
                marginRight: "20px",
              }}
            >
              <Nav.Link
                className="db"
                style={{ color: "green" }}
                onClick={() => nav("/")}
              >
                {" "}
                HOME
              </Nav.Link>
              <Nav.Link
                className="db"
                style={{ color: "green" }}
                onClick={() => nav("/about")}
              >
                ABOUT ME
              </Nav.Link>
              <Nav.Link
                className="db"
                style={{ color: "green" }}
                onClick={() => nav("/resume")}
              >
                RESUME
              </Nav.Link>
              <Nav.Link
                className="db"
                style={{ color: "green" }}
                onClick={() => nav("/project")}
              >
                PROJECTS
              </Nav.Link>
              <Nav.Link
                className="db"
                style={{ color: "green" }}
                onClick={() => nav("/contact")}
              >
                CONTACT
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div class="card mb-3" id="home">
        <div class="row pt-5">
          <div class="col-sm-12">
            <div
              class="card"
              style={{
                backgroundColor: "black",
                color: "white",
                opacity: "0.6",
              }}
            >
              <p class="card-text align-left" style={{ textAlign: "left" }}>
                {" "}
                <span style={{ fontSize: "27px", color: "green" }}>
                  <CgArrowLongRightR />{" "}
                </span>
                Resume
              </p>
              {/* <h5 class="card-title" style={{textAlign:"left",fontSize:"50px",fontWeight:"bolder",letterSpacing:"0.1px",fontStyle:"italic"}}>Check My <span style={{color:"green",textDecorationLine:"none"}}> Resume</span> <span> <a href={resume} download class="button" style={{textDecoration:"none",fontSize:"20px"}}>  Download CV</a></span></h5> */}
              <div class="row">
                <div class="col-lg-6">
                  <h5
                    class="card-title ps-2"
                    style={{
                      textAlign: "left",
                      fontSize: "50px",
                      fontWeight: "bolder",
                      letterSpacing: "0.1px",
                      fontStyle: "italic",
                    }}
                  >
                    Check My{" "}
                    <span
                      style={{ color: "green", textDecorationLine: "none" }}
                    >
                      {" "}
                      Resume
                    </span>
                  </h5>
                </div>
                <div class="col-lg-6 d-flex justify-content-lg-end">
                  <a
                    href={resume}
                    download
                    class="button"
                    style={{ textDecoration: "none", fontSize: "20px" }}
                  >
                    Download CV
                  </a>
                </div>
              </div>

              <div class="card-body">
                <div class="row">
                  <h3 style={{ textAlign: "left", fontFamily: "cursive" }}>
                    {" "}
                    Education{" "}
                  </h3>
                  <div class="col-sm-6">
                    <ul>
                      <li
                        style={{
                          textAlign: "left",
                          color: "green",
                          fontSize: "25px",
                        }}
                      >
                        {" "}
                        Bachelor's Degree{" "}
                      </li>
                    </ul>
                    <div class="card border-0 mb-3">
                      <div class="card-body bg-dark text-light">
                        <p
                          class="card-text ps-2"
                          style={{
                            textAlign: "left",
                            border: "1px solid grey",
                            backgroundColor: "grey",
                          }}
                        >
                          {" "}
                          <FaRegCalendarDays /> 2015-2019
                        </p>

                        <div class="d-lg-flex justify-content-between text-start">
                          <p>
                            {" "}
                            <RiGraduationCapFill /> B.E(Civil Engineering){" "}
                          </p>
                          <p>
                            {" "}
                            <IoShieldCheckmarkOutline /> C.G.P.A - 7.6{" "}
                          </p>
                        </div>
                        <div class="d-lg-flex justify-content-between text-start">
                          <p>
                            {" "}
                            <FaSchool /> Sethu institute of technology{" "}
                          </p>
                          <p>
                            {" "}
                            <IoLocationOutline /> Kariyapatti, Tamil Nadu.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <ul>
                      <li
                        style={{
                          textAlign: "left",
                          color: "green",
                          fontSize: "25px",
                        }}
                      >
                        {" "}
                        High School{" "}
                      </li>
                    </ul>
                    <div class="card border-0 mb-3">
                      <div class="card-body bg-dark text-light">
                        <p
                          class="card-text ps-2"
                          style={{
                            textAlign: "left",
                            border: "1px solid grey",
                            backgroundColor: "grey",
                          }}
                        >
                          {" "}
                          <FaRegCalendarDays /> 2014-2015
                        </p>

                        <div class="d-lg-flex justify-content-between text-start">
                          <p>
                            {" "}
                            <RiGraduationCapFill /> HSC{" "}
                          </p>
                          <p>
                            {" "}
                            <IoShieldCheckmarkOutline /> Percent - 86%
                          </p>
                        </div>
                        <div class="d-lg-flex justify-content-between text-start">
                          <p>
                            {" "}
                            <FaSchool /> St.joseph's Matric Hr sec School
                          </p>
                          <p>
                            {" "}
                            <IoLocationOutline /> Madurai, Tamil Nadu.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12">
            <div
              class="card"
              style={{
                backgroundColor: "black",
                color: "white",
                opacity: "0.6",
              }}
            >
              <h3
                style={{
                  textAlign: "left",
                  paddingLeft: "20px",
                  fontFamily: "cursive",
                }}
              >
                {" "}
                Professional Experience{" "}
              </h3>
              {/* <p class="card-text align-left" style={{textAlign:"left"}}> <span style={{fontSize:"27px",color:"green"}}><CgArrowLongRightR /> </span>Resume</p>
        <h5 class="card-title" style={{textAlign:"left",fontSize:"50px",fontWeight:"bolder",letterSpacing:"0.1px",fontStyle:"italic"}}>Check My <span style={{color:"green",textDecorationLine:"none"}}> Resume</span> </h5> */}
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-12">
                    {/* <h3 style={{textAlign:"left"}}> Education </h3>  */}
                    <ul>
                      <li
                        style={{
                          textAlign: "left",
                          color: "green",
                          fontSize: "25px",
                        }}
                      >
                        {" "}
                        Frontendv Developer{" "}
                      </li>
                    </ul>
                    <div class="card border-0 mb-3">
                      <div class="card-body bg-dark text-light">
                        <p
                          class="card-text ps-2"
                          style={{
                            textAlign: "left",
                            border: "1px solid grey",
                            backgroundColor: "grey",
                          }}
                        >
                          {" "}
                          <FaRegCalendarDays /> MAY 2025-JULY-2025
                        </p>
                        <div class="d-lg-flex justify-content-between text-start">
                          <p>
                            {" "}
                            <RiGraduationCapFill /> Hoods Hub{" "}
                          </p>
                          <p>
                            {" "}
                            <IoLocationOutline /> Chennai{" "}
                          </p>
                        </div>
                        <div class="d-lg-flex justify-content-between text-start">
                          <ul>
                            <li class="pt-2">
                              Integrated Google Calendar using FullCalendar,
                              providing users with an interactive and
                              easy-to-use scheduling interface within the SaaS
                              product
                            </li>
                            <li class="pt-2">
                              Performed API integrations using Axios to connect
                              various features and modules to backend services,
                              ensuring smooth data flow and functionality
                            </li>
                            <li class="pt-2">
                              Implemented screen recording functionality with
                              RecordRTC, enabling users to capture video
                              directly within the application for enhanced
                              communication or support
                            </li>
                            <li class="pt-2">
                              Designed intuitive user interfaces and developed
                              APIs for email marketing features, improving user
                              engagement through targeted campaigns.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="card border-0 mb-3">
                      <div class="card-body bg-dark text-light">
                        <p
                          class="card-text ps-2"
                          style={{
                            textAlign: "left",
                            border: "1px solid grey",
                            backgroundColor: "grey",
                          }}
                        >
                          {" "}
                          <FaRegCalendarDays /> FEB 2024-JAN 2025
                        </p>
                        <div class="d-lg-flex justify-content-between text-start">
                          <p>
                            {" "}
                            <RiGraduationCapFill /> Laabamone Business Solutions{" "}
                          </p>
                          <p>
                            {" "}
                            <IoLocationOutline /> Madurai{" "}
                          </p>
                        </div>
                        <div class="d-lg-flex justify-content-between text-start">
                          <ul>
                            <li class="pt-2">
                             Developed and managed a booking platform for a U.S. client to streamline service scheduling and reservations.
                            </li>
                            <li class="pt-2">
                             Created disaster communication and GST filing websites with a focus on reliability and user satisfaction.
                            </li>
                            <li class="pt-2">
                              {" "}
                               Built easy-to-use admin panels for managing services and subscriptions.
                            </li>
                            <li class="pt-2">
                              {" "}
                             Used AWS Lambda for scalable back-end operations and GraphQL for efficient API management.
                            </li>
                            <li class="pt-2">
                              {" "}
                              Designed responsive front-end interfaces using React.js, Next.js, and Material-UI for a smooth user experience
on all devices and managed global app state efficiently with Next.js Context.

                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="card border-0 mb-3">
                      <div class="card-body bg-dark text-light">
                        <p
                          class="card-text ps-2"
                          style={{
                            textAlign: "left",
                            border: "1px solid grey",
                            backgroundColor: "grey",
                          }}
                        >
                          {" "}
                          <FaRegCalendarDays /> AUG 2023-Present
                        </p>
                        <div class="d-lg-flex justify-content-between text-start">
                          <p>
                            {" "}
                            <RiGraduationCapFill /> Fabevy Technologies Pvt Ltd.{" "}
                          </p>
                          <p>
                            {" "}
                            <IoLocationOutline /> Remote{" "}
                          </p>
                        </div>
                        <div class="d-lg-flex justify-content-between text-start">
                          <ul>
                            <li class="pt-2">
                              Developed responsive web pages using HTML, CSS,
                              JavaScript and Bootstrap to ensure optimal user
                              experience across all devices.
                            </li>
                            <li class="pt-2">
                              Translated the templates into interactive and
                              visually appealing web interfaces, adhering to
                              design principles and brand guidelines
                            </li>
                            <li class="pt-2">
                              {" "}
                              Utilized React.js library to build modular,
                              reusable components, enhancing code
                              maintainability and scalability and also worked
                              with React-Router, Redux,React-context for global
                              state management.
                            </li>
                          </ul>
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
      <p>
        {" "}
        <span>
          <IoArrowBackCircle
            onClick={() => nav("/about")}
            style={{ color: "green", fontSize: "40px", paddingRight: "10px" }}
          />
        </span>
        Developed by{" "}
        <span
          style={{
            color: "green",
            fontStyle: "italic",
            textShadow: "5px 5px 3px green",
          }}
        >
          {" "}
          Ramya Jegan
        </span>
        <span>
          <IoArrowForwardCircle
            onClick={() => nav("/projects")}
            style={{ color: "green", fontSize: "40px", paddingLeft: "10px" }}
          />
        </span>
      </p>
    </div>
  );
};
