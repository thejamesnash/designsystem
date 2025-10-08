import React from 'react';
import styles from './Progress.module.css';

export const Progress = (props) => {

 const integerToPercent = (a,b) => {
        let percent;
        if( a ){
            percent = (a / b) * 100;
        } else {
            percent = Math.floor(Math.random() * 100) + 1;
        }
        
        return percent;
    }

    return (
        <progress className={styles.progress} max="100" value={integerToPercent(1,2)} />
    )
};

export default Progress
