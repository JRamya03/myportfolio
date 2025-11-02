import React from "react";
import { useNavigate } from "react-router-dom";
import "../Sass/S.scss";
import { IoArrowBackCircle, IoArrowForwardCircle } from "react-icons/io5";
import { CgArrowLongRightR } from "react-icons/cg";
import { RiStackshareLine } from "react-icons/ri";
import { FaLink, FaGithub } from "react-icons/fa6";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import p1 from "../assets/bbredux2.PNG";
import p2 from "../assets/cont3.PNG";
import p3 from "../assets/tt2.PNG";
import p4 from "../assets/restoran.PNG";
import p5 from "../assets/bag.PNG";
import p6 from "../assets/HH1.png";
import p7 from "../assets/Screenshot_6.png";
import p8 from "../assets/Screenshot_7.png";
import p9 from "../assets/Screenshot_8.png";
import p10 from "../assets/Screenshot_5.png";
import p11 from "../assets/Screenshot_5.png";
import p12 from "../assets/Screenshot_9.png";
import p13 from "../assets/Screenshot_10.png";

export const Project = () => {
  const nav = useNavigate();

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary mt-3 navbar-light" id="navbar">
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
              className="ms-auto my-2 my-lg-0"
              style={{
                maxHeight: "200px",
                justifyContent: "space-around",
                marginRight: "20px",
              }}
            >
              <Nav.Link style={{ color: "green" }} onClick={() => nav("/")}>
                HOME
              </Nav.Link>
              <Nav.Link style={{ color: "green" }} onClick={() => nav("/about")}>
                ABOUT ME
              </Nav.Link>
              <Nav.Link style={{ color: "green" }} onClick={() => nav("/resume")}>
                RESUME
              </Nav.Link>
              <Nav.Link style={{ color: "green" }} onClick={() => nav("/project")}>
                PROJECTS
              </Nav.Link>
              <Nav.Link style={{ color: "green" }} onClick={() => nav("/contact")}>
                CONTACT
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="card mb-3" id="home">
        <div className="row pt-5">
          <div className="col-sm-12">
            <div
              className="card"
              style={{
                backgroundColor: "black",
                color: "white",
                opacity: "0.6",
              }}
            >
              <p className="card-text align-left" style={{ textAlign: "left" }}>
                <span style={{ fontSize: "27px", color: "green" }}>
                  <CgArrowLongRightR />{" "}
                </span>
                Projects
              </p>

              <div className="row">
                <div className="col-lg-6">
                  <h5
                    className="card-title ps-2"
                    style={{
                      textAlign: "left",
                      fontSize: "50px",
                      fontWeight: "bolder",
                      letterSpacing: "0.1px",
                      fontStyle: "italic",
                    }}
                  >
                    Check My{" "}
                    <span style={{ color: "green", textDecorationLine: "none" }}>
                      Projects
                    </span>
                  </h5>
                </div>
              </div>

              {/* ---- Project Cards Section ---- */}
              <div className="card-body">
                <div className="row">
                  {/* Each project block */}
                  {[
                    {
                      title: "Whitepanther - AI powered productivity tool",
                      stack: "ReactJS, Redux & Bootstrap",
                      img: p6,
                      link: "https://stagingappv1.whitepanther.email/login",
                    },
                    {
                      title: "Laabamone App",
                      stack: "NextJS, Redux, Bootstrap, Tailwind CSS, TypeScript",
                      img: p7,
                      link: "https://www.laabam.one",
                    },
                    {
                      title: "Vizhil - Ecommerce App",
                      stack: "NextJS, Redux, Bootstrap, Tailwind CSS",
                      img: p9,
                      link: "https://www.vizhil.com",
                    },
                    {
                      title: "Gemtrove",
                      stack: "NextJS, Redux, Bootstrap, Tailwind CSS",
                      img: p8,
                      link: "https://gemtrove.vercel.app/",
                    },
                    {
                      title: "Atlasfotobooth",
                      stack: "NextJS, Redux, Bootstrap, Tailwind CSS",
                      img: p11,
                      link: "https://atlasfotoboothfrontend.vercel.app/",
                    },
                    {
                      title: "Tomato - food delivery app",
                      stack: "ReactJS, Redux, Bootstrap, Tailwind CSS",
                      img: p13,
                      link: "https://food-delivery-frontend-tomato.netlify.app/",
                      github: "https://github.com/JRamya03/food-delivery-front",
                    },
                    {
                      title: "Adept -labs shopping app",
                      stack: "ReactJS, Redux & Bootstrap",
                      img: p12,
                      link: "https://adept-labs.netlify.app/",
                      github: "https://github.com/JRamya03/adept-task-1",
                    },
                    {
                      title: "Big Basket - Redux",
                      stack: "ReactJS, Redux & Bootstrap",
                      img: p1,
                      link: "https://bigbasket-redux-withauth.netlify.app/",
                      github: "https://github.com/JRamya03/bigbasket-redux",
                    },
                    {
                      title: "Big-Basket using Context",
                      stack: "ReactJS, Context & Bootstrap",
                      img: p2,
                      link: "https://context-bb.netlify.app/",
                      github: "https://github.com/JRamya03/bigbasket-context",
                    },
                    {
                      title: "Task Management (CRUD application)",
                      stack: "ReactJS, Redux & Bootstrap",
                      img: p3,
                      link: "https://crud-task-manage.netlify.app/",
                      github: "https://github.com/JRamya03/task-management-",
                    },
                    {
                      title: "Restoran app",
                      stack: "HTML, CSS & Bootstrap",
                      img: p4,
                      link: "https://restaurant-app-bootstrap.netlify.app/",
                      github: "https://github.com/JRamya03/resApp-bootstrap",
                    },
                    {
                      title: "MY Bag Store",
                      stack: "HTML & CSS",
                      img: p5,
                      link: "https://mybagstore-mq.netlify.app/",
                      github: "https://github.com/JRamya03/mybagstore-mq",
                    },
                  ].map((proj, i) => (
                    <div className="col-sm-6 mb-4" key={i}>
                      <ul>
                        <li
                          style={{
                            textAlign: "left",
                            color: "green",
                            fontSize: "25px",
                          }}
                        >
                          {proj.title}
                        </li>
                      </ul>
                      <div className="card border-0">
                        <div className="card-body bg-dark text-light">
                          <p>
                            <RiStackshareLine
                              style={{
                                fontSize: "25px",
                                color: "green",
                                fontWeight: "bolder",
                              }}
                            />{" "}
                            {proj.stack}
                          </p>
                          <img
                            className="project1"
                            alt={proj.title}
                            src={proj.img}
                            style={{
                              width: "100%",
                              height: "300px",
                              objectFit: "cover",
                            }}
                          />
                          <div className="pt-4 pb-2">
                            <a className="button2" href={proj.link} target="_blank" rel="noreferrer">
                              <FaLink />
                            </a>
                            {proj.github && (
                              <a
                                className="button2 ms-3"
                                href={proj.github}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <FaGithub />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* ---- End of Projects Section ---- */}
            </div>
          </div>
        </div>
      </div>

      <p>
        <span>
          <IoArrowBackCircle
            onClick={() => nav("/resume")}
            style={{ color: "green", fontSize: "40px", paddingRight: "10px", cursor: "pointer" }}
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
          Ramya Jegan
        </span>
        <span>
          <IoArrowForwardCircle
            onClick={() => nav("/contact")}
            style={{ color: "green", fontSize: "40px", paddingLeft: "10px", cursor: "pointer" }}
          />
        </span>
      </p>
    </div>
  );
};
