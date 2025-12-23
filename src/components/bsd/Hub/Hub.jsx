import React, { useState, useRef, useEffect } from 'react';
import styles from './Hub.module.css';
import Rail from '../Railv1/Rail';
import Button from '../Button/Button.jsx';
import Metadata from '../Metadata/Metadata.jsx';
import SeriesSelector from '../SeriesSelector/SeriesSelector';
import { returnImg } from '../../../functions/returnImg';
import { getImgFromType } from '../../../functions/getImgFromType';
import taskmasterBSLData from '../../../../../public/data/platform/taskmaster_bsl.json';
import taskmasterData from '../../../../../public/data/platform/taskmaster.json';

export const Hub = (props) => {
    // Add early return if props.data is undefined
    if (!props.data) {
        console.warn('Hub component received undefined data');
        return <div>Loading...</div>;
    }

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
        const hubPage = document.querySelector('div[data-name="hubpage"]');
        if( hubPage.dataset.istm == 'true' && hubPage.dataset.showsigned == 'true' ){
            let historicalBtn = hubPage.querySelector('div[data-type="hubSeries"] > div + div button[data-template="seriesselector"][data-history="true"]');
            if( historicalBtn ){
                historicalBtn.focus({preventScroll: true});
            } else if( !historicalBtn ){
                hubPage.querySelector('div[data-type="hubSeries"] > div + div button[data-template="seriesselector"]').focus({preventScroll: true});
            }            
            hubPage.dataset.state = 'series';
        } else {
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

        
    } 
    allowMove = true;
};

const hubRailVerticalBehaviour = (evtEl, dir) => {
    //console.log('HUB');
    evtEl.dataset.history = true;
    const hubPage = document.querySelector('div[data-name="hubpage"]');
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
    const hubPage = document.querySelector('div[data-name="hubpage"]');
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
    const appWrapper = playerWrapRef.current;
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

    


    const [hubState, setHubState] = useState('hero');
    const [hasTrailer, setHasTrailer] = useState(false);
    const [playerData, setPlayerData] = useState(null);
    const [hubIsSigned, setHubIsSigned] = useState(false);
    const [isTaskmaster,setIsTaskmaster] = useState(false);
    const playButtonRef = useRef(null);

    
    const signedShows = ["the-inheritance-signed","the-great-british-bake-off-signed","the-couple-next-door-signed","the-virtues-signed","virgin-island-signed","signed-ip-comedy","big-boys-signed","the-change-signed","everyone-else-burns-signed","big-mood-signed","hullraisers-signed","we-are-lady-parts-signed","father-ted-signed","this-way-up-signed","biscuitland-signed","derry-girls-signed","the-inbetweeners-signed","gameface-signed","friday-night-dinner-signed","prince-andrew-the-musical-signed","taskmaster-signed","i-hate-you-signed","signed-ip-drama","beth-signed","brian-and-maggie-signed","consent","partygate","deadwater-fell-signed","dreamers-signed","queenie-signed","generation-z-signed","get-millie-black-signed","the-gathering-signed","truelove-signed","alice-jack-signed","the-light-in-the-hall-signed","i-am","somewhere-boy-signed","vardy-v-rooney-a-courtroom-drama-signed","signed-ip-watch-it-together","the-horne-section-tv-show-signed","the-honesty-box-signed","gogglebox-signed","made-in-chelsea-signed","tempting-fortune-signed","junior-taskmaster-signed","junior-bake-off-signed","made-in-bondi-signed","vicky-pattison-my-geordie-wedding-signed","will-you-marry-me-signed","beyond-chelsea-signed","the-piano-signed","great-british-bake-off-extra-slice-signed","the-underdog-josh-must-win-signed","the-unique-boutique-signed","made-in-chelsea-sydney-signed","get-crafty-signed-ip","the-great-pottery-throw-down-signed","lego-masters-australia-signed","handmade-britains-best-woodworker-signed","lego-masters-new-zealand-signed","lego-masters-signed","great-british-bake-off-festive-special-signed","signed-ip-documentaries","kill-list-hunted-by-putins-spies-signed","love-my-face-signed","gaza-doctors-under-attack","school-swap-uk-to-usa-signed","trump-revolution-100-world-changing-days","michael-sheens-secret-million-pound-giveaway","the-fourcast-signed","groomed-a-national-scandal","the-fear-clinic-face-your-phobia-signed","the-amazon-review-killer-signed","2024-the-year-from-space","the-king-the-prince-their-secret-millions","barbies-dirty-secrets-dispatches","britains-atomic-bomb-scandal","murder-case-the-digital-detectives-signed","the-jury-murder-trial-signed","sophie-morgans-fight-to-fly","the-incredibly-talented-lucy-signed","bangers-mad-for-cars-signed","rhod-gilbert-a-pain-in-the-neck-for-su2c","politics-and-power-signed-ip","trump-should-we-be-scared","the-rise-and-fall-of-boris-johnson-signed","miners-strike-battle-for-britain-signed","trump-vs-harris-the-battle-for-america","nazanin","ben-elton-the-great-railway-disaster-signed","sport-signed-ip","italia-90-when-football-changed-signed","superhero-tri","adam-hills-grow-another-foot","amputating-alice","path-to-paris","christmas-signed-ip","alternative-christmas-message","the-piano-at-christmas-signed","the-festive-pottery-throw-down-signed","the-last-leg-of-the-year","the-inheritance","the-great-british-bake-off","the-couple-next-door","the-virtues","virgin-island","signed-ip-comedy","big-boys","the-change","everyone-else-burns","big-mood","hullraisers","we-are-lady-parts","father-ted","this-way-up","biscuitland","derry-girls","the-inbetweeners","gameface","friday-night-dinner","prince-andrew-the-musical","taskmaster","i-hate-you","signed-ip-drama","beth","brian-and-maggie","consent","partygate","deadwater-fell","dreamers","queenie","generation-z","get-millie-black","the-gathering","truelove","alice-jack","the-light-in-the-hall","i-am","somewhere-boy","vardy-v-rooney-a-courtroom-drama","signed-ip-watch-it-together","the-horne-section-tv-show","the-honesty-box","gogglebox","made-in-chelsea","tempting-fortune","junior-taskmaster","junior-bake-off","made-in-bondi","vicky-pattison-my-geordie-wedding","will-you-marry-me","beyond-chelsea","the-piano","great-british-bake-off-extra-slice","the-underdog-josh-must-win","the-unique-boutique","made-in-chelsea-sydney","get-crafty-ip","the-great-pottery-throw-down","lego-masters-australia","handmade-britains-best-woodworker","lego-masters-new-zealand","lego-masters","great-british-bake-off-festive-special","signed-ip-documentaries","kill-list-hunted-by-putins-spies","love-my-face","gaza-doctors-under-attack","school-swap-uk-to-usa","trump-revolution-100-world-changing-days","michael-sheens-secret-million-pound-giveaway","the-fourcast","groomed-a-national-scandal","the-fear-clinic-face-your-phobia","the-amazon-review-killer","2024-the-year-from-space","the-king-the-prince-their-secret-millions","barbies-dirty-secrets-dispatches","britains-atomic-bomb-scandal","murder-case-the-digital-detectives","the-jury-murder-trial","sophie-morgans-fight-to-fly","the-incredibly-talented-lucy","bangers-mad-for-cars","rhod-gilbert-a-pain-in-the-neck-for-su2c","politics-and-power-ip","trump-should-we-be-scared","the-rise-and-fall-of-boris-johnson","miners-strike-battle-for-britain","trump-vs-harris-the-battle-for-america","nazanin","ben-elton-the-great-railway-disaster","sport-ip","italia-90-when-football-changed","superhero-tri","adam-hills-grow-another-foot","amputating-alice","path-to-paris","christmas-ip","alternative-christmas-message","the-piano-at-christmas","the-festive-pottery-throw-down","the-last-leg-of-the-year"];
    
    // Add safety checks for nested properties
    const brandIsSigned = props.data?.brand?.websafeTitle ? 
        signedShows.includes(props.data.brand.websafeTitle) : false;

    console.log('HUBDATA');
    console.log('IS BRAND SIGNED:', brandIsSigned);

    // Add safety checks for all the properties accessed in JSX
    const brandImage = props.data?.brand?.image?.href;
    const brandTitle = props.data?.brand?.title || 'Unknown Title';
    const brandImages = props.data?.brand?.images || [];
    const playAction = props.data?.actions?.[0]?.playNextEpisode;
    const allEpisodesCount = props.data?.brand?.allEpisodesCount || 0;
    const brandSeries = props.data?.brand?.series || [];
    const brandEpisodes = props.data?.brand?.episodes || [];
    const taskBrandSeries = taskmasterData.brand.series || [];
    const taskBrandEpisodes = taskmasterData.brand.episodes || [];
    const signedSeries = taskmasterBSLData.brand.series || [];
    const signedEpisodes = taskmasterBSLData.brand.episodes || [];
    
    const sliceGroups = props.data?.sliceGroups || [];

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
    //returnMoreSlices(sliceGroups);


    

    useEffect(() => {
        console.log(props.data);
        console.log(props.data.sliceGroups);
        if( props.data.brand.title === 'Taskmaster' ){
            console.log('IS TASKMASTER');
            setIsTaskmaster(true);
            
        }

    }, [props.data]);

    useEffect(() => {
        if (props.data && playButtonRef.current) {
            // Small delay to ensure button is fully rendered
            setTimeout(() => {
                playButtonRef.current.focus();
            }, 100);
        }
    }, [props.data, playAction]);

    return (
        <div 
          className={styles.Hub} 
          data-name={'hubpage'} 
          data-state={hubState} 
          data-platform="bsd" 
          data-animate={props.animate} 
          data-animationtier={props.animationTier} 
          data-showsigned={false} 
          data-istm={isTaskmaster} 
          data-designOverlay={true} 
          >
            <div>
                <div className={styles.hubHero}>
                    {brandImage && (
                        <div className={styles.hubBg} style={{backgroundImage: `url(${returnImg(brandImage, 1920, 1080)})`}}></div>
                    )}
                    <div className={styles.hubHeroContent}>
                        { isTaskmaster ? <p className={styles.signedHubTitle}>Signed Version</p> : null }
                        { getImgFromType(brandImages, 'TITLE_TREATMENT') ? 
                            <img className={styles.titleTreatment} src={returnImg(getImgFromType(brandImages, 'TITLE_TREATMENT'), 678, 330)} alt={props.data.title || brandTitle} data-type="hubTitle" /> 
                        : 
                            <h1>{brandTitle}</h1>
                        }
                        <div className={styles.btnWrap} data-type="hubBtns">
                            {playAction && (
                                <Button ref={'hubPlay'} animate={props.animate} btnText={playAction.title} btnSubText={playAction.secondaryTitle} withIcon="play"  type="expanding" />
                            )}
                            { hasTrailer ? <Button animate={props.animate} withIcon="trailer" expandingText={'Add'} type="expanding" ref="hubTrailer" btnText={'Play trailer'} /> : null }
                            <Button animate={props.animate} withIcon="add" expandingText={'Add'} btnText={'Add to My List'} type="expanding" ref="hubAdd" />
                            <Button animate={props.animate} withIcon="fourplus" expandingText={'Add'} btnText={'Go Ad Free'} type="expanding" ref="hubUpgrade" />
                            { brandIsSigned ? <Button animate={props.animate} withIcon="bsl" expandingText={'Signed'} btnText={'Signed'} type="expanding" ref="hubBSL" /> : null }
                        </div>
                    </div>
                </div>
                <div className={styles.hubMeta} data-type="hubMeta">
                    {props.data?.brand && (
                        <Metadata hideTitle data={props.data.brand} />
                    )}
                </div>
            </div>
            { Number(allEpisodesCount) > 1 ? 
                <div className={styles.seriesSelection} data-type="hubSeries">
                    <h2 className={styles.seriesSelectionTitle}>{brandTitle} <span className={styles.signedTitle}>- Signed</span></h2>
                    { isTaskmaster ? 
                        <>
                            <SeriesSelector seriesData={taskBrandSeries} episodeData={taskBrandEpisodes} animate={props.animate} animationTier={props.animationTier}  /> 
                            <SeriesSelector seriesData={signedSeries} episodeData={signedEpisodes} animate={props.animate} animationTier={props.animationTier}  signed />
                        </>
                     : 
                        <SeriesSelector seriesData={brandSeries} episodeData={brandEpisodes} animate={props.animate} animationTier={props.animationTier}  /> 
                    }
                    
                    
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
    )
};

export default React.memo(Hub);