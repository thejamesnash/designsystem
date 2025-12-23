import React from 'react';
import styles from './PopUp.module.css';
import Button from '../Button/Button';
import Icon from '@/components/global/Icon/Icon';

export const PopUp = (props) => {
    return (
        <div 
            className={styles.PopUp} 
            role="alertdialog" 
            aria-modal="true" 
            aria-labelledby="popup-title" 
            aria-describedby="popup-message" 
            aria-live="assertive" 
            aria-atomic="true" 
            data-platform='bsd'
        >
            { props.hasIcon ? <Icon iconRef={props.hasIcon} /> : null }
            <h2 id="popup-title">{props.title}</h2>
            { props.subtitle ? <p className={styles.errorSubtitle}>{props.subtitle}</p> : null }
            <p id="popup-message">{props.message}</p>
            <div className={styles.btnWrap}>
                <Button btnText={props.btnText} />
                { props.secondaryBtnText ? <Button btnText={props.secondaryBtnText} /> : null }
            </div>
            
        </div>
    )
};

export default PopUp
