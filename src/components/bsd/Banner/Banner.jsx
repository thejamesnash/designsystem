import React from 'react';
import styles from './Banner.module.css';
import Button from '../Button/Button';

export const Banner = (props) => {
    return (
        <div className={styles.Banner} data-animate={props.animate} data-platform={props.platform} data-size={props.size}>
            <div className={styles.bannerContent}>
                <h2>{props.bannerTitle} {props.titleEmoji ? <span className={styles.titleEmoji}>{props.titleEmoji}</span> : null }</h2>
                { props.bannerSubtitle ? <h3>{props.bannerSubtitle}</h3> : null }
                { props.bannerText ? <p>{props.bannerText}</p> : null }
                <div className={styles.bannerBtnWrap}>
                    { props.bannerPrimaryBtn ? <Button btnText={props.bannerPrimaryBtn} />  : null }
                    { props.bannerSecondaryBtn ? <Button btnText={props.bannerSecondaryBtn} />  : null }
                </div>
            </div>
            { props.bannerImg ? <div className={styles.bannerImg} style={{'--bannerImg':`url(${props.bannerImg})`}}></div> : null }
        </div>
    )
};

export default Banner
