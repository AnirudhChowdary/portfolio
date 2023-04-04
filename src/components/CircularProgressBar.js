import { CircularProgressbar , buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatinProgressProvider";
import React, { useEffect, useState } from "react";




export const CircularProgress = (props) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (percentage < props.percentage) {
        setPercentage(percentage + 1);
      }
    }, 50);
  }, [percentage]);

  
    return (
        <div className='circular-progress-bar'>
          <CircularProgressbar value={percentage} text={`${percentage}%`}  styles={{
                
                path: {
                  // Path color
                  stroke: `rgba(101, 15, 133, ${props.percentage/ 100})`,
                  strokeLinecap: 'butt',
                  transition: 'stroke-dashoffset 0.5s ease 0s',
                  // Rotate the path
                  transform: 'rotate(0.25turn)',
                  transformOrigin: 'center center',
                },
                trail: {
                  stroke: '#151515',
                  strokeLinecap: 'butt',
                  transform: 'rotate(0.25turn)',
                  transformOrigin: 'center center',
                },
                text: {
                  fill: 'white',
                  fontSize: '16px',
                } }}/>



        {/* <AnimatedProgressProvider valueStart={0} valueEnd={props.percentage}  duration={2} easingFunction={easeQuadInOut} repeat>
        {value => {
          const roundedValue = Math.round(value);
          return (
            <CircularProgressbar 
              value={value}
              text={`${roundedValue}%`}
              styles={{
                
                path: {
                  // Path color
                  stroke: `rgba(101, 15, 133, ${props.percentage/ 100})`,
                  strokeLinecap: 'butt',
                  transition: 'stroke-dashoffset 0.5s ease 0s',
                  // Rotate the path
                 // transform: 'rotate(0.25turn)',
                  transformOrigin: 'center center',
                },
                trail: {
                  stroke: '#151515',
                  strokeLinecap: 'butt',
                  transform: 'rotate(0.25turn)',
                  transformOrigin: 'center center',
                },
                text: {
                  fill: 'white',
                  fontSize: '16px',
                }
              }}
              
            />
          );
        }}
      </AnimatedProgressProvider> */}
     </div>
      
    )
  }
  