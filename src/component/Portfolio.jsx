import React from 'react';
import portfolio from "../portfolio";


const Portfolio = () => {
    const port = portfolio;
    console.log(port)
    return (
        <div className={"container"}>
            <div className="portfolio-page">
                <div className="card-wrapper">
                    {port.map((elem) => {
                        return <>
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img src={Object.values(elem.thumbnail)[0]} alt="all logo"/>
                                    </div>
                                    <div className="flip-card-back">
                                        <p>{elem.text}</p>
                                        <a href={elem.link} target={"_blank"} className="btn-link">Check out</a>
                                    </div>
                                </div>
                            </div>
                        </>
                    })}

                </div>
            </div>
        </div>
    )

};

export default Portfolio;