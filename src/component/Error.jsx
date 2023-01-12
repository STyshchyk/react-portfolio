import React from 'react';
import AnimateLetter from "./UI/AnimatedLetters/AnimateLetter";
import {Link} from "react-router-dom";

const Error = () => {
    return (
        <div className="container">
            <div className="error-container">
                <AnimateLetter letterClass="animate-letter" startIndex={10} stringArray={"Error Page".split("")}/>
                <Link to={"/"}>Go home</Link>
            </div>
        </div>
    );
};

export default Error;