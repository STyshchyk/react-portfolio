import React from 'react';
import "./AnimateLetter.Module.css"

const AnimateLetter = ({letterClass, stringArray, startIndex}) => {
    return (
        <>
            <span  >
            {stringArray.map((elem, i) => {
                return <span key={elem + i} className={`${letterClass}_${i + startIndex}`}>
                    {elem}
                </span>
            })}
                </span>
        </>
    );
};

export default AnimateLetter;