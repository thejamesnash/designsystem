import React from 'react';
import styles from './Rail.module.css';
import RailItem from '../RailItem/RailItem';

export const Rail = (props) => {
    console.log(props.data);
    return (
        <section className={styles.Rail} data-bg={props.background} data-animate={props.animate} data-nopadding={props.noPadding} data-titlescale={props.titleScale}>
            <div className={styles.railTitleWrap}>
                <h2 className={styles.railTitle}>
                    { props.overrideTitle ? `${props.overrideTitle}` : `${props.data.title}` }
                    { props.railEmoji ? <span className={styles.railEmoji}>{props.railEmoji}</span> : null }
                </h2>
                { props.railSubtitle ? <p className={styles.railSubtitle}>{props.railSubtitle}</p> : null }
            </div>
            <ul className={styles.railList}>
                {props.data.sliceItems.map(function(data,i) {
                    return(
                        <RailItem 
                            data={data} 
                            size={props.size} 
                            orientation={props.orientation} 
                            showMeta={props.showMeta} 
                            index={i} 
                            key={i} 
                            animate={props.animate} 
                            top10={props.top10} 
                            type={props.type} 
                            channelLogo={props.channelLogo}
                        />
                    )
                })}
            </ul>
        </section>
    )
};

export default Rail
