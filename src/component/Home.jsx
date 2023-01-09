import React from 'react';
import logo from "../assets/images/logo-s.png"
import {Link} from "react-router-dom";
import AnimateLetter from "./UI/AnimatedLetters/AnimateLetter";
import Logo from "./Logo";
import {useEffect, useState} from "react";

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
          setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)

    }, [])


    const nameArray = "viatoslav".split(""), jobTitleArray = "web developer".split("")
    return (
        <div className="container">
            <div className="home-page">
                <div className="text-zone ">
                    <h1>
                        <AnimateLetter letterClass={letterClass} stringArray={"Hi".split("")} startIndex={10}/>
                        <br/>
                        <AnimateLetter letterClass={letterClass} stringArray={"I'm".split("")} startIndex={10}/>
                        <img src={logo} alt="logo"/>
                        <AnimateLetter letterClass={letterClass} stringArray={nameArray}startIndex={14}/>
                        <br/>
                        <AnimateLetter letterClass={letterClass} stringArray={jobTitleArray} startIndex={10}/>

                    </h1>
                    <h2>Frontend Developer</h2>
                    <Link to="/contact" className="flat-button">CONTACT ME</Link>

                </div>
                <Logo/>
            </div>
        </div>
    );
};

export default Home;