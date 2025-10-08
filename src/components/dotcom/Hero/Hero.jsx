import React, { useState, useEffect, useRef } from 'react';
import Icon from '../../global/Icon/Icon';
import styles from './Hero.module.css';
import { returnImg } from '@/app/functions/returnImg';
import { getImgFromType } from '@/app/functions/getImgFromType';

export const Hero = (props) => {
    const [activePanel,setActivePanel] = useState(1);
    const handleHeroClick = (evt) => {
        console.log(evt.target);
        setActivePanel(evt.target.dataset.index);
    }
    
    const returnImgSize = (img,railType,railTemplate) => {
        let imgWidth = 304;
        let imgHeight = 171;
        if( railType === 'large' ){
            imgWidth = 512;
            imgHeight = 288;
        } else if( railType === 'portrait' ){
            imgWidth = 304;
            imgHeight = 404;
        } else if( railType === 'heroBg' ){
            imgWidth = 1672;
            imgHeight = 940;
        }
        if( railTemplate === 'gradient-featured' || railTemplate === 'seriesselector' || railTemplate === 'categoryEditorial' ){
            imgWidth = 512;
            imgHeight = 288;
        }
        const imgHref = returnImg(img,imgWidth,imgHeight);
        return imgHref;
    };

    return (
        <div className={styles.Hero} data-active={activePanel} data-animate={props.animate}>
            <h1 className={styles.heroTitle}>{props.pageTitle}</h1>
            <ul className={styles.heroContent}>
                {props.data.sliceItems.map(function(data,i) {
                    return (
                        // <li style={{backgroundImage: `url(${resizeImage(getImgFromType(data.brand.images,'PRIMARY_HERO'),'background')})`}}>
                        <li style={{backgroundImage: `url(${returnImgSize(data.brand.image.href,'heroBg','heroBg')})`}} key={i}>
                            <h3 className="visuallyHidden">{data.title}</h3>
                            <img className={styles.titleTreatment} src={returnImg(getImgFromType(data.brand.images,'TITLE_TREATMENT'),678,330)}  alt="" />
                            
                            <div className={styles.heroInfo}>
                                <h4>{data.editorialLabel}</h4>
                                <p>{data.summary}</p>
                                <div className={styles.heroMetaAndLink}>
                                    {/* <ProgrammeAttributes /> */}
                                    <a href="#" className={styles.heroCTA}>
                                        { data.brand.programmeType === 'OOS' ? 'Watch Now' : 'More info' }
                                    </a>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
            <div className={styles.heroNavigation}>
                <button className={styles.chevronLeft}><span className="visuallyHidden">Show previous</span><Icon iconRef="chevron" /></button>
                {props.data.sliceItems.map(function(data,i) {
                    return (
                        <button className={styles.heroSliceBtn} data-index={i+1} onClick={handleHeroClick} key={i}>
                            <img src={ returnImgSize(data.image.href,'hero','hero')} alt="" />
                            <p className="visuallyHidden">{data.title}</p>
                        </button>
                    )
                })}
                <button className={styles.chevronRight}>
                    <span className="visuallyHidden">Show next</span>
                    <Icon iconRef="chevron" />
                </button>
            </div>
        </div>
    )
};
 export default Hero;