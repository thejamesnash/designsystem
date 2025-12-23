import React, { useState, useEffect, useRef } from 'react';
import styles from './Rail.module.css';
import Tile from '../Tile/Tile';
import Icon from '@/components/global/Icon/Icon';
import Button from '../Button/Button';


export const Rail = (props) => {

    const railRef = useRef(null);
    const railListRef = useRef(null);

    const returnEmoji = (emojiStr) => {
        switch (emojiStr) {
            case 'Audio Described':
                return '';
            case 'Comedy':
                return 'm';
            case 'Drama':
                return 'h';
            case 'Film':
                return 'n';
            case 'World Drama':
                return 'h';
            case 'Documentaries':
                return 'g';
            case 'Entertainment':
                return 'e';
            case 'Lifestyle':
                return 'j';
            case 'Box Sets':
                return 'f';
            case 'Sport':
                return 'd';
            case 'News & Current Affairs':
                return 'k';
            default:
                return 'e';
        }
    }

    const handleRailSlide = (evt) => {
        const dir = evt.target.dataset.dir;
        const railListWidth = Number(railListRef.current.clientWidth);
        const railTitleWidth = Number(railRef.current.firstElementChild.clientWidth);
        const railItemWidth = Number(railRef.current.querySelector('li').clientWidth);
        const currentViewIndex = Number(railListRef.current.dataset.currentview);
        const gapIndex = Math.round(100/((railItemWidth / railTitleWidth)*100));
        let newViewIndex = 0;
        if( dir === 'left' && currentViewIndex > 0 ){
            newViewIndex = currentViewIndex - 1
        } else if( dir === 'right' ){
            newViewIndex = currentViewIndex + 1
        }
        const gapAmount = 4 * gapIndex + (newViewIndex * (4 * gapIndex));
        const movementAmount = (newViewIndex * railTitleWidth) + gapAmount;
        if( movementAmount < railListWidth ){
            railListRef.current.dataset.canmove = true;
            railListRef.current.dataset.currentview = newViewIndex;
            railListRef.current.style.setProperty('--railOffset', `-${movementAmount}px`);
        } else {
            railListRef.current.dataset.canmove = false;
        }
    };
    
    return (
        <div className={styles.rail} ref={railRef} data-hasbg={props.showRailBg}>
            { props.showRailTitle ? <h2 className={styles.railTitle}>{props.data.title}</h2> :  null }
            <button data-dir="left" onClick={handleRailSlide} className={styles.slideControl}>
                <Icon iconRef="chevron" />
            </button>
            <ul className={styles.railList} ref={railListRef} data-currentview={0}>
                { props.iconRail ? 
                    <>
                        { props.data.sliceItems.map(function(data,i) {
                            return (
                                <li className={styles.iconTile}>
                                    <Button btnText={data.title} type="railIcon" withEmoji={returnEmoji(data.title)} tileSize={props.tileSize}  />
                                </li>
                            )
                        })}
                    </>
                 : 
                    <>
                        { props.data.sliceItems.map(function(data,i) {
                            return (
                                <Tile 
                                    data={data} 
                                    tileSize={props.tileSize} 
                                    key={i} 
                                    expanding={props.expanding} 
                                    addToList={props.addTolist}
                                    showCategories={props.showCategories} 
                                    showEditorialLabel={props.showEditorialLabel} 
                                    showMetaBg={props.showMetaBg}
                                />
                            )
                        })}
                    </>
                }
            </ul>
            <button data-dir="right" onClick={handleRailSlide} className={styles.slideControl}>
                <Icon iconRef="chevron" />
            </button>
        </div>
    )
};

export default Rail
