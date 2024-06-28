import React from "react";
import Container from 'react-bootstrap/Container';
import "./intro.css";
import { Carousel } from "react-bootstrap";
import { Image } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from "../assets/jhb-high-resolution-logo-transparent.png"
// import houseBoat from "../assets/houseboat.jpg"
import houseBoat from "../assets/cover.jpg"
import houseBoatPotrait from "../assets/mobCover.jpeg"
import menu from "../assets/menu.png"
import { Link } from 'react-scroll';
import mobLogo from "../assets/jhb-high-resolution-logo-transparent.png"
// import mobLogo from "../assets/png/jahangir-house-boat-logo-zip-file/png/logo-no-background.png"

// import dalLAke from "../assets/dal lake.jpg"

export const Intro = () => {
    const [showMenu, setShowMenu] = React.useState(false)
    return (
        <section id="intro">
            <Container fluid className="mt-2">

                <Carousel indicators={false}>
                    <Carousel.Item>

                        <div className="landscape">
                            <Image src={houseBoat} fluid className="IntroImage"  />
                            <Carousel.Caption className="IntroCaption">
                                {/* <div className="d-flex flex-column  flex-wrap align-content-start " >
                                    <div >
                                        <Image  src={logo} className="IntroLogo" />
                                    </div>
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                  
                                    <div className="introTitle">
                                        <div className="h1 flash">HOUSEBOAT NEW JAHANGIR <br /> & MORNING CAR</div>
                                        <div className="h3 flash">(GROUP OF HOUSEBOATS)</div>
                                    </div>
                                    <div className="h4 flash slang">'Gar firdaus bar-rue zamin ast, hami asto, hamin asto, hamin ast'</div>
                                </div> */}


                            </Carousel.Caption>
                        </div>
                        <div className="potrait">

                            <Image src={houseBoatPotrait} className="IntroImage" fluid />
                            <Carousel.Caption className="IntroCaption">


                                <div className="d-flex  justify-content-between align-items-center">

                                    <div>
                                        <Image src={mobLogo} className="mobLogo" />
                                    </div>

                                    <div className="align-item-end">
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


                            </Carousel.Caption>



                        </div>

                    </Carousel.Item>
                </Carousel>

            </Container>

        </section>
    )

}
