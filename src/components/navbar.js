import React from "react"
import "./navbar.css"
import logo from "../assets/boatIcon.png"
import jahangirLogo from "../assets/jahangir-house-boat-high-resolution-logo-transparent.png"
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
// import { CiLocationOn } from "react-icons/ci";
import { IoMailOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import mobLogo from "../assets/jhb-high-resolution-logo-transparent.png"
import videoLandscape from "../assets/video/landscape.mp4"
import videoPortrait from "../assets/video/potrait.mp4"


const NavbarComponent = () => {

    const [showMenu, setShowMenu] = React.useState(false)
    return (

        <div className="navbar-container ">
            <video autoPlay loop muted className="landscape background-video">
                <source src={videoLandscape} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <video autoPlay loop muted className="potrait background-video">
                <source src={videoPortrait} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="navbar-content ">
                <div className="landscape  ">

                    <div className=" d-flex justify-content-between  align-items-center ">
                        <Image src={mobLogo} className="startLogo" />
                        {/* <div className="d-flex flex-column justify-content-center  align-items-start">
                            <span className="infoData" ><IoCallOutline className="icons" /> +91 8491999831 </span>
                            <span className="infoData"><IoMailOutline className="icons" /> newjahangir999@gmail.com </span>

                        </div> */}
                    </div>



                    <div className="infoData m-5">
                        {/* <Link activeClass="active" to="home" spy={true} smooth={true} offset={-50} duration={100} className="desktopMenuListitem">Home</Link> */}
                        <Link activeClass="active" to="about" spy={true} smooth={true} offset={-100} duration={100} className="desktopMenuListitem">About</Link>
                        <Link activeClass="active" to="amenities" spy={true} smooth={true} offset={-50} duration={100} className="desktopMenuListitem">Amenities</Link>

                        <Image src={jahangirLogo} alt="logo" className="jahangirlogo  ms-5 me-5 m-2 " />
                        <Link activeClass="active" to="gallery" spy={true} smooth={true} offset={-100} duration={100} className="desktopMenuListitem">Gallery</Link>
                        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={100} className="desktopMenuListitem">Contact</Link>

                    </div>

                    {/* <div className=" d-flex justify-content-between  align-items-center ">
                     
                        <CiLocationOn className="icons m-2" />
                        <div className="d-flex flex-column justify-content-center  align-items-start infoData ">

                            <span> Kohan Khan New Road </span>
                            <span>Ghat -1</span>
                            <span> Dal lake,Srinagar,J&K</span>
                        </div>
                    </div> */}
                    <div className=" d-flex justify-content-between  align-items-center ">
                        <Image src={logo} className="logo" />
                        {/* <div className="d-flex flex-column justify-content-center  align-items-start">
                            <span className="infoData" ><IoCallOutline className="icons" /> +91 8491999831 </span>
                            <span className="infoData"><IoMailOutline className="icons" /> newjahangir999@gmail.com </span>

                        </div> */}
                    </div>
                </div>

                <div className="potrait justify-content-between align-item-baseline ">


                    <div>
                        <Image src={mobLogo} className="mobLogo" />
                    </div>

                    <div >
                        <Image src={menu} alt="logo" className="sandwich" onClick={() => setShowMenu(true)} />
                        <div className="navMenu" style={{ "display": showMenu ? "flex" : "none" }}>

                            <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={100} className="Listitem" onClick={() => setShowMenu(false)}>Home</Link>
                            <Link activeClass="active" to="about" spy={true} smooth={true} offset={-50} duration={100} className="Listitem" onClick={() => setShowMenu(false)}>About</Link>
                            <Link activeClass="active" to="amenities" spy={true} smooth={true} offset={-50} duration={100} className="Listitem" onClick={() => setShowMenu(false)}>Amenities</Link>
                            <Link activeClass="active" to="gallery" spy={true} smooth={true} offset={-100} duration={100} className="Listitem" onClick={() => setShowMenu(false)}>Gallery</Link>
                            <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={100} className="Listitem" onClick={() => setShowMenu(false)}>Contact</Link>

                        </div>
                    </div>



                </div>





            </div>
        </div>


        // <section className="bg-primary navbarSection">
        //     <Container fluid className="navLandscape" >
        //         <div className=" navbar-container d-flex justify-content-around  align-items-center" >

        //             <video autoPlay loop muted className="background-video">
        //                 <source src={videoLandscape} type="video/mp4" />
        //                 Your browser does not support the video tag.
        //             </video>
        //           

        //             <div className=" d-flex justify-content-between  align-items-center ">
        //                 <Image src={logo} className="logo" />
        //                 <div className="d-flex flex-column justify-content-center text-white  align-items-start">
        //                     <span ><IoCallOutline /> +91 8491999831 </span>
        //                     <span><IoMailOutline /> newjahangir999@gmail.com </span>

        //                 </div>
        //             </div>

        //             <div className="">
        //                 <Link activeClass="active" to="home" spy={true} smooth={true} offset={-50} duration={100} className="desktopMenuListitem">Home</Link>
        //                 <Link activeClass="active" to="about" spy={true} smooth={true} offset={-100} duration={100} className="desktopMenuListitem">About</Link>
        //                 <Image src={jahangirLogo} alt="logo" className="jahangirlogo  ms-5 me-5 m-2 " />
        //                 <Link activeClass="active" to="amenities" spy={true} smooth={true} offset={-50} duration={100} className="desktopMenuListitem">Amenities</Link>
        //                 <Link activeClass="active" to="gallery" spy={true} smooth={true} offset={-100} duration={100} className="desktopMenuListitem">Gallery</Link>
        //                 <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={100} className="desktopMenuListitem">Contact</Link>

        //             </div>

        //             <div className=" d-flex justify-content-between  align-items-center ">
        //                 {/* <Image src={logo} className="logo" /> */}
        //                 <CiLocationOn className="text-white m-2" />
        //                 <div className="d-flex flex-column justify-content-center  align-items-start text-white">

        //                     <span> Kohan Khan New Road </span>
        //                     <span>Ghat -1</span>
        //                     <span> Dal lake,Srinagar,J&K</span>
        //                 </div>
        //             </div>
        //         </div>
        //     </Container>

        // </section>








    )
}





export default NavbarComponent