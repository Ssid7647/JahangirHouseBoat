import React from "react";
import { Image } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import "./about.css"

export const About = () => {
    return (
        <section id="about">
            <Container fluid className="about-container">
                <div className="d-flex flex-column justify-content-center text-center p-5 mt-5 bg-primary  bg-gradient text-white">
                    <div className="h2">About</div>
                    <div className="h3 text-start p-2">Welcome to Our Floating heaven.</div>
                    <div className="h5 text-start text-wrap p-2">The Karnai family takes pride and pleasure in providing the finest of houseboat experience , blended with the experience necessary to enjoy Kashmir to its fullest potential. Our long established family business has the motto- "value for money". This we undoubtedly provide, but not working forgetting, that first class service and an unforgettable experience are also expected by the ever searching adventurer. </div>
                    <div className="h5 text-start text-wrap p-2">Experience the magic and serenity of Srinagar from the comfort of our luxurious houseboat on the iconic Dal Lake. Nestled amidst the tranquil waters and surrounded by the majestic Himalayan mountains, our houseboat offers a unique blend of traditional Kashmiri charm and modern amenities, ensuring an unforgettable stay for our guests.</div>
                    <div className="h5 text-start  text-wrap p-2">Our houseboat is more than just a place to stay; it is a floating haven designed to provide an immersive and authentic experience of Kashmiri culture. Each room is elegantly furnished, featuring intricate wood carvings and rich fabrics that reflect the region's artistic heritage. Large windows offer breathtaking views of the serene lake, vibrant Shikaras (traditional wooden boats), and lush Mughal gardens, creating a picturesque backdrop for your vacation.</div>
                </div>

            </Container>
        </section>
    )
}  