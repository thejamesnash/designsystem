import React,{useRef} from 'react';
import styles from './Rail.module.css';
import Icon from '../../global/Icon/Icon.jsx';
import Meta from '../Meta/Meta.jsx';
import Progress from '../Progress/Progress'
import { returnImg } from '@/app/functions/returnImg';
import { getImgFromType } from '@/app/functions/getImgFromType';
import Logo from '../../global/Logos/Logo';

export const Rail = (props) => {
    if (!props.data) {
        console.warn('Rail component received undefined data, skipping render');
        return null;
    }
    let numberOfSigned = 0;
    //console.log(props);

     const returnSigned = (data) => {
        // List of shows that should be considered "signed"
        //const signedShows = ["the-great-british-bake-off", "the-inheritance", "the-couple-next-door", "the-virtues","taskmaster","virgin-island","pushers","beth","the-change","big-boys","we-are-ladyparts","hull-raisers","big-mood","friday-night-dinner","derry-girls","the-inbetweeners"];

        const signedShows = ["the-inheritance-signed","the-great-british-bake-off-signed","the-couple-next-door-signed","the-virtues-signed","virgin-island-signed","signed-ip-comedy","big-boys-signed","the-change-signed","everyone-else-burns-signed","big-mood-signed","hullraisers-signed","we-are-lady-parts-signed","father-ted-signed","this-way-up-signed","biscuitland-signed","derry-girls-signed","the-inbetweeners-signed","gameface-signed","friday-night-dinner-signed","prince-andrew-the-musical-signed","taskmaster-signed","i-hate-you-signed","signed-ip-drama","beth-signed","brian-and-maggie-signed","consent","partygate","deadwater-fell-signed","dreamers-signed","queenie-signed","generation-z-signed","get-millie-black-signed","the-gathering-signed","truelove-signed","alice-jack-signed","the-light-in-the-hall-signed","i-am","somewhere-boy-signed","vardy-v-rooney-a-courtroom-drama-signed","signed-ip-watch-it-together","the-horne-section-tv-show-signed","the-honesty-box-signed","gogglebox-signed","made-in-chelsea-signed","tempting-fortune-signed","junior-taskmaster-signed","junior-bake-off-signed","made-in-bondi-signed","vicky-pattison-my-geordie-wedding-signed","will-you-marry-me-signed","beyond-chelsea-signed","the-piano-signed","great-british-bake-off-extra-slice-signed","the-underdog-josh-must-win-signed","the-unique-boutique-signed","made-in-chelsea-sydney-signed","get-crafty-signed-ip","the-great-pottery-throw-down-signed","lego-masters-australia-signed","handmade-britains-best-woodworker-signed","lego-masters-new-zealand-signed","lego-masters-signed","great-british-bake-off-festive-special-signed","signed-ip-documentaries","kill-list-hunted-by-putins-spies-signed","love-my-face-signed","gaza-doctors-under-attack","school-swap-uk-to-usa-signed","trump-revolution-100-world-changing-days","michael-sheens-secret-million-pound-giveaway","the-fourcast-signed","groomed-a-national-scandal","the-fear-clinic-face-your-phobia-signed","the-amazon-review-killer-signed","2024-the-year-from-space","the-king-the-prince-their-secret-millions","barbies-dirty-secrets-dispatches","britains-atomic-bomb-scandal","murder-case-the-digital-detectives-signed","the-jury-murder-trial-signed","sophie-morgans-fight-to-fly","the-incredibly-talented-lucy-signed","bangers-mad-for-cars-signed","rhod-gilbert-a-pain-in-the-neck-for-su2c","politics-and-power-signed-ip","trump-should-we-be-scared","the-rise-and-fall-of-boris-johnson-signed","miners-strike-battle-for-britain-signed","trump-vs-harris-the-battle-for-america","nazanin","ben-elton-the-great-railway-disaster-signed","sport-signed-ip","italia-90-when-football-changed-signed","superhero-tri","adam-hills-grow-another-foot","amputating-alice","path-to-paris","christmas-signed-ip","alternative-christmas-message","the-piano-at-christmas-signed","the-festive-pottery-throw-down-signed","the-last-leg-of-the-year","the-inheritance","the-great-british-bake-off","the-couple-next-door","the-virtues","virgin-island","signed-ip-comedy","big-boys","the-change","everyone-else-burns","big-mood","hullraisers","we-are-lady-parts","father-ted","this-way-up","biscuitland","derry-girls","the-inbetweeners","gameface","friday-night-dinner","prince-andrew-the-musical","taskmaster","i-hate-you","signed-ip-drama","beth","brian-and-maggie","consent","partygate","deadwater-fell","dreamers","queenie","generation-z","get-millie-black","the-gathering","truelove","alice-jack","the-light-in-the-hall","i-am","somewhere-boy","vardy-v-rooney-a-courtroom-drama","signed-ip-watch-it-together","the-horne-section-tv-show","the-honesty-box","gogglebox","made-in-chelsea","tempting-fortune","junior-taskmaster","junior-bake-off","made-in-bondi","vicky-pattison-my-geordie-wedding","will-you-marry-me","beyond-chelsea","the-piano","great-british-bake-off-extra-slice","the-underdog-josh-must-win","the-unique-boutique","made-in-chelsea-sydney","get-crafty-ip","the-great-pottery-throw-down","lego-masters-australia","handmade-britains-best-woodworker","lego-masters-new-zealand","lego-masters","great-british-bake-off-festive-special","signed-ip-documentaries","kill-list-hunted-by-putins-spies","love-my-face","gaza-doctors-under-attack","school-swap-uk-to-usa","trump-revolution-100-world-changing-days","michael-sheens-secret-million-pound-giveaway","the-fourcast","groomed-a-national-scandal","the-fear-clinic-face-your-phobia","the-amazon-review-killer","2024-the-year-from-space","the-king-the-prince-their-secret-millions","barbies-dirty-secrets-dispatches","britains-atomic-bomb-scandal","murder-case-the-digital-detectives","the-jury-murder-trial","sophie-morgans-fight-to-fly","the-incredibly-talented-lucy","bangers-mad-for-cars","rhod-gilbert-a-pain-in-the-neck-for-su2c","politics-and-power-ip","trump-should-we-be-scared","the-rise-and-fall-of-boris-johnson","miners-strike-battle-for-britain","trump-vs-harris-the-battle-for-america","nazanin","ben-elton-the-great-railway-disaster","sport-ip","italia-90-when-football-changed","superhero-tri","adam-hills-grow-another-foot","amputating-alice","path-to-paris","christmas-ip","alternative-christmas-message","the-piano-at-christmas","the-festive-pottery-throw-down","the-last-leg-of-the-year"];
        
        // Check if the data has a 'brand' property
        if (data.hasOwnProperty('brand')) {
            const brand = data.brand;

            // Check if the brand has a signedStatus of 'FULL' or 'PARTIAL'
            if (brand.hasOwnProperty('signedStatus') && (brand.signedStatus === 'FULL' || brand.signedStatus === 'PARTIAL')) {
                return true;
            }

            // Check if the brand's websafeTitle is in our custom list
            if (signedShows.includes(brand.websafeTitle)) {
                //console.log(brand.websafeTitle,'is signed');
                return true;
            }
        }
        if( props.signed ){
            return true
        }
        
        // If none of the above conditions are met, return false
        return false;
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

    const returnTemplate = (slice, override) => {
        // Add safety check
        if (!slice) {
            console.warn('returnTemplate received undefined slice');
            return 'default';
        }
        
        //console.log(slice); 
        let template = 'default';
        
        if (slice.hasOwnProperty && slice.hasOwnProperty('type')) {
            if (slice.type === 'WATCH_LIVE') {
                template = 'livetv'
            } else if (slice.type === 'WATCH_NEXT') {
                template = 'livetv'
            } else if (slice.type === 'HERO') {
                template = 'hero'
            } 
        }
        
        if (slice.hasOwnProperty && slice.hasOwnProperty('collectionProperties')) {
            if (slice.collectionProperties.template === 'HERO') {
                template = 'hero'
            } else if (slice.collectionProperties.template === 'BANNER') {
                template = 'promo'
            }
        }
        
        if (override) {
            template = override
        }
        return template
    };

    const railTemplate = returnTemplate(props.data,props.template);

    const returnType = (slice) => {
        let sliceType = 'small';
        if( slice.hasOwnProperty('collectionProperties') ){
            // sliceType = slice.collectionProperties.template;
            if( slice.collectionProperties.template === 'LARGE_LEVEL' ){
                sliceType = 'large'    
            } else if( slice.collectionProperties.template === 'BOXSET' ){
                sliceType = 'portrait'    
            } else if( slice.collectionProperties.template === 'HERO' ){
                sliceType = 'small';
                returnTemplate(slice,'hero');
            } 
        }
        if( slice.type === 'MOST_POPULAR' ){
            //sliceType = slice.type;
            sliceType = 'large'
        } else if( slice.type === 'WATCH_LIVE' ){
            sliceType = 'large'
        } else if( slice.type === 'WATCH_NEXT' ){
            sliceType = 'large'
        }
        if( railTemplate === 'gradient-featured' || railTemplate === 'seriesselector' || railTemplate === 'categoryEditorial'){
            sliceType = 'large'
        }
        return sliceType;
    };

    const railType = returnType(props.data);
    
    let animationInProgress = false;

    const handleAnimationEnd = (evt) => {
        animationInProgress = false;
        ////console.log('Animation ended on:', evt.target);
    };

    const setMetaVisibility = (targetBtn) => {
        const targetMetaWrap = targetBtn.parentElement.nextElementSibling;
        const allMetas = targetMetaWrap.querySelectorAll('div[data-visible]');
        allMetas.forEach((el)=>{
            el.dataset.visible = false;
        });
        const targetMeta = targetBtn.parentElement.nextElementSibling.querySelector(`div[data-index="${targetBtn.dataset.index}"]`);
        targetMeta.dataset.visible = true;
    };

    const handleFocus = (evt,i,showMeta) => {
        evt.target.parentElement.parentElement.style = `--transformXIndex: ${i}`;
        evt.target.dataset.active = true;
        if( showMeta ){
            setMetaVisibility(evt.target);
        }
    };

    const setTitle = (title,template) => {
        if( props.titleOverride ){
            return props.titleOverride;
        }
        if( template === 'livetv' ){
            return 'LiveTV'
        }
        return title
    };

    const RailOverlay = (railData) => {
        return (
            <div className={styles.railOverlay}>
                <div className={styles.txLogo}>
                    <Logo logoRef={railData.data.slot.slotTXChannel} />
                </div>
                <div className={styles.railOverlayContent}>
                    <h3>{railData.data.title}</h3>
                    <p>{railData.data.secondaryTitle}</p>
                    <Progress />
                </div>
            </div>
        )
    }

    const FastRailOverlay = (railData, railIndex) => {

        const railTitleArray = ['Entertainment', 'Comedy','Lifestyle','Movies','Property'];

        return (
            <div className={styles.railOverlay}>
                <div className={styles.txLogo}>
                    <Logo logoRef={'C4'} colour="primary" />
                    <p>{railTitleArray[Number(railData.railIndex)]}</p>
                </div>
                <div className={styles.railOverlayContent}>
                    <h3>{railData.data.title}</h3>
                    <p>{railData.data.secondaryTitle}</p>
                    <Progress />
                </div>
            </div>
        )
    }

    const returnSummary = (railData,railTemplate) => {
        // if( railTemplate === 'seriesselector' ){
        //     return railData.shortSummary
        // } else if(  railTemplate === 'gradient-featured' ){
        //     return railData.brand.shortSummary
        // }
        // console.log(railTemplate);
        if( railTemplate === 'livetv' || railTemplate === 'categoryEditorial' || railTemplate === 'categoryEditorialSmall' || railTemplate === 'seriesselector' || railTemplate === 'fast' ){
            // console.log(railData);
            if(railData.brand){
                return railData.brand.shortSummary;
            } else if( railData.shortSummary ){
                return railData.shortSummary;
            }
            //return railData.shortSummary
        }
        // console.log(railTemplate);
        return railData.summary
    };

    const returnRailItemTitle = (railData,railTemplate) => {
        if( railTemplate === 'livetv' || railTemplate === 'fast' ){
            return false
        }
        return railData.title
    };


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

    const formatCats = (catStr) => {
        return catStr.toLowerCase().replace(/ /g, '-');
    }; 

    const CatIcon = (data) => {

        if( data.data.title === 'Signed' ){
            return (
                <p className={styles.icon}><Icon iconRef={'bsl'} /></p>
            )
        } else if( data.data.title === 'Audio Described' ){
            return (
                <p className={styles.icon}><Icon iconRef={'audiodesc'} /></p>
            )
        }
        return (
            <p className={styles.emoji}>{returnEmoji(data.data.title)}</p>
        )
    };

    const ReturnMeta = (metaProps) => {
        if( railTemplate === 'livetv' || railTemplate === 'fast'){
            return (
                <Meta brandData={metaProps.data} fromTemplate={railTemplate} isSigned={metaProps.signedStatus} type="slot" />
            )
        } else if( railTemplate === 'default' && metaProps.data.brand ){
            return (
                <Meta brandData={metaProps.data} fromTemplate={railTemplate} isSigned={metaProps.signedStatus} type="brand" />
            )
        } else if( railTemplate === 'categoryEditorial' || railTemplate === 'categoryEditorialSmall' || railTemplate === 'gradient-featured' && metaProps.data.brand ){
            return (
                <Meta brandData={metaProps.data} fromTemplate={railTemplate} isSigned={metaProps.signedStatus} type="brand" />
            )
        } else if( railTemplate === 'seriesselector' && metaProps.data.assetInfo ){
            return (
                <Meta brandData={metaProps.data} fromTemplate={railTemplate} isSigned={metaProps.signedStatus} type="assetinfo" />
            )
        }
        // { data.brand ? <>brand <Meta brandData={data} fromTemplate={railTemplate} isSigned={signedStatus} type="brand" /></> : null }
        // { data.episode ? <>episode <Meta brandData={data} fromTemplate={railTemplate} isSigned={signedStatus} type="episode" /></> : null }
        // { data.assetInfo  ? <>assetinfo <Meta brandData={data} fromTemplate={railTemplate} isSigned={signedStatus} type="assetinfo" /></> : null }
        // { data.slot  ? <>slot <Meta brandData={data} fromTemplate={railTemplate} isSigned={signedStatus} type="slot" /> </>: null }
        
        return (
            <p>{railTemplate}</p>
        )
    };

    if( railTemplate === 'hero' ){
        return (
            <div aria-label="Featured shows"  className={styles.rail} data-type={railType} data-template={railTemplate} data-animate={props.animate} data-animationtier={props.animationTier} data-parent={props.parent} data-platform="bsd">
                <div className={styles.heroContents}>
                    {props.data.sliceItems.map(function(data,i) {
                        return (
                            <div key={i}>
                                <div className={styles.heroContentBg} 
                                // style={{backgroundImage: `url(${returnImg(data.brand.image.href,1672,940)})`}}
                                style={{backgroundImage: `url(${returnImgSize(data.brand.image.href,'heroBg','heroBg')})`}}
                                ></div>
                                <div className={styles.heroContentMeta}>
                                    {/* <img src={returnImg(getImgFromType(data.brand.images,'TITLE_TREATMENT'),678,330)} alt={data.title} /> */}
                                    <img src={returnImg(getImgFromType(data.brand.images,'TITLE_TREATMENT'),678,330)} alt={data.title} /> 
                                    { data.editorialLabel ? <p className={styles.highlight}>{data.editorialLabel}</p> : null }
                                    <p>{data.summary}</p>
                                </div>
                            </div>
                            
                        )
                    })}
                </div>
                <div className={`${styles.railCTA} ${styles.heroRail}`} data-railindex={props.index}>
                    {props.data.sliceItems.map(function(data,i) {
                        const signedStatus = returnSigned(data);
                        return (
                            <button data-type="railBtn" 
                              data-template={railTemplate}
                              data-index={i} 
                              key={i} 
                              data-target={ data.brand ? data.brand.websafeTitle : null } 
                              onFocus={(evt)=>handleFocus(evt,i)} 
                            >
                                <img src={returnImgSize(data.image.href,railType,railTemplate)} alt={data.title} />
                                {/* { signedStatus === true ? <p className={styles.bslFlag}><Icon iconRef="bsl" /></p> : null } */}
                            </button>
                        )
                    })}
                </div>
            </div>
        )
    } else if( railTemplate === 'catTrigger' ){
        return (
            <div className={styles.rail} data-type={railType} data-template={railTemplate} data-animate={props.animate} data-animationtier={props.animationTier} data-parent={props.parent}>
                { props.hideTitle === true ? null : <h2>{setTitle(props.data.title)}</h2> }
                <div className={styles.railCTA} data-railindex={props.index}>
                    {props.data.sliceItems.map(function(data,i) {
                        return (
                            <button 
                              data-type="railBtn" 
                              data-template={railTemplate}
                              data-index={i} 
                              key={i} 
                              onFocus={(evt)=>handleFocus(evt,i,false)} 
                              data-category={data.url} 
                              className={styles.iconBtn} 
                            >
                                <CatIcon data={data} />
                                <p>{data.title}</p>
                            </button>
                        )
                    })} 
                </div>
            </div>
        )
    } else if( railTemplate === 'promo' ){
        return (
            <div 
                className={styles.rail} 
                data-animate={props.animate} 
                data-index={props.index} 
                data-type="slice" 
                data-platform='bsd'  
                data-template={railTemplate}
                data-active={false} data-element="slicewrapper"
            >
                <div className={styles.promoBannerContent}>
                        <span className={styles.plusIcon}>
                            <Icon iconRef="add" colour="primary" />
                        </span>
                        <h2 className={styles.sliceTitle}>Join us in the sunny Maldives</h2>
                        <p className={styles.promoText}>The Chelsea set swap SW3 for a summer of love and lashings of drama in the sunny Maldives</p>        
                        <button 
                            key={0} 
                            className={styles.sliceItem} 
                            data-index={0} 
                            data-active={false} 
                            data-type="railBtn" 
                            data-target="plus" 
                            data-template={'promo'}>Watch Now</button>
                        <button 
                            key={1} 
                            className={styles.sliceItem} 
                            data-index={1} 
                            data-active={false} 
                            data-type="railBtn" 
                            data-target="plus" 
                            data-template={'promo'}>Add To My List</button>                        
                    </div>
                <img src="https://ic.c4assets.com/bips/collections/696A0E40-E760-477b-ba53-111ae8b4e38e.jpg?resize=768:432" alt="" />
            </div>
        )
    } else if( railTemplate === 'livetv' ){
        console.log(props.nextData);
        let nextData = props.nextData;
        return (
            <div className={styles.rail} data-type={railType} data-template={railTemplate} data-animate={props.animate} data-animationtier={props.animationTier} data-parent={props.parent} data-index={props.index}>
                { props.hideTitle === true ? null : 
                    <h2>{setTitle(props.data.title,railTemplate,props.hasTitleEMoji)}</h2>
                }
                <div className={styles.railCTA} data-railindex={props.index}>
                    {props.data.sliceItems.map(function(data,i) {
                        //const signedStatus = returnSigned(data);
                        
                        return (
                            <button 
                              data-type="railBtn" 
                              data-template={railTemplate}
                              data-index={i} 
                              key={i} 
                              onFocus={(evt)=>handleFocus(evt,i,true)} 
                              data-target={ data.brand ? data.brand.websafeTitle : null } 
                              data-episode={ data.programmeId ? data.programmeId : null }
                            >
                                <img src={returnImgSize(data.image.href,railType,railTemplate)} alt={data.title} />
                                <RailOverlay data={data} />
                            </button>
                        )
                    })} 
                </div>
                <div className={styles.railMetaWrap}>
                    {props.data.sliceItems.map(function(data,i) {
                        const signedStatus = returnSigned(data);
                        console.log(nextData);
                        return (
                            
                            <div className={styles.railMeta} data-index={i} data-visible={false} data-type="nowNext" 
                            // key={Math.floor(Math.random() * 1000) + 1}
                            key={i}
                            >
                                    <div className={styles.nowMetaWrap}>
                                        <p className={styles.onNow}>On Now <span className={styles.emoji}>t</span></p>
                                        { data.episode && data.episode.title ? <h3>{data.episode.title}</h3> : null }
                                        <p>{returnSummary(data, railTemplate)}</p>
                                        <ReturnMeta data={data} signedStatus={signedStatus} />
                                    </div>
                                    <div className={styles.nextMetaWrap}>
                                        <p className={styles.onNow}>On Next <span className={styles.emoji}>k</span></p>
                                        {/* <h3>{props.nextData.sliceItems[1].title}</h3> */}
                                        { data.episode && data.episode.title ? <p>{data.episode.title}</p> : null }
                                        
                                        <ReturnMeta data={data} signedStatus={signedStatus} />
                                    </div>
                                </div>
                        )
                    })} 
                </div>
            </div>
        )
    } else if( railTemplate === 'fast'  ){
        return (
            <div className={styles.rail} data-type={railType} data-template={railTemplate} data-animate={props.animate} data-animationtier={props.animationTier} data-parent={props.parent} data-index={props.index}>
                { props.hideTitle === true ? null : 
                    <h2>{setTitle(props.data.title,railTemplate,props.hasTitleEMoji)}</h2>
                }
                <div className={styles.railCTA} data-railindex={props.index}>
                    {props.data.sliceItems.map(function(data,i) {
                        return (
                            <button 
                              data-type="railBtn" 
                              data-template={railTemplate}
                              data-index={i} 
                              key={i} 
                              onFocus={(evt)=>handleFocus(evt,i,true)} 
                              data-target={ data.brand ? data.brand.websafeTitle : null } 
                              data-episode={ data.programmeId ? data.programmeId : null }
                            >
                                <img src={returnImgSize(data.image.href,railType,railTemplate)} alt={data.title} />
                                <FastRailOverlay data={data} railIndex={i} />
                            </button>
                        )
                    })} 
                </div>
                <div className={styles.railMetaWrap}>
                    {props.data.sliceItems.map(function(data,i) {
                        const signedStatus = returnSigned(data);
                        return (
                            
                                <div className={styles.railMeta} data-index={i} key={i} data-visible={false} data-type="nowNext">
                                    <div className={styles.nowMetaWrap}>
                                        <p className={styles.onNow}>On Now <span className={styles.emoji}>t</span></p>
                                        { data.episode && data.episode.title ? <h3>{data.episode.title}</h3> : null }
                                        <p>{returnSummary(data, railTemplate)}</p>
                                        <ReturnMeta data={data} signedStatus={signedStatus} />
                                    </div>
                                    <div className={styles.nextMetaWrap}>
                                        <p className={styles.onNow}>On Next <span className={styles.emoji}>k</span></p>
                                        <h3>{data.title}</h3>
                                        { data.episode && data.episode.title ? <p>{data.episode.title}</p> : null }
                                        
                                        <ReturnMeta data={data} signedStatus={signedStatus} />
                                    </div>
                                </div>
                            
                        )
                    })} 
                </div>
            </div>
        )
    }

    return (
            <div className={styles.rail} data-type={railType} data-template={railTemplate} data-animate={props.animate} data-animationtier={props.animationTier} data-parent={props.parent} data-index={props.index}>
                { props.hideTitle === true ? null : 
                    <h2>{setTitle(props.data.title,railTemplate,props.hasTitleEMoji)}</h2>
                }
                <div className={styles.railCTA} data-railindex={props.index}>
                    {props.data.sliceItems.map(function(data,i) {
                        const signedStatus = returnSigned(data);
                        return (
                            <button 
                              data-type="railBtn" 
                              data-template={railTemplate}
                              data-index={i} 
                              key={i} 
                              onFocus={(evt)=>handleFocus(evt,i,true)} 
                              data-target={ data.brand ? data.brand.websafeTitle : null } 
                              data-episode={ data.programmeId ? data.programmeId : null } 
                              data-series={ data.seriesNumber? data.seriesNumber: null } 
                              data-collection={ data.ip ? data.ip.websafeTitle: null } 
                              data-signed={signedStatus} 
                              data-issigned={props.signed}
                            >
                                <img src={returnImgSize(data.image.href,railType,railTemplate)} alt={data.title} />
                            </button>
                        )
                    })} 
                </div>
                <div className={styles.railMetaWrap}>
                    {props.data.sliceItems.map(function(data,i) {
                        const signedStatus = returnSigned(data);
                        return (
                            <div className={styles.railMeta} data-index={i} data-visible={false} key={i} data-signed={signedStatus}>
                                <h3>{returnRailItemTitle(data,railTemplate)}</h3>
                                <p>{returnSummary(data, railTemplate)}</p>
                                <ReturnMeta data={data} signedStatus={signedStatus} />
                            </div>
                        )
                    })} 
                </div>
            </div>
        )
}


export default React.memo(Rail);