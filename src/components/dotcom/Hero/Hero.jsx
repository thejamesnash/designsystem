import React, { useState, useEffect, useRef } from 'react';
import Icon from '../../global/Icon/Icon';
import styles from './Hero.module.css';
import { returnImg } from '@/app/functions/returnImg';
import { getImgFromType } from '@/app/functions/getImgFromType';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Button from '../Button/Button';
import Metadata from '../Metadata/Metadata';

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

    const Review = () => {
        return (
            <aside className={styles.review} itemscope itemtype="https://schema.org/Review">
                <blockquote>
                    <p itemprop="reviewBody">"As awkward as one could imagine, but surprisingly sweet"</p>
                </blockquote>
                <div itemprop="reviewRating" itemscope itemtype="https://schema.org/Rating">
                    <p className="visuallyHidden">
                        <span>Rating: </span>
                        <span itemprop="ratingValue">4</span> out of 
                        <span itemprop="bestRating">5</span> stars
                    </p>
                    <meter value="4" min="0" max="5" aria-label="Rating: 4 out of 5 stars">4/5</meter>
                </div>
                <footer  itemprop="author" itemscope itemtype="https://schema.org/Person">
                    <cite itemprop="name">Tim Dowling &ndash; The Guardian</cite>
                </footer>
            </aside>
        )
    }

    const MultiHero = () => {
        return (
            <>
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
            </>
        )
    };

    const SingleHero = () => {
        
        const itemIndex = 0;
        return (
            <div className={styles.singleHero}>
                <div className={styles.singleHeroContent}>
                    <h3 className="visuallyHidden">{props.data.sliceItems[itemIndex].title}</h3>
                    <div className={styles.background} style={{backgroundImage: `url(${returnImgSize(props.data.sliceItems[itemIndex].brand.image.href,'heroBg','heroBg')})`}}></div>
                    <img className={styles.titleTreatment} src={returnImg(getImgFromType(props.data.sliceItems[itemIndex].brand.images,'TITLE_TREATMENT'),678,330)}  alt="" />
                    <div className={styles.btnWrap}>
                        <div className={styles.primaryBtn}>
                            <Button btnText={'Play'} withIcon="play" />
                        </div>
                        <div className={styles.secondaryBtns}>
                            <Button btnText={'My List'} withIcon="add" secondary />
                            <Button btnText={'Trailer'} withIcon="trailer" secondary />
                            <Button btnText={'Upgrade'} withIcon="fourplus" secondary />
                        </div>
                    </div>
                    { props.review ? <div class={styles.reviewWrap}><Review /></div> : null }
                </div>
                <div className={styles.metaWrap}>
                    <Metadata 
                        platform="dotcom" 
                        editorialLabel={props.data.sliceItems[itemIndex].editorialLabel} 
                        summary={props.data.sliceItems[itemIndex].brand.summary} 
                        hasGuidance={true}
                        isAudioDescribed={true} 
                        isSigned={true}
                        allSeriesCount={props.data.sliceItems[itemIndex].brand.allSeriesCount} 
                        categories={props.data.sliceItems[itemIndex].brand.categories} 
                    />
                </div>
                
            </div>
        )
    };

    return (
        <div className={styles.Hero} data-active={activePanel} data-animate={props.animate}>
            { props.breadcrumbs ? <div className={styles.breadcrumbWrap}><Breadcrumbs navigationItems={props.breadcrumbs} /></div> : null }
            {/* { props.externalLogo ?  } */}
            {props.pagetitle ? <h1 className={styles.heroTitle}>{props.pageTitle}</h1> : null }
            { props.multiItem ? 
                    <MultiHero />
                :  
                    <SingleHero />
            }
            
        </div>
    )
};
 export default Hero;