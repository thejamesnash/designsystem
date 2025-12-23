import React, { useRef, useEffect, useState, useMemo } from 'react';
import styles from './Banner.module.css';
import Button from '../Button/Button.jsx';
import Logo from '../../global/Logos/Logo.jsx';
// import BasicGradientWorld from '../../bsd/BasicGradientWorld/Basic.jsx';

export const Banner = (props) => {
    
    const bannerRef = useRef(null);
    const trailerRef = useRef(null);

    const handleBannerFocusIn = (evt) => {
        console.log('focus in');
        trailerRef.current.play();
    };
    const handleBannerFocusOut = (evt) => {
        console.log('focus out');
        // trailerRef.current.pause();
        // trailerRef.current.currentTime = 0;
        // trailerRef.current.load();
    };

    useEffect(() => {
        if( !bannerRef.current ) return;

        bannerRef.current.addEventListener('focusin',handleBannerFocusIn);
        bannerRef.current.addEventListener('focusout',handleBannerFocusOut);
        // return () => { 
        //     bannerRef.current.removeEventListener('focusin', handleBannerFocusIn);
        //     bannerRef.current.removeEventListener('focusout', handleBannerFocusOut)
        // };
    }, []);

 
    return (
        <aside className={styles.Banner} ref={bannerRef}>
            { props.animatedGradient ? 
                <div className={styles.gradient}>
                    {/* <BasicGradientWorld variant="dark" gradientDirection='frontBottomRightToTopBackLeft' /> */}
                </div>
             : null }
            <div className={styles.bannerContent}>
                { props.bannerLogo ? <div className={styles.bannerLogo}><Logo logoRef={props.bannerLogo} colour='primary' /></div> : null }
                <div className={styles.bannerTextContent}>
                    <h2>{props.bannerTitle}</h2>
                    {props.bannerSubTitle ? <h3>{props.bannerSubTitle}</h3> : null }
                    {props.bannerText ? <p>{props.bannerText}</p> : null }
                    { props.bannerPrimaryCTAHref || props.bannerSecondaryCTAHref ? 
                        <div className={styles.btnWrap}>
                            {props.bannerPrimaryCTAHref ? <Button href={props.bannerPrimaryCTAHref} iconRef={props.bannerPrimaryCTAIcon} btnText={props.bannerPrimaryCTAText} primary /> : null }
                            {props.bannerSecondaryCTAHref ? <Button href={props.bannerSecondaryCTAHref} iconRef={props.bannerSecondaryCTAIcon} btnText={props.bannerSecondaryCTAText} secondary /> : null }
                        </div>
                    : null }
                </div>
            </div>
            { props.bannerImageHref ? <div className={styles.bannerImage} style={{backgroundImage: `url(${props.bannerImageHref})`}}></div> : null }
            { props.bannerVideoSrc ? 
                <div className={styles.bannerVideo} data-subtitles={props.subtitlePosition} style={{'--subtitleSize':`${props.subtitleSize}rem`}}>
                    <video
                        className={styles.trailerPlayer} 
                        preload="metadata" 
                        muted 
                        poster={props.bannerVideoPoster} 
                        ref={trailerRef}
                    >
                        <source src={props.bannerVideoSrc} type="video/mp4" />
                        <track kind="subtitles" src={props.bannerVideoSubs} srcLang="en" label="English" default></track>
                        <p>Sorry - your device doesn't support these videos</p>
                    </video>
                </div>
             : null }
        </aside>
    )
};

export default Banner
