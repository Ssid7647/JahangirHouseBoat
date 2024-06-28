import React from "react";
import "./gallery.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Carousel from 'react-bootstrap/Carousel';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { Image } from "react-bootstrap";
import landscapeImage1 from "../assets/landscape/image1.jpg"
import landscapeImage2 from "../assets/landscape/image2.jpeg"
import landscapeImage3 from "../assets/landscape/image3.jpeg"
import landscapeImage4 from "../assets/landscape/image4.JPG"
import landscapeImage5 from "../assets/landscape/image5.jpeg"
import landscapeImage6 from "../assets/landscape/image6.jpeg"
import landscapeImage7 from "../assets/landscape/image7.jpg"
import landscapeImage8 from "../assets/landscape/image8.jpeg"
import landscapeImage9 from "../assets/landscape/image9.jpg"
import landscapeImage10 from "../assets/landscape/image10.jpeg"

import potraitImage1 from "../assets/potrait/image1.jpg"
import potraitImage2 from "../assets/potrait/image2.jpeg"
import potraitImage3 from "../assets/potrait/image3.jpg"
import potraitImage4 from "../assets/potrait/image4.jpeg"
import potraitImage5 from "../assets/potrait/image5.jpeg"
import potraitImage6 from "../assets/potrait/image6.jpeg"
import potraitImage7 from "../assets/potrait/image7.jpeg"
import potraitImage8 from "../assets/potrait/image8.jpeg"





// import image2 from "../assets/image2.jpg"
// import image3 from "../assets/image3.JPG"
// import image4 from "../assets/image4.JPG"
// import image5 from "../assets/image5.JPG"
// import image6 from "../assets/image6.jpeg"
// import image7 from "../assets/image7.jpeg"
// import image8 from "../assets/image8.jpeg"
// import image9 from "../assets/image9.jpeg"
// import image10 from "../assets/image10.jpeg"
// import image11 from "../assets/image11.jpeg"
// import image12 from "../assets/image13.jpeg"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';






export const Gallery = () => {

    let landscapeImages = [landscapeImage1, landscapeImage2, landscapeImage3, landscapeImage4, landscapeImage5, landscapeImage6, landscapeImage7, landscapeImage8, landscapeImage9, landscapeImage10]
    let potraitImages = [potraitImage1, potraitImage3, potraitImage4, potraitImage5, potraitImage6, potraitImage8]

    // images = images.map((img) => {
    //     return {
    //         original: img,
    //         originalHeight: "40rem",
    //         originalWidth: "60rem"
    //     }
    // })

    return (
        <section id="gallery" className="mt-5">
            <Container fluid className="gallery-container">
                <div className="galleryLandscape  text-center  bg-primary  bg-gradient text-white" >
                    <div className="h2 m-5 ">Gallery </div>
                    <Carousel showThumbs={false} autoPlay={true} emulateTouch={true} centerMode={true} dynamicHeight={false} useKeyboardArrows={true} infiniteLoop={true}>
                        {landscapeImages.map((image, index) => {

                            // <Carousel.Item key={index} className="d-flex justify-content-center">
                            // <Carousel.Item key={index} className="justify-content-center border border-light" >
                            //     <Image src={image} fluid={true} className="d-block mx-auto  galleryImage" />
                            // </Carousel.Item>
                            return (<div key={index} className="justify-content-center border border-light" >
                                <Image src={image} fluid={true} className="p-5  galleryImage" />
                            </div>)
                        })}
                    </Carousel>
                </div>
                <div className="galleryPotrait  text-center  bg-primary  bg-gradient text-white" >
                    <div className="h2 mb-2 pb-5">Gallery </div>
                    <Carousel showThumbs={false} autoPlay={true} centerMode={true} dynamicHeight={false} infiniteLoop={true}>
                        {


                            potraitImages.map((image, index) => {

                                // <Carousel.Item key={index} className="d-flex justify-content-center">
                                // <Carousel.Item key={index} className="justify-content-center border border-light" >
                                //     <Image src={image} fluid={true} className="d-block mx-auto  galleryImage" />
                                // </Carousel.Item>
                                return (<div key={index} className="justify-content-center border border-light" >
                                    <Image src={image} fluid={true} className="p-3 galleryImage" />
                                </div>)
                            })


                        }
                    </Carousel>
                </div>
            </Container>

        </section>
    )
}