import React from "react";
import "../Sass/S.scss";
import { IoArrowBackCircle } from "react-icons/io5";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { CgArrowLongRightR } from "react-icons/cg";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoArrowForwardCircle } from "react-icons/io5";

export const About = () => {
  const nav = useNavigate();
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
              <div class="card-body">
                <p class="card-text align-left" style={{ textAlign: "left" }}>
                  {" "}
                  <span style={{ fontSize: "27px", color: "green" }}>
                    <CgArrowLongRightR />{" "}
                  </span>
                  ABOUT
                </p>
                <h5
                  class="card-title"
                  style={{
                    textAlign: "left",
                    fontSize: "50px",
                    fontWeight: "bolder",
                    letterSpacing: "0.1px",
                  }}
                >
                  Learn More about me{" "}
                </h5>
                <p
                  class="card-text align-left"
                  style={{
                    textAlign: "left",
                    color: "green",
                    fontSize: "30px",
                  }}
                >
                  Frontend Web Developer
                </p>

                <p
                  class="card-text"
                  style={{
                    textAlign: "left",
                    paddingLeft: "30px",
                    lineHeight: "28px",
                    fontStyle: "italic",
                  }}
                >
                  I’m Ramya J, a passionate Frontend Developer with hands-on
                  experience in building modern, responsive, and high-performing
                  web applications. I love transforming creative ideas into
                  functional, user-friendly digital products that combine clean
                  design with robust performance. Throughout my experience, I’ve
                  worked on projects such as booking platforms, SaaS
                  applications, and admin dashboards, where I focused on
                  creating interactive interfaces, integrating APIs, and
                  optimizing overall front-end performance. My technical
                  expertise includes JavaScript (ES6+), TypeScript, HTML5, CSS3,
                  and SCSS, along with frameworks and libraries like React.js,
                  Next.js, Redux / Redux Toolkit, Context API, and React Router.
                  I’m also proficient with Material-UI, Bootstrap, Git/GitHub,
                  Axios, Vercel, AWS Lambda, and GraphQL, and skilled in areas
                  like responsive design, state management, and API integration.
                  I’m deeply committed to writing clean, maintainable code and
                  constantly learning new technologies to stay current in the
                  fast-paced world of front-end development. I enjoy
                  collaborating with teams, solving real-world challenges, and
                  creating web experiences that are both functional and
                  delightful. Beyond coding, I like exploring design ideas,
                  experimenting with personal projects, and engaging with the
                  developer community to keep growing as a professional.
                </p>
                <div>
                  <ul class="row " style={{ textAlign: "left" }}>
                    <li
                      class="col-sm-12 col-lg-6 col-md-6 "
                      style={{
                        fontWeight: "bolder",
                        fontSize: "15px",
                        listStyle: "none",
                        padding: "10px 0px",
                      }}
                    >
                      {/* <IoIosArrowDroprightCircle
                        style={{ color: "green", fontSize: "20px" }}
                      />{" "}
                      Birthday :{" "}
                      <span style={{ fontWeight: "300" }}> 3 Oct 1997 </span>
                    </li>
                    <li
                      class="col-sm-12 col-lg-6 col-md-6 "
                      style={{
                        fontWeight: "bolder",
                        fontSize: "15px",
                        listStyle: "none",
                        padding: "10px 0px",
                      }}
                    > */}
                      {/* <IoIosArrowDroprightCircle
                        style={{ color: "green", fontSize: "20px" }}
                      />{" "}
                      Website :{" "}
                      <span style={{ fontWeight: "300" }}> portfolio.com </span>
                    </li>
                    <li
                      class="col-sm-12 col-lg-6 col-md-6 "
                      style={{
                        fontWeight: "bolder",
                        fontSize: "15px",
                        listStyle: "none",
                        padding: "10px 0px",
                      }}
                    > */}
                      <IoIosArrowDroprightCircle
                        style={{ color: "green", fontSize: "20px" }}
                      />{" "}
                      Phone :{" "}
                      <span style={{ fontWeight: "300" }}>
                        {" "}
                        +91-8778810306{" "}
                      </span>
                    </li>
                    <li
                      class="col-sm-12 col-lg-6 col-md-6 "
                      style={{
                        fontWeight: "bolder",
                        fontSize: "15px",
                        listStyle: "none",
                        padding: "10px 0px",
                      }}
                    >
                      <IoIosArrowDroprightCircle
                        style={{ color: "green", fontSize: "20px" }}
                      />{" "}
                      Degree : <span style={{ fontWeight: "300" }}> B.E </span>
                    </li>
                    <li
                      class="col-sm-12 col-lg-6 col-md-6 "
                      style={{
                        fontWeight: "bolder",
                        fontSize: "15px",
                        listStyle: "none",
                        padding: "10px 0px",
                      }}
                    >
                      <IoIosArrowDroprightCircle
                        style={{ color: "green", fontSize: "20px" }}
                      />{" "}
                      Email :{" "}
                      <span style={{ fontWeight: "300" }}>
                        {" "}
                        ramyaj134@gmail.com{" "}
                      </span>
                    </li>
                    <li
                      class="col-sm-12 col-lg-6 col-md-6 "
                      style={{
                        fontWeight: "bolder",
                        fontSize: "15px",
                        listStyle: "none",
                        padding: "10px 0px",
                      }}
                    >
                      <IoIosArrowDroprightCircle
                        style={{ color: "green", fontSize: "20px" }}
                      />{" "}
                      City :{" "}
                      <span style={{ fontWeight: "300" }}>
                        {" "}
                        Chennai-Tamilnadu{" "}
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <p class="card-text align-left" style={{ textAlign: "left" }}>
                    {" "}
                    <span style={{ fontSize: "27px", color: "green" }}>
                      <CgArrowLongRightR />{" "}
                    </span>{" "}
                    SKILLS{" "}
                  </p>
                  <div class="d-sm-flex justify-content-center">
                    <div style={{ alignItems: "center" }}></div>
                    <div class="col-sm-12 col-lg-5 ps-3">
                      <div>
                        <p> HTML - 80% </p>
                        {/* <p style={{textAlign:"left",paddingTop:"-20px"}}> HTML  <span style={{textAlign:"right"}}> <p> 80% </p></span></p> */}
                        <div class="progress">
                          <div
                            class="progress-bar progress-bar"
                            role="progressbar"
                            style={{
                              width: "85%",
                              ariaValuenow: "85",
                              ariaValuemin: "0",
                              ariaValuemax: "100",
                              backgroundColor: "green",
                            }}
                          ></div>
                        </div>
                      </div>
                      <div class="pt-2">
                        <p> CSS - 75% </p>
                        {/* <p style={{textAlign:"left",paddingTop:"-20px"}}> HTML  <span style={{textAlign:"right"}}> <p> 80% </p></span></p> */}
                        <div class="progress">
                          <div
                            class="progress-bar progress-bar"
                            role="progressbar"
                            style={{
                              width: "75%",
                              ariaValuenow: "75",
                              ariaValuemin: "0",
                              ariaValuemax: "100",
                              backgroundColor: "green",
                            }}
                          ></div>
                        </div>
                      </div>
                      <div class="pt-2">
                        <p> Javascript - 85% </p>
                        {/* <p style={{textAlign:"left",paddingTop:"-20px"}}> HTML  <span style={{textAlign:"right"}}> <p> 80% </p></span></p> */}
                        <div class="progress">
                          <div
                            class="progress-bar progress-bar"
                            role="progressbar"
                            style={{
                              width: "85%",
                              ariaValuenow: "85",
                              ariaValuemin: "0",
                              ariaValuemax: "100",
                              backgroundColor: "green",
                            }}
                          ></div>
                        </div>
                      </div>
                      <div class="pt-2">
                        <p> TypeScript - 70% </p>
                        {/* <p style={{textAlign:"left",paddingTop:"-20px"}}> HTML  <span style={{textAlign:"right"}}> <p> 80% </p></span></p> */}
                        <div class="progress">
                          <div
                            class="progress-bar progress-bar"
                            role="progressbar"
                            style={{
                              width: "70%",
                              ariaValuenow: "70",
                              ariaValuemin: "0",
                              ariaValuemax: "100",
                              backgroundColor: "green",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-12 col-lg-5 ps-3">
                      <div>
                        <p> Bootstrap - 85% </p>
                        {/* <p style={{textAlign:"left",paddingTop:"-20px"}}> HTML  <span style={{textAlign:"right"}}> <p> 80% </p></span></p> */}
                        <div class="progress">
                          <div
                            class="progress-bar progress-bar"
                            role="progressbar"
                            style={{
                              width: "85%",
                              ariaValuenow: "85",
                              ariaValuemin: "0",
                              ariaValuemax: "100",
                              backgroundColor: "green",
                            }}
                          ></div>
                        </div>
                      </div>
                      <div class="pt-2">
                        <p> ReactJS - 70% </p>
                        {/* <p style={{textAlign:"left",paddingTop:"-20px"}}> HTML  <span style={{textAlign:"right"}}> <p> 80% </p></span></p> */}
                        <div class="progress">
                          <div
                            class="progress-bar progress-bar"
                            role="progressbar"
                            style={{
                              width: "70%",
                              ariaValuenow: "70",
                              ariaValuemin: "0",
                              ariaValuemax: "100",
                              backgroundColor: "green",
                            }}
                          ></div>
                        </div>
                      </div>
                      <div class="pt-2">
                        <p> Redux- 80% </p>
                        {/* <p style={{textAlign:"left",paddingTop:"-20px"}}> HTML  <span style={{textAlign:"right"}}> <p> 80% </p></span></p> */}
                        <div class="progress">
                          <div
                            class="progress-bar progress-bar"
                            role="progressbar"
                            style={{
                              width: "80%",
                              ariaValuenow: "80",
                              ariaValuemin: "0",
                              ariaValuemax: "100",
                              backgroundColor: "green",
                            }}
                          ></div>
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
            onClick={() => nav("/")}
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
            onClick={() => nav("/resume")}
            style={{ color: "green", fontSize: "40px", paddingLeft: "10px" }}
          />
        </span>
      </p>
    </div>
  );
};
