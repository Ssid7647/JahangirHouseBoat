import React from "react"
import "./amenities.css"
import { Image } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { PiSailboatFill } from "react-icons/pi";
import { FaWifi } from "react-icons/fa";
import { FaParking } from "react-icons/fa";
import shikara from "../assets/shikara.jfif"
import wifi from "../assets/wifi.jfif"
import parking from "../assets/parking.jfif"
import breakfast from "../assets/breakfast.jfif"
import water from "../assets/water.png"
import roomService from "../assets/roomservice.jfif"
import tv from "../assets/tv.png"
import mountain from "../assets/mountain.jfif"
import cab from "../assets/cab.png"
import honeymoon from "../assets/bouquet.jfif"
import beds from "../assets/beds.png"
import cleaning from "../assets/cleaning.png"
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { MdOutlineRoomService } from "react-icons/md";
import { PiTelevisionSimple } from "react-icons/pi";
import { FaBed } from "react-icons/fa";

export const Amenities = () => {
    return (
        <section id="amenities" className="mt-5 mb-5">
            <Container fluid >
                <div className="container d-flex flex-column justify-content-center text-white text-center   bg-primary  bg-gradient"  >

                    <div className="h2 m-5 p-2">Amenities</div>

                    <Row xs={2} md={4} lg={4}>
                        <Col><PiSailboatFill className="listIcon" /><div>Shikara ride facility</div></Col>
                        <Col><FaWifi className="listIcon" /><div>free Fast wifi</div></Col>
                        <Col><FaParking className="listIcon" /><div>free car parking available</div></Col>
                        <Col><MdOutlineFreeBreakfast className="listIcon" /><div>Dinner and breakfast available</div></Col>
                    </Row>
                    <Row xs={2} md={4} lg={4}>
                        <Col><Image src={water} className="listIcon" /><div>Hot water available</div></Col>
                        <Col><MdOutlineRoomService className="listIcon" /><div>Room service</div></Col>
                        <Col><PiTelevisionSimple className="listIcon" /><div>Smart TV</div></Col>
                        <Col><Image src={mountain} className="listIcon" /><div>Mountain & Lake view</div></Col>
                    </Row>
                    <Row xs={2} md={4} lg={4}>
                        <Col><Image src={cab} className="listIcon" /><div>vehicle service arrangment</div></Col>
                        <Col><Image src={honeymoon} className="listIcon" /><div>honeymoon Room decoration</div></Col>
                        <Col><FaBed className="listIcon" /><div>Extra beds for kids</div></Col>
                        <Col><Image src={cleaning} className="listIcon" /><div>Daily housekeeping</div></Col>
                    </Row>


                </div>
            </Container>
        </section>
    )
}
