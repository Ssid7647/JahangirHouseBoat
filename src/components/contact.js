import React from "react";
import { Image } from "react-bootstrap";
import emailjs from '@emailjs/browser';
import "./contact.css"
import location from "../assets/location.png"
import email from "../assets/email.png"
import call from "../assets/call.png"
import { IoLocationSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Map from "./map";



export const Contact = () => {

    const form = React.useRef();

    const sendEmail = (e) => {
        e.preventDefadivt();

        emailjs
            .sendForm('service_exb9wrp', 'template_56v1lto', form.current, {
                pubdivcKey: '-IAdk5SAYRgSIn_7y',
            })
            .then(
                () => {
                    alert('SUCCESS!');
                    e.target.reset()
                },
                (error) => {
                    alert('FAILED...', error.text);
                },
            );
    };

    // #contact {
    //     /* min-height: calc(100vh-4rem); */
    //     /* width: 100%; */
    //     max-width: 80vw;
    //     margin: 0 auto;
    //     text-align: center;
    //     display: flex;
    //     flex-direction: column;
    //     align-items: center;
    //     justify-content: center;
    //   }
    return (

        <section id="contact" >


            <Container fluid>



                <div className="border border-secondary-subtle bg-primary bg-gradient text-white d-flex flex-column text-center align-items-center justify-content-center p-1"  >
                    <div className="h2 p-5 ">Contact us</div>


                    <div className=" d-flex flex-column">
                        <div className="text text-wrap">
                            <h3>HOUSEBOAT NEW JAHANGIR & MORNING CAR <br />
                                (GROUP OF HOUSEBOATS)</h3>
                            <div className="d-flex flex-column justify-content-start p-4">
                                <div className="d-flex justify-content-between h5">
                                    <div className=""><IoLocationSharp /></div>
                                    Kohan Khan, New road,Dal lake ,Ghat no. 1, Srinagar (J&K)
                                </div>
                                <div className="d-flex justify-content-between h5">
                                    <div><IoCall /></div>
                                    +91 8491008552 & 8491999831
                                </div>
                                <div className="d-flex justify-content-between h5">
                                    <div><MdEmail /></div>
                                    <div className="">newjahangir999@gmail.com</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            {/* <Map /> */}
                        </div>





                    </div>

                    <div className="h4 p-2 ">or</div>
                    <div className="col-md-auto col-lg-auto">
                        <div className="h3 text-wrap text-break">Please fill out the form below<br /> to discuss or contact me.</div>
                        <form ref={form} className="form p-1" onSubmit={sendEmail}>
                            <input required={true} style={{ "color": "white" }} type="text" className="name" name="from_name" placeholder="Your name please!!!" />
                            <input required={true} style={{ "color": "white" }} type="email" className="email" name="from_email" placeholder="email" />
                            <textarea required={true} style={{ "color": "white" }} className="msg" rows={5} name="message" placeholder="message..." />
                            <button type="submit" className="btn btn btn-secondary btn-lg d-inline-flex focus-ring p-2 m-4 text-decoration-none border-secondary rounded-2" value="send"  >Submit</button>
                        </form>

                    </div>
                </div >

            </Container>

        </section >
    )
}