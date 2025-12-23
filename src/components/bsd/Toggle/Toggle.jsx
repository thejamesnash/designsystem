import React from 'react';
import styles from './Toggle.module.css';
import Icon from '@/components/global/Icon/Icon';
import Button from '../Button/Button';

export const Toggle = (props) => {
    return (
        <div className={styles.Toggle} data-platform="bsd" data-animate={props.animate} > 
            { props.disabled ?
                <>
                    <h2>{props.labelTitle}</h2>
                    <p id={`${props.name}-desc`}>
                        {Array.isArray(props.labelText) ? (
                            props.labelText.map((text, index) => <span key={index}>{text}</span>)
                        ) : (
                            <span>{props.labelText}</span>
                        )}
                    </p>
                    <input 
                        type="checkbox" 
                        id={props.name} 
                        aria-describedby={`${props.name}-desc`} 
                        className={styles.toggleInput} 
                        checked  
                        disabled
                    />
                    <p className={styles.alwayson}><Icon iconRef="tick" /><span>Always On</span></p>
                    <Button btnText="Read More" />
                </>
                    :
                <>
                    <label htmlFor={props.name}>{props.labelTitle}</label>
                    <p id={`${props.name}-desc`}>
                        {Array.isArray(props.labelText) ? (
                            props.labelText.map((text, index) => <span key={index}>{text}</span>)
                        ) : (
                            <span>{props.labelText}</span>
                        )}
                    </p>
                    <input 
                        type="checkbox" 
                        id={props.name} 
                        aria-describedby={`${props.name}-desc`} 
                        className={styles.toggleInput} 
                        checked={props.checked} 
                        data-active={props.active}
                    />
                    <span className={styles.toggleVisualState}>
                        <span className={styles.toggleVisualStateOff} data-state="off" aria-hidden="true">{props.toggleOptions[0]}</span>
                        <span className={styles.toggleVisualStateOn} data-state="on" aria-hidden="true">{props.toggleOptions[1]}</span>
                        <b className={styles.toggleVisualIndicator} aria-hidden></b>
                    </span>
                </>
            }
            
        </div>
    )
};

export default Toggle
