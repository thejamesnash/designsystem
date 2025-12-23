import React, { useState, useEffect, useRef } from 'react';
import styles from './Button.module.css';
import Icon from '../../global/Icon/Icon.jsx';

export const Button = (props) => {
    
    return (
        <button 
          className={`${styles.Button} ${props.secondary ? styles.secondary : ''}`} 
          data-platform={props.platform} 
          data-animate={props.animate} 
          data-animationtier={props.animationTier} 
          data-template={props.type} 
          data-size={props.tileSize}
        >
            {props.withIcon ? <Icon iconRef={props.withIcon} colour="dark" /> :  null}
            {props.withEmoji ? <i aria-hidden="true">{props.withEmoji}</i> :  null}
            {props.btnSubText ? (
                <span className={styles.btnText}>
                    <b>{props.btnText}</b>
                    <b>{props.btnSubText}</b>
                </span>
            ) : (
                <b className={styles.btnText}>{props.btnText}</b>
            )}
        </button>
    )
};

export default Button;
