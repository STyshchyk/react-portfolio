import AnimateLetter from "./UI/AnimatedLetters/AnimateLetter";
import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact} from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";

import cv from "../assets/S.Tyshchyk's CV.pdf"

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 2000)

    }, [])
    return (
        <>

            <div className="container">
                <div className="about-page">
                    <div className="text-zone">
                        <h1>
                            <AnimateLetter
                                letterClass={letterClass}
                                stringArray={"About me".split("")}
                                startIndex={10}
                            />
                        </h1>
                        <p>
                            I’m very ambitious front-end developer looking for a role in
                            established IT company with the opportunity to work with the latest
                            technologies on challenging and diverse projects.
                        </p>
                        <p>
                            I have been working as a developer for MetaTrader for the last 3 years on a freelance basis,
                            Upwork mainly. I developed various trading robots/scripts that simplify trading. Developing
                            was
                            performed using MQL language, it's very similar to C++.. Also, I have experience in QA, I
                            worked
                            for Gameloft company in 2019 in Lviv's office.
                        </p>
                        <p>
                            To get more info about me, check out the CV
                        </p>
                        <a href={cv} target="_blank" className="flat-button">
                            Download cv
                        </a>
                    </div>
                    <div className="cube-zone">
                        <section className="galaxy-header">
                            <div className="galaxy">
                                <div className="stars"></div>
                            </div>
                        </section>
                        <div className="center-cube">
                            <div className="cubespinner">
                                <div className="face1">
                                    <FontAwesomeIcon icon={faAngular} color="#DD0031"/>
                                </div>
                                <div className="face2">
                                    <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                                </div>
                                <div className="face3">
                                    <FontAwesomeIcon icon={faCss3} color="#28A4d9"/>
                                </div>
                                <div className="face4">
                                    <FontAwesomeIcon icon={faReact} color="#5ed3f4"/>
                                </div>
                                <div className="face5">
                                    <FontAwesomeIcon icon={faJsSquare} color="#efd81d"/>
                                </div>
                                <div className="face6">
                                    <FontAwesomeIcon icon={faGitAlt} color="#ec4488"/>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Loader type="ball-pulse-sync" active/>

        </>
    );
};

export default About;