import React,{useRef} from 'react';
import styles from './Splash.module.css';
import AnimatedLogo from '../AnimatedLogo/AnimatedLogo';
import Logo from '@/components/global/Logos/Logo';

export const Splash = (props) => {
    const splashVideoRef = useRef(null);
    const splashRef = useRef(null);
    const videoSrc = 'https://github.com/thejamesnash/video/raw/refs/heads/main/raw-gradient_compressed.mp4'
    const handleSplashCanPlayThrough = () => { 
        splashVideoRef.current.play();
    }
    const handleSplashComplete = () => {
        if( splashRef.current.dataset.size === 'full' ){
            splashVideoRef.current.play();
        }
    }
    return (
        <div data-platform="bsd" ref={splashRef} className={styles.Splash} data-state={props.state} data-size={props.size} data-animate={props.animate} data-animationtier={props.animationTier}>
            <div className={styles.splashVideo}>
                <video ref={splashVideoRef} onCanPlayThrough={handleSplashCanPlayThrough} onEnded={handleSplashComplete}>
                    <source src={videoSrc} type="video/mp4" />
                </video>
                <div className={styles.logoWrapper}>
                    {/* <AnimatedLogo /> */}
                    <Logo logoRef="C4" colour="primary" />
                </div>
            </div>
        </div>
    )
};

export default Splash
 