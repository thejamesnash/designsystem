import React, { useState, useEffect, useRef } from 'react';
import Icon from '../../global/Icon/Icon';
import Button from '../Button/Button';
import styles from './Metadata.module.css';
import Progress from '../Progress/Progress';

export const Metadata = (props) => {
    
    return (
        <div className={styles.metadata} data-platform={props.platform} data-showbg={props.showMetaBg}>
            { props.progressValue ? <Progress platform={props.platform} progressValue={50} progressTotal={120} /> : null }
            { props.hideTitle ? null : <h3 className={styles.metaTitle}>{props.title}</h3> }
            { props.editorialLabel ? <p className={styles.metaHighlight}>{props.editorialLabel}</p> : null }
            { props.summary ? <p className={styles.metaText}>{props.summary}</p> : null }
            <ul className={styles.metaTextWrap}>
                {props.allSeriesCount && Number(props.allSeriesCount) > 1 ? <li>{props.allSeriesCount} Series</li> : null} 
                {props.categories ? <li>• {props.categories.join(' | ')}</li> : null }
            </ul>
            <ul className={styles.metaGuidance}>
                {props.hasGuidance ? <li className={styles.guidance} aria-label="Parental Guidance advised"><Icon iconRef="guidance" /></li> : null }
                {props.isSubtitled ? <li className={styles.subtitles} aria-label='Subtitles available'><Icon iconRef="subtitles" /></li> : null }
                {props.isAudioDescribed ? <li className={styles.audiodesc} aria-label='Audio Description available'><Icon iconRef="audiodesc" /></li> : null }
                {props.isSigned ? <li className={styles.bsl} aria-label='British Sign Language available'><Icon iconRef="bsl" /></li> : null }
            </ul>
            { props.addToList ? <div className={styles.metaAdd}><Button type={'icon'} secondary withIcon={'add'}/></div>: null }
        </div>
    )
};

export default Metadata
