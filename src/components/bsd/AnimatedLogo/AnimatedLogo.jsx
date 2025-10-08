import React, {useState,useEffect} from 'react';
import styles from './AnimatedLogo.module.css';

export const AnimatedLogo = (props) => {
    const [logoAnimate,setLogoAnimate] = useState('infinite');
    useEffect(() => {
        setLogoAnimate(props.logoState);
    }, [props.logoState]);

    
    return (
        <div 
            className={styles.AnimatedLogo} 
            aria-label="Channel 4 Streaming" 
            data-animate={props.animate} 
            data-animationtier={props.animationTier} 
            style={{'--logoState': `${logoAnimate}`}} 
        ></div>
    )
};

export default AnimatedLogo
