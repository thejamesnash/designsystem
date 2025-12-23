import React from 'react';
import styles from './ContentRail.module.css';
import Progress from '../Progress/Progress'
import { returnImg } from '@/app/functions/returnImg';
// import Logo from '@/components/global/Logos/Logo';
import Logo from '../Logo/Logo';
import Icon from '@/components/global/Icon/Icon';

export const ContentRail = (props) => {

    const railData = props.data;

    const returnChannelName = (channel) => {
        if( channel === 'C4' ){
            return 'Channel 4'
        } else if( channel === 'E4' ){
            return 'E4'
        } else if( channel === 'M4' ){
            return 'More 4'
        } else if( channel === 'F4' ){
            return 'Film 4'
        } else if( channel === '4S' ){
            return '4 Seven'
        } else 
        return false
    }

    const returnChannelIconRef = (channel) => {
        if( channel === 'C4' ){
            return 'four'
        } else if( channel === 'E4' ){
            return 'efour'
        } else if( channel === 'M4' ){
            return 'morefour'
        } else if( channel === 'F4' ){
            return 'filmfour'
        } else if( channel === '4S' ){
            return 'fourseven'
        } else 
        return false
    };

    const MetaIcons = (props) => {
        return (
            <ul className={styles.metaGuidance}>
                {props.hasGuidance ? <li className={styles.guidance} aria-label="Parental Guidance advised"><Icon iconRef="guidance" /></li> : null }
                {props.isSubtitled ? <li className={styles.subtitles} aria-label='Subtitles available'><Icon iconRef="subtitles" /></li> : null }
                {props.isAudioDescribed ? <li className={styles.audiodesc} aria-label='Audio Description available'><Icon iconRef="audiodesc" /></li> : null }
                {props.isSigned ? <li className={styles.bsl} aria-label='British Sign Language available'><Icon iconRef="bsl" /></li> : null }
                {props.allSeriesCount && Number(props.allSeriesCount) > 1 ? <li>{props.allSeriesCount} Series</li> : null}
                {props.categories ? <li>{props.categories.join(' | ')}</li> : null }
            </ul>
        )
    };

    const Time = ({startTime,endTime}) => {
        const startDate = new Date(startTime);
        const endDate = new Date(endTime);
        const formatOptions = {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
            timeZone: 'Europe/London'
        };
        const startFormatted = startDate.toLocaleTimeString('en-GB', formatOptions);
        const endFormatted = endDate.toLocaleTimeString('en-GB', formatOptions);
  
        return <time dateTime={`${startTime}/${endTime}`}>{`${startFormatted} - ${endFormatted}`}</time>;
    };

    const LiveTVRailItem = (props) => {
        console.log(props);
        console.log(props.index);
        const nextData = railData.slots.next[props.index];
        return (
            <article data-active={props.index === 0 ? true : false}>
                <h2 aria-hidden class="visuallyHidden">{returnChannelName(props.channel)}</h2>
                <dl>
                    <dt>On Now</dt>
                    <dd>
                        <button>
                            <img src={returnImg(props.image.href,512,288)} alt={props.title} />
                            <div className={styles.txLogo} aria-hidden>
                                <Logo logoRef={returnChannelIconRef(props.channel)} />
                            </div>
                            <Progress />

                        </button>
                        <div className={styles.railContent}>
                            <h3>{props.title}</h3>
                            <Time startTime={props.start} endTime={props.end} />
                            { props.episode ? <p>{props.episode.shortSummary}</p> : <p>{props.summary}</p> }
                            <MetaIcons {...props} />
                        </div>
                        
                    </dd>
                    <dt>On Next</dt>
                    <dd>
                        <div className={styles.railContent}>
                            <h3>{nextData.title}</h3>
                            <Time startTime={nextData.start} endTime={nextData.end} />
                            <MetaIcons {...props} />
                        </div>
                    </dd>
                </dl>

                
            </article>
        )
    }

    if( props.template === 'livetv'){
        return (
            <div className={styles.livetv} data-platform="bsd">
                {props.data.slots.now.map(function(data,i) {
                    return (
                        <LiveTVRailItem {...data} index={i} />
                    )
                })}
            </div>
        )
    }
    return (
        <div className={styles.ContentRail} data-padding={props.padding} data-bg={props.bg}>
            
        </div>
    )
};

export default ContentRail
