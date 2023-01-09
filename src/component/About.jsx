import AnimateLetter from "./UI/AnimatedLetters/AnimateLetter";
import {useEffect, useState} from "react";

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 2000)

    }, [])
    return (
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
                              I have been working as a developer for MetaTrader for the last 3 years on a freelance basis, Upwork mainly. I developed various trading robots/scripts that simplify trading. Developing was performed using MQL language, it's very similar to C++.. Also, I have experience in QA, I worked for Gameloft company in 2019 in Lviv's office.
                          </p>

                      </div>
                  </div>
        </div>
    );
};

export default About;