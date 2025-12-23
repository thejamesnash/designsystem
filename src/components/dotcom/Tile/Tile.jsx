import React, { useState, useEffect, useRef } from 'react';
import Icon from '../../global/Icon/Icon';
import PerformantImage from '@/components/global/Img/Img';
import styles from './Tile.module.css';
import Metadata from '..//Metadata/Metadata';
import Button from '../Button/Button';
import Badge from '../Badge/Badge';

export const Tile = (props) => {

    let dwellTimeout = null;

    const handleItemMouseOver = (evt) => {
        const el = evt.currentTarget;
        const elLink = el.firstElementChild;
        const elMeta = el.lastElementChild.firstElementChild;

        const imgHeight = Number(elLink.offsetHeight);
        const metaHeight = Number(elMeta.offsetHeight);
        const totalHeight = (imgHeight + metaHeight);
        const movementAmount = (imgHeight - totalHeight ) / 2;
        //clearTimeout(dwellTimeout);
        evt.currentTarget.style.setProperty('--initialHeight', `${imgHeight}px`);
        evt.currentTarget.style.setProperty('--metaHeight', `${metaHeight}px`);
        evt.currentTarget.style.setProperty('--totalHeight', `-${movementAmount}px`);
        evt.currentTarget.style.setProperty('--movementAmount', `${movementAmount}px`);
        dwellTimeout = setTimeout(() => {
            el.dataset.active = true;
        }, 1000);
    };
    const handleItemMouseOut = (evt) => {
        clearTimeout(dwellTimeout);
       evt.currentTarget.removeAttribute('data-active');
    };
   
    return (
        <li 
          className={styles.Tile} 
          data-platform={'dotcom'} 
          data-size={props.tileSize} 
          onMouseEnter={props.expanding ? handleItemMouseOver : null} 
          onMouseLeave={props.expanding ? handleItemMouseOut : null} 
          data-active={false} 
          data-expanding={props.expanding}
        >
            <a href="#" className={styles.tileLink} aria-label={props.data.title}>
                { props.data.image ? 
                    <PerformantImage
                        type='rail' 
                        src={props.data.image.href} 
                        aspect={169} 
                        platform="dotcom"
                    />
                : null }
                
                {/* <Badge 
                    badgeText={'Badge Label'} 
                    badgeIcon={'d'} 
                    badgeIconPosition={'after'}
                    badgeBg='light'
                 /> */}
            </a>
            <div className={styles.metadata}>
                <Metadata 
                    platform="dotcom" 
                    hideTitle={props.hideTitle}
                    title={props.data.title} 
                    editorialLabel={props.showEditorialLabel? props.data.editorialLabel : null} 
                    summary={props.data.summary} 
                    hasGuidance={true}
                    isAudioDescribed={true} 
                    isSigned={true}
                    allSeriesCount={props.data.brand ? props.data.brand.allSeriesCount : null} 
                    categories={props.showCategories ? props.data.brand.categories : null} 
                    progressValue={props.progressValue}
                    progressTotal={props.progressTotal} 
                    addToList={props.addToList}
                    showMetaBg={props.showMetaBg}
                />
            </div>
        </li>
        
        
    )
};

export default Tile
