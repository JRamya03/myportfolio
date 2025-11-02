import React from "react";
import bg from "../assets/Ramya.jpeg";
import "../Sass/S.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import resume from "../Sass/Ramya_Cv_9_25.pdf";
import { IoArrowForwardCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { IoMailOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

export const Title = () => {
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
              marginLeft: "20px",
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

      <div class="card mb-3 " style={{ display: "flex", alignItems: "center" }}>
        <div
          class="row g-0"
          style={{
            backgroundImage:
              "url(https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0yMThiYXRjaDcta2F0aWUtNTEuanBn.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div class="col-md-6">
            <div class="pt-5 ">
              <img
                src={bg}
                alt="nomo"
                style={{
                  height: "500px",
                  width: "55%",
                  border: "5px solid green",
                  borderRadius: "35px 0px",
                  textAlign: "left",
                }}
              />
              <h4 class="card-title pt-2" style={{ color: "white" }}>
                RAMYA
              </h4>{" "}
              <h4 style={{ color: "white" }}> JEGAN </h4>
              <p
                class="card-title"
                style={{
                  fontSize: "larger",
                  letterSpacing: "0.3px",
                  color: "green",
                }}
              >
                {" "}
                Frontend Web Developer{" "}
              </p>
            </div>
            <div class="pb-2" style={{ fontSize: "40px", color: "white" }}>
              <a
                href="https://ramyaj134@gmail.com"
                style={{ textDecoration: "none", color: "white" }}
              >
                {" "}
                <IoMailOutline
                  style={{
                    marginRight: "10px",
                    border: "2px solid green",
                    borderRadius: "50%",
                    padding: "10px 10px",
                  }}
                  className="myicon"
                />{" "}
              </a>
              <a
                href="https://github.com/JRamya03"
                style={{ textDecoration: "none", color: "white" }}
              >
                {" "}
                <FaGithub
                  style={{
                    marginRight: "10px",
                    border: "2px solid green",
                    borderRadius: "50%",
                    padding: "10px 10px",
                  }}
                  className="myicon"
                />{" "}
              </a>
              <a
                href="https://www.linkedin.com/in/ramyajegan"
                style={{ textDecoration: "none", color: "white" }}
              >
                <FaLinkedinIn
                  style={{
                    marginRight: "10px",
                    border: "2px solid green",
                    borderRadius: "50%",
                    padding: "10px 10px",
                  }}
                  className="myicon"
                />
              </a>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card-body" style={{ color: "white" }}>
              <div
                style={{
                  marginRight: "20px",
                  width: "85%",
                  marginTop: "-23px",
                  textAlign: "left",
                  paddingLeft: "30px",
                  paddingTop: "50px",
                }}
              >
                <p
                  style={{
                    fontSize: "40px",
                    marginBottom: "-5px",
                    lineHeight: "70px",
                  }}
                >
                  Hello,
                </p>
                <p
                  style={{
                    fontSize: "40px",
                    marginBottom: "-10px",
                    lineHeight: "70px",
                  }}
                >
                  I'm{" "}
                  <span style={{ fontWeight: "bold", color: "green" }}>
                    Ramya Jegan
                  </span>
                </p>
                <p
                  style={{
                    fontSize: "40px",
                    marginBottom: "-10px",
                    lineHeight: "70px",
                  }}
                >
                  frontend a web Developer
                </p>
                <div style={{ marginTop: "20px" }}>
                  <a
                    href={resume}
                    download
                    class="button"
                    style={{ textDecoration: "none", fontSize: "17px" }}
                  >
                    Download Resume
                  </a>
                  <button class="button" onClick={() => nav("/project")}>
                    Project
                  </button>
                </div>
                <p
                  style={{
                    fontSize: "20px",
                    paddingTop: "13px",
                    letterSpacing: "0.5px",
                    lineHeight: "45px",
                  }}
                >
                  I’m a Frontend Developer with hands-on experience in designing and developing responsive web applications using React.js, Next.js, and modern JavaScript. I’ve worked on real-world
                  projects involving booking platforms, admin dashboards, and
                  SaaS-based applications, focusing on creating seamless user
                  experiences and efficient front-end architecture. My work
                  combines clean UI design, smooth API integration, and scalable
                  code to deliver reliable and engaging digital solutions.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p>
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
            onClick={() => nav("/about")}
            style={{ color: "green", fontSize: "40px", paddingLeft: "10px" }}
          />
        </span>
      </p>
    </div>
  );
};
