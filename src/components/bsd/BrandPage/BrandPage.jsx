import React, { useState, useRef, useEffect, useCallback } from 'react';
import styles from './BrandPage.module.css';
import { returnImg } from '@/app/functions/returnImg';
import { getImgFromType } from '@/app/functions/getImgFromType';
import Button from '../Button/Button';
import Metadata from '../Metadata/Metadata';
import AnimatedLogo from '../AnimatedLogo/AnimatedLogo';
import PageTitle from '../PageTitle/PageTitle';
import SeriesSelector from '../SeriesSelector/SeriesSelector';
import Rail from '../Railv1/Rail';


export const BrandPage = (props) => {
    const brandImage = props.data?.brand?.image?.href;
    const brandImages = props.data?.brand?.images || [];
    const brandTitle = props.data?.brand?.title || 'Unknown Title';
    const playAction = props.data?.actions?.[0]?.playNextEpisode || 'Play';
    const allEpisodesCount = props.data?.brand?.allEpisodesCount || 0;
    const sliceGroups = props.data?.sliceGroups || [];
    const brandSeries = props.data?.brand?.series || [];
    const brandEpisodes = props.data?.brand?.episodes || [];
    const hubWrapRef = useRef(null);
    let allowMove = true;
    const returnMoreSlices = (data) => {
        console.log(data);
        let moreData;
        data.forEach((obj)=>{
            if( obj.type === 'FOOTER' ){
                moreData = obj.slices[0]
            }
        });
        console.log(moreData);
        return moreData;
    };

const railBtnBehaviour = (el, dir, appWrapper) => {
    let targetBtn;
    let newIndex;
    if( dir === 'ArrowLeft' || dir === 'ArrowRight' ){
        if( dir === 'ArrowRight'){
            targetBtn = el.nextElementSibling;
            newIndex = Number(el.dataset.index) + 1;
        } else if( dir === 'ArrowLeft'){
            targetBtn = el.previousElementSibling;
            newIndex = Number(el.dataset.index) - 1;
        }
        if( targetBtn ){
            el.dataset.active = false;
            el.dataset.history = false;
            targetBtn.dataset.active = true;
            targetBtn.dataset.history = true;
            targetBtn.parentElement.parentElement.style = `--transformXIndex: ${newIndex}`;
            targetBtn.focus({preventScroll:true});
            allowMove = true;
        } else {
            if( Number(el.dataset.index) === 0 ){
                console.log(appWrapper.dataset.appstate);  
            }
        }
    }  else if( dir === 'ArrowUp' || dir === 'ArrowDown' ){
        
            hubRailVerticalBehaviour(el, dir, appWrapper);
        
    }
    allowMove = true;
};
        const handleHubButtonNavigation = (evtEl, dir) => {
        if( dir === 'ArrowRight'){
            if( evtEl.nextElementSibling  ){
                evtEl.nextElementSibling.focus({preventScroll:true});
            } else if( evtEl.parentElement.nextElementSibling ){
                evtEl.parentElement.nextElementSibling.focus({preventScroll:true});
            }
            
        } else if( dir === 'ArrowLeft' ){
            if( evtEl.dataset.ref === 'hubBSL' ){
                document.querySelector('button[data-ref="hubUpgrade"]').focus({preventScroll: true});
            } else {
               if( evtEl.previousElementSibling  ){
                evtEl.previousElementSibling.focus({preventScroll:true});
               } 
            }
            
        } else if( dir === 'ArrowDown' ){
            const hubPage = document.querySelector('section[data-name="hubpage"]');
            
                if(hubPage.querySelector('button[data-template="seriesselector"]')){
                    let historicalBtn = hubPage.querySelector('button[data-template="seriesselector"][data-history="true"]');
                    if( historicalBtn ){
                        historicalBtn.focus({preventScroll: true});
                    } else if( !historicalBtn ){
                        hubPage.querySelector('button[data-template="seriesselector"]').focus({preventScroll: true});
                    }            
                    hubPage.dataset.state = 'series';
                }  else {
                    if( hubPage.querySelector('button[data-template="gradient-featured"][data-history="true"]') ){
                        hubPage.querySelector('button[data-template="gradient-featured"][data-history="true"]').focus({preventScroll: true});    
                    } else {
                        hubPage.querySelector('button[data-template="gradient-featured"]').focus({preventScroll: true});    
                    }
                    hubPage.dataset.state = 'more';
                }
            
    
            
        } 
        allowMove = true;
    };
    
    const hubRailVerticalBehaviour = (evtEl, dir) => {
        //console.log('HUB');
        evtEl.dataset.history = true;
        const hubPage = document.querySelector('section[data-name="hubpage"]');
        if( evtEl.dataset.template === 'gradient-featured' ){
            if( hubPage.dataset.showsigned == 'true' && hubPage.dataset.istm == 'true' ){
                let historicalBtn = hubPage.querySelector('div[data-type="hubSeries"] > div + div button[data-template="seriesselector"][data-history="true"]');
                if( historicalBtn ){
                    historicalBtn.focus({preventScroll: true});
                } else if( !historicalBtn ){
                    hubPage.querySelector('div[data-type="hubSeries"] > div + div button[data-template="seriesselector"]').focus({preventScroll: true});
                }            
                hubPage.dataset.state = 'series';
            } else {
                if( dir === 'ArrowUp'){    
                    if(hubPage.querySelector('button[data-template="seriesselector"]')){
                        hubPage.querySelector('button[data-template="seriesselector"][data-history="true"]').focus({preventScroll: true});
                        hubPage.dataset.state = 'series';
                    } else {
                        hubPage.querySelector('button[data-ref="hubPlay"]').focus({preventScroll: true});
                        hubPage.dataset.state = 'hero';
                    }
                }
            }
            
    
    
        } else {
            if( dir === 'ArrowUp'){
                if( hubPage.dataset.istm == 'true' && hubPage.dataset.showsigned == 'true'){
                    console.log('IS TASKMASTER');
                    let closestSeriesBtnParent = evtEl.parentElement.parentElement.parentElement.previousElementSibling;
                    console.log(closestSeriesBtnParent);
                    let hasHistory = closestSeriesBtnParent.querySelector(`button[data-ref="series"][data-target="${evtEl.dataset.series}"]`);
                    if( hasHistory ){
                        hasHistory.focus({preventScroll: true});
                        console.log(hasHistory.offsetLeft);
                        let offsetAmount = Number(hasHistory.offsetLeft) - 192;
                        hasHistory.parentElement.style.transform = `translate3d(-${offsetAmount}rem,0,0)`;
                    } else {
                        console.log(evtEl.parentElement.parentElement.previousElementSibling.querySelector('button[data-ref="series"]'));
                        closestSeriesBtnParent.querySelector('button[data-ref="series"]').focus({preventScroll: true});
                    }
                    hubPage.dataset.state = 'series';
                } else {
                    if(hubPage.querySelector('button[data-ref="series"]')){
                        let closestSeriesBtnParent = evtEl.parentElement.parentElement.parentElement.previousElementSibling;
                        console.log(closestSeriesBtnParent);
                        let hasHistory = closestSeriesBtnParent.querySelector(`button[data-ref="series"][data-target="${evtEl.dataset.series}"]`);
                        if( hasHistory ){
                            hasHistory.focus({preventScroll: true});
                            console.log(hasHistory.offsetLeft);
                            let offsetAmount = Number(hasHistory.offsetLeft) - 192;
                            hasHistory.parentElement.style.transform = `translate3d(-${offsetAmount}rem,0,0)`;
                        } else {
                            console.log(evtEl.parentElement.parentElement.previousElementSibling.querySelector('button[data-ref="series"]'));
                            closestSeriesBtnParent.querySelector('button[data-ref="series"]').focus({preventScroll: true});
                        }
                        hubPage.dataset.state = 'series';
                    } else {
                        hubPage.querySelector('button[data-ref="hubPlay"]').focus({preventScroll: true});
                        hubPage.dataset.state = 'hero';
                    }  
                }
                         
            } else if( dir === "ArrowDown" ){
                let hubMoreHistory = hubPage.querySelector('button[data-template="gradient-featured"][data-history="true"]');
                if( hubMoreHistory ){
                    hubMoreHistory.focus({preventScroll: true});
                } else if( !hubMoreHistory ){
                    hubPage.querySelector('button[data-template="gradient-featured"]').focus({preventScroll: true});
                }
                hubPage.dataset.state = 'more';
            }
        }
        allowMove = true;
    };
    
    const handleSeriesButtonNavigation = (el,dir) => {
        const hubPage = document.querySelector('section[data-name="hubpage"]');
        if( el.dataset.template === 'series' ) {
            if( dir === 'ArrowUp' ){
                hubPage.querySelector('button[data-ref="hubPlay"]').focus({preventScroll: true});
                hubPage.dataset.state = 'hero';
            } else if( dir === 'ArrowDown' ){
                el.parentElement.nextElementSibling.querySelector('button[data-template="seriesselector"][data-history="true"]').focus({preventScroll: true});
                hubPage.dataset.state = 'series';
            } else if( dir === 'ArrowLeft' || dir === 'ArrowRight' ){
                let targetEl;
                let seriesIndex;
                if( dir === 'ArrowRight' ){
                    targetEl = el.nextElementSibling;
                } else if( dir === 'ArrowLeft' ){
                    targetEl = el.previousElementSibling;
                }
                if( targetEl ){
                    seriesIndex = targetEl.dataset.target;
                    let targetIndex;
                    console.log(targetIndex);
                    // targetEl.parentElement.parentElement.style = `--transformXIndex: ${targetIndex}`;
                    el.dataset.history = false;
                    el.dataset.active = false;
                    targetEl.focus({preventScroll:true});
                    targetEl.dataset.history = true;
                    targetEl.dataset.active = true;
                    let offsetAmount = Number(targetEl.offsetLeft) - 192;
                    targetEl.parentElement.style.transform = `translate3d(-${offsetAmount}rem,0,0)`;
                    let targetChild = el.parentElement.nextElementSibling.querySelector(`button[data-template="seriesselector"][data-series="${seriesIndex}"]`);
                    console.log(targetChild);
                    if( targetChild ){
                        targetIndex = targetChild.dataset.index;
                        targetChild.parentElement.parentElement.style = `--transformXIndex: ${targetIndex}`;
                    }
                }
            }
        }
        allowMove = true;
    };
    
    const handleSeriesSelector = (el, dir) => {
        console.log(el);
        if( dir === 'ArrowRight' ){
            
            if( el.nextElementSibling ){
                el.nextElementSibling.focus({preventScroll: true});
            }
        }
    };
    
    
    
    const keyDownHandler = (evt) => {
        console.log(evt);
        const el = evt.target;
        const dir = evt.key;
        const elType = el.dataset.type;
        const appWrapper = hubWrapRef.current;
        if( dir === 'ArrowUp' || dir === 'ArrowDown' || dir === 'ArrowLeft' ||dir === 'ArrowRight' ){
                    switch(elType) {
                        case 'navbtn':
                            navBtnBehaviour(el, dir, appWrapper);
                            break;
                        case 'railBtn':
                            railBtnBehaviour(el, dir, appWrapper);
                            break;
                        case 'catFilterPanelBtn':
                            catPageBehaviour(dir);
                            break;
                        case 'expanding':
                            handleHubButtonNavigation(el, dir);
                            break;
                        case 'series':
                            handleSeriesButtonNavigation(el, dir);
                            break;
                        case 'catFilter':
                            catFilterBehaviour(el, dir);
                            break;
                        case 'railResultBtn':
                            handleRailResultBtn(el, dir);
                            break;
                        case 'searchKey':
                            handleSearchKeyboard(el, dir, appWrapper);
                            break;
                        case 'progress':
                            handlePlayerProgress(el, dir, appWrapper);
                            break;
                        case 'playerHeader':
                            handlePlayerHeaderBtn(el, dir, appWrapper);
                            break;
                        case 'icon':
                            handlePlayerIconBtn(el, dir, appWrapper);
                            break;
                        case 'settingsInput':
                            handleSettingsInput(el, dir, appWrapper);
                            break;
                        case 'countdown':
                            handlePlayerAsideBtn(el, dir, appWrapper);
                            break;
                        case 'playerAsideBtn':
                            handlePlayerAsideBtn(el, dir, appWrapper);
                            break;
                        case 'body':
                            handleLostFocus(el, dir, appWrapper);
                            break;
                        
                        default:
                            handleLostFocus(el, appWrapper);
                            break;
                    }
                }
      }
    
      const handleKeyUp = useCallback((event) => {
            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();
        }, []);
    
        const handleKeyDown = useCallback((event) => {
            event.preventDefault();
            event.stopPropagation();
            keyDownHandler(event);
        }, [keyDownHandler]); 
    
        useEffect(() => {
            document.addEventListener('keydown', handleKeyDown, { capture: true });
            document.addEventListener('keyup', handleKeyUp, { capture: true });
            return () => {
                document.removeEventListener('keydown', handleKeyDown, { capture: true });
                document.removeEventListener('keyup', handleKeyUp, { capture: true });
            };
        }, [handleKeyDown, handleKeyUp]);

    return (
        <section
         data-state={props.hubState} 
         className={styles.BrandPage} 
         data-platform="bsd" 
         data-animate={props.animate} 
         data-animationtier={props.animationTier} 
         data-name="hubpage"
         ref={hubWrapRef} 
         data-designOverlay="1"
        >
            { props.showLogo ? <div className={styles.logoWrapper}><AnimatedLogo logoState={1} /></div> : null }
            <div>
                <div className={styles.hubHero}>
                    <div className={styles.hubBg} style={{backgroundImage: `url(${returnImg(brandImage, 1920, 1080)})`}}></div>
                    { getImgFromType(brandImages, 'TITLE_TREATMENT') ? 
                        <img className={styles.titleTreatment} src={returnImg(getImgFromType(brandImages, 'TITLE_TREATMENT'), 678, 330)} alt={props.data.title || brandTitle} data-type="hubTitle" /> 
                        : 
                        <h1>{brandTitle}</h1>
                    }
                    { props.pageTitle ? <div className={styles.pageTitle}><PageTitle titleText={props.pageTitle} hasEmoji={props.hasEmoji} platform={props.platform} subTitle={props.subTitle} withTextShadow={true} /></div> : null } 
                    <div className={styles.btnWrap} data-type="hubBtns">
                        <Button ref={'hubPlay'} animate={props.animate} btnText={playAction.title} btnSubText={playAction.secondaryTitle} withIcon="play"  type="expanding" />
                        { props.hasTrailer ? <Button animate={props.animate} withIcon="trailer" expandingText={'Add'} type="expanding" ref="hubTrailer" btnText={'Play trailer'} /> : null }
                        <Button animate={props.animate} withIcon="add" expandingText={'Add'} btnText={'Add to My List'} type="expanding" ref="hubAdd" />
                        <Button animate={props.animate} withIcon="fourplus" expandingText={'Add'} btnText={'Go Ad Free'} type="expanding" ref="hubUpgrade" />
                        { props.brandIsSigned ? <Button animate={props.animate} withIcon="bsl" expandingText={'Signed'} btnText={'Signed'} type="expanding" ref="hubBSL" /> : null }
                    </div>
                </div>
                <div className={styles.hubMeta} data-type="hubMeta">
                    <Metadata 
                        hideTitle={false} 
                        animate={props.animate} 
                        animationTier={props.animationTier} 
                        platform='bsd' 
                        editorialLabel={props.data.brand.editorialLabel} 
                        summary={props.data.brand.shortSummary} 
                        hasGuidance={true} 
                        isAudioDescribed={true} 
                        isSubtitled={true} 
                        isSigned={false} 
                        allSeriesCount={props.data.brand.allSeriesCount} 
                        categories={props.data.brand.categories}
                     />
                </div>
                { Number(allEpisodesCount) > 1 ? 
                    <div className={styles.seriesSelection} data-type="hubSeries">
                        <h2 className={styles.seriesSelectionTitle}>{brandTitle} <span className={styles.signedTitle}>- Signed</span></h2>
                        <SeriesSelector seriesData={brandSeries} episodeData={brandEpisodes} animate={props.animate} animationTier={props.animationTier}  />
                    </div>
                : null } 
            
                <div className={styles.moreLikeThis}>
                    {sliceGroups.length > 0 && (
                        <Rail 
                            key={0} 
                            data={returnMoreSlices(sliceGroups)} 
                            animate={props.animate} 
                            animationTier={props.animationTier} 
                            index={0} 
                            platform='bsd' 
                            parent={'hub'} 
                            hasGradient={true} 
                            template="gradient-featured" 
                            titleEmoji={'a'} 
                            size="l" 
                            showMeta="always" 
                            padding 
                        />
                    )}
                </div>
            </div>
        </section>
    )
}

export default React.memo(BrandPage);