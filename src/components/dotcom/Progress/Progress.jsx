import React from 'react';
import styles from './Progress.module.css';
import { integerToPercent } from '../../../app/functions/integerToPercent';
export const Progress = (props) => {
    return (
        <progress className={styles.progress} max="100" value={integerToPercent(props.progressValue, props.progressTotal)} />
    )
};

export default Progress
