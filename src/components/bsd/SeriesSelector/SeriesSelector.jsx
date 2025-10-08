import React from 'react';
import styles from './SeriesSelector.module.css';
import Rail from '../Rail/Rail.jsx';

export const SeriesSelector = (props) => {
    let episodeData = {sliceItems: props.episodeData,title:''};
    
    console.log(episodeData);
    const handleSelectorFocus = (evt) => {
        const targetSeries = evt.target.dataset.target;
        console.log(targetSeries);
        const targetSeriesBtn = document.querySelector(`div[data-type="hubSeries"] button[data-series="${targetSeries}"]`);
        const currentSeriesBtn = document.querySelector(`div[data-type="hubSeries"] button[data-template="seriesselector"][data-active="true"]`);
        console.log(currentSeriesBtn);
        console.log(targetSeriesBtn);
        if( targetSeriesBtn ){
            currentSeriesBtn.dataset.history = false;
            currentSeriesBtn.dataset.active = false;
            targetSeriesBtn.dataset.history = true;
            targetSeriesBtn.dataset.active = true;
        }

    }

    return (
            
        <div className={styles.SeriesSelector} data-platform="bsd" data-animate={props.animate} data-animationtier={props.animationTier}>
            {/* <SubMenu /> */}
            { props.seriesData ? 
            <div className={styles.seriesBtns}>
            {props.seriesData.map(function(data,i) {
                console.log(data);
                return (
                    <button key={i} data-type="series" data-ref="series" data-template="series" className={styles.seriesBtn} data-target={data.seriesNumber} onFocus={handleSelectorFocus}>{data.title}</button>
                )
            })}
        </div>
            : <h2 className={styles.episodeTitle}>More Episodes</h2> }
            <div className={styles.railWrapper}>
                <Rail data={episodeData} animationTier={props.animationTier} ref={'episode'} size="m" showMeta="always" platform="bsd" padding showTitle={false} template="seriesselector" animate={props.animate} signed={props.signed} />
            </div>
        </div>
    )
};

export default SeriesSelector
