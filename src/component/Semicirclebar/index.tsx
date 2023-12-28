import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Semicircle({percentage}:{
    percentage:number
}) {
    return (
        <>
            <CircularProgressbar
                value={percentage}
                circleRatio={0.5}
                styles={buildStyles({
                    rotation: 0.75,
                    pathColor: "green",
                    trailColor: "#ccc",
                    backgroundColor: "red",
                })}
                text={""} // Use an empty string to hide the percentage text
            />
            <p className="percentText">
                {`${percentage}%`}
            </p>
            <h5 className="result">Good</h5>
            <span className='strength'>RESUME STRENGTH</span>
        </>
    );
}
