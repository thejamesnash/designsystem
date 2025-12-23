import React from 'react';
import styles from './StepIndicator.module.css';

export const StepIndicator = (props) => {
    const indicatorGradient = `linear-gradient(to right,  var(--iconsAndInputsSelected) 50%, rgb(102,102,102) 50% )`;
    const createIndicatorGradient = (steps,current) => {
        let gradientString = '';
        const segments = Array.apply(null, Array(steps));
        let segmentLength = 100 / steps;
        segments.forEach((segment,i)=>{
            let startPos = i * segmentLength;
            let endPos = (i + 1) * segmentLength;
            let segmentColour = 'rgb(102,102,102)';
            let separatorColour = 'red';
            let gradPosition = startPos;
            if( i+1 <= current ){
                segmentColour = 'var(--iconsAndInputsSelected)';
                gradPosition = endPos;
            }
            let segmentString = `,${segmentColour} calc(${gradPosition}% - 4px), ${separatorColour} calc(${gradPosition}% - 4px)`;
            gradientString = gradientString + segmentString;
        });

        //console.log(`linear-gradient(to right ${gradientString} )`);
        return `linear-gradient(to right ${gradientString} )`
    }
    
    return (
        <div className={styles.StepIndicator} style={{'--indicatorGradient': `${createIndicatorGradient(4,2)}`}} >
            <p>Step {props.current} of {props.steps}</p>
        </div>
    )
};

export default StepIndicator
