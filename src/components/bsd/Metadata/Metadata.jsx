import React from 'react';
import styles from './Metadata.module.css';
import Icon from '../../global/Icon/Icon.jsx';

export const Metadata = (props) => {
    return (
        <div className={styles.Metadata} data-platform="bsd">
            { props.hideTitle ? null : <h3 className={styles.metaTitle}>{props.title}</h3> }
            { props.editorialLabel ? <p className={styles.metaHighlight}>{props.editorialLabel}</p> : null }
            { props.summary ? <p className={styles.metaText}>{props.summary}</p> : null }
            <ul className={styles.metaGuidance}>
                {props.hasGuidance ? <li className={styles.guidance} aria-label="Parental Guidance advised"><Icon iconRef="guidance" /></li> : null }
                {props.isSubtitled ? <li className={styles.subtitles} aria-label='Subtitles available'><Icon iconRef="subtitles" /></li> : null }
                {props.isAudioDescribed ? <li className={styles.audiodesc} aria-label='Audio Description available'><Icon iconRef="audiodesc" /></li> : null }
                {props.isSigned ? <li className={styles.bsl} aria-label='British Sign Language available'><Icon iconRef="bsl" /></li> : null }
                {props.allSeriesCount && Number(props.allSeriesCount) > 1 ? <li>{props.allSeriesCount} Series</li> : null}
                {props.categories ? <li>{props.categories.join(' | ')}</li> : null }
            </ul>
        </div>
    )
};

export default Metadata
