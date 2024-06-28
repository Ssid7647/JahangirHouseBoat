import React from "react"
import "./navbar.css"
import logo from "../assets/boatIcon.png"
import jahangirLogo from "../assets/jahangir-house-boat-high-resolution-logo-white-transparent.png"
import contactImg from "../assets/contactImg.png"
import { Link } from 'react-scroll'
import menu from "../assets/menu.png"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Image } from "react-bootstrap"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { IoMailOutline } from "react-icons/io5";

const NavbarComponent = () => {

    const [showMenu, setShowMenu] = React.useState(false)
    return (




        <section className="bg-primary navbarSection">
            <Container fluid className="navLandscape" >
                <div className="d-flex justify-content-around  align-items-center" >
                    <div className=" d-flex justify-content-between  align-items-center ">
                        <Image src={logo} className="logo" />
                        <div className="d-flex flex-column justify-content-center  align-items-start">
                            <span><IoCallOutline /> +91 8491999831 </span>
                            <span><IoMailOutline /> newjahangir999@gmail.com </span>

                        </div>
                    </div>

                    <div className="">
                        <Link activeClass="active" to="home" spy={true} smooth={true} offset={-50} duration={100} className="desktopMenuListitem">Home</Link>
                        <Link activeClass="active" to="about" spy={true} smooth={true} offset={-100} duration={100} className="desktopMenuListitem">About</Link>
                        <Image src={jahangirLogo} alt="logo" className="jahangirlogo  ms-5 me-5 m-2 " />
                        <Link activeClass="active" to="amenities" spy={true} smooth={true} offset={-50} duration={100} className="desktopMenuListitem">Amenities</Link>
                        <Link activeClass="active" to="gallery" spy={true} smooth={true} offset={-100} duration={100} className="desktopMenuListitem">Gallery</Link>
                        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={100} className="desktopMenuListitem">Contact</Link>
    
                    </div>

                    <div className=" d-flex justify-content-between  align-items-center ">
                        {/* <Image src={logo} className="logo" /> */}
                        <CiLocationOn className=" m-2" />
                        <div className="d-flex flex-column justify-content-center  align-items-start">

                            <span> Kohan Khan New Road </span>
                            <span>Ghat -1</span>
                            <span> Dal lake,Srinagar,J&K</span>
                        </div>
                    </div>
                </div>




                {/* <nav className="navbar navbar-expand-lg topNa ">
                    <div class="container-fluid" >
                        <div className="navbar-brand">
                            <img src={logo} alt="logo" className="logo"></img>
                        </div>

                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div className="desktopMenu">

                            <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-50} duration={100} className="desktopMenuListitem">Home</Link>
                            <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={100} className="desktopMenuListitem">Portfolio</Link>
                            <Link activeClass="active" to="timeline" spy={true} smooth={true} offset={-50} duration={100} className="desktopMenuListitem">Timeline</Link>
                            <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-100} duration={100} className="desktopMenuListitem">Works</Link>

                        </div>
                        <button className="desktopMenuBtn" onClick={() => {
                            document.getElementById("contact").scrollIntoView(
                                { behavior: "smooth" }
                            )
                        }}>
                            <img src={contactImg} alt="contact img" className="desktopIconImg"></img>
                            Contact Me
                        </button>

                  
                    </div>
                </nav> */}


            </Container>
          
        </section>








    )
}





export default NavbarComponent