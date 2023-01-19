import React, {useEffect, useRef, useState} from 'react';
import AnimateLetter from "./UI/AnimatedLetters/AnimateLetter";
import emailjs from '@emailjs/browser'



import {Marker, Popup, MapContainer, TileLayer } from "react-leaflet";

const Contact = () => {
    const position = [49.842957, 24.031111]
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef();
    useEffect(() => {
        const myTimeOut = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 2000)

        return clearTimeout(myTimeOut);
    }, [])

    function sendMail(e) {
        e.preventDefault();
        emailjs.sendForm(
            "service_ov6gly7",
            "template_x542bs9",
            form.current,
            "Fdl8bi92-kdRyuUW2"
        ).then((result) => {
            alert("Message sent ")
        }, (error) => {
            alert("Error sending mail")
        });
    }

    return (
        <>
            <div className="container">
                <div className="contact-page">
                    <div className="text-zone">
                        <h1>
                            <AnimateLetter
                                letterClass={letterClass}
                                stringArray={"Contact me".split("")}
                                startIndex={10}
                            />
                        </h1>
                        <div className="contact-form">
                            <form ref={form} onSubmit={sendMail}>
                                <div className="row">
                                    <input type="email" name="email" placeholder="Email" required/>
                                    <input type="text" name="name" placeholder="Name" required/>
                                </div>
                                <input type="text" name="subject" placeholder="Subject" required/>
                                <textarea placeholder={"Message"} name={"Text area"} required></textarea>
                                <input type="submit" className="flat-button" value={"Send"}/>
                            </form>
                        </div>
                    </div>
                    <div className="info-map">
                        <div className="contact-info">
                            Sviatoslav Tyshchyk,
                            <br/>
                            Ukraine, Lviv
                            <br/>
                            <br/>
                            <span>Front-end developer</span>
                        </div>
                        <div className="map-wrapper">
                            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={position}>
                                    <Popup>
                                        Ukraine. <br /> Lviv.
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
};

export default Contact;