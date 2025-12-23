import React,{useState, useRef, useEffect, useCallback} from 'react';
import styles from './Collections.module.css';
import Rail from '../Railv1/Rail';
import AnimatedLogo from '../AnimatedLogo/AnimatedLogo';
import PageTitle from '../PageTitle/PageTitle';

export const Collections = (props) => {
    const homePageRef = useRef();

    let allowMove = true;

    const defaultRailVerticalBehaviour = (el, dir, appWrapper) => {
    let targetBtn;
    let targetRail;
    //let newIndex;
    //console.log(el);
    let hasSibling;

    if (dir === 'ArrowDown') {
        hasSibling = el.parentElement.parentElement.nextElementSibling;
    } else if (dir === 'ArrowUp') {
        hasSibling = el.parentElement.parentElement.previousElementSibling;
    }
    if (hasSibling) {
        let hasActiveTargetBtn = hasSibling.querySelector('button[data-active="true"]');
        let hasHistoryTargetBtn = hasSibling.querySelector('button[data-history="true"]');
        console.log(hasActiveTargetBtn);
        console.log(hasHistoryTargetBtn);
        if( !hasHistoryTargetBtn && !hasActiveTargetBtn ){
            console.log('NEITHER ACTIVE NOR HISTORY');
            targetBtn = hasSibling.querySelector('button');
        }
        if( hasHistoryTargetBtn ){
            console.log('HAS HISTORY BTN');
            targetBtn = hasHistoryTargetBtn;
        } else if( !hasHistoryTargetBtn && hasActiveTargetBtn ){
            console.log('HAS ACTIVE BTN');
            targetBtn = hasActiveTargetBtn;
        }
    }
    if (targetBtn) {
        el.dataset.active = 'false';
        //el.dataset.history = 'false';
        
        targetBtn.dataset.active = 'true';
        
        if (targetBtn.dataset.type === 'railBtn') {
            //newIndex = Number(targetBtn.parentElement.dataset.railindex) + 1;
            targetBtn.focus({ preventScroll: true });
        } else {
            targetBtn.focus({ preventScroll: true });
        }
        
    } else {
        //console.log('No targetBtn');
        if( appWrapper.dataset.appstate === 'categories' ){
            //console.log('On cats');
            const catPage = document.querySelector('section[data-catstate]');
            if( catPage.dataset.catstate === 'editorialResults' && Number(el.parentElement.parentElement.dataset.index) === 0 ){
                el.dataset.history = 'false';
                document.querySelector('section[data-catstate] div[data-name="catFilterBtnWrap"] button').focus({preventScroll: true});
            }
        }
    }
    allowMove = true;
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
                    if( appWrapper.dataset.appstate === 'home' ){
                        appWrapper.dataset.navopen = true;
                        const targetNavBtn = document.querySelector(`button[data-type="navbtn"][value="${appWrapper.dataset.appstate}"]`);
                        if (targetNavBtn) {
                            targetNavBtn.focus({preventScroll: true});
                            targetNavBtn.dataset.active = true;
                        }
                        el.dataset.navhistory = true;
                        allowMove = true;
                    }      
                }
            }
        }  else if( dir === 'ArrowUp' || dir === 'ArrowDown' ){
            defaultRailVerticalBehaviour(el, dir, appWrapper);
        }
        allowMove = true;
    };


    const keyDownHandler = (evt) => {
        console.log(evt);
        const el = evt.target;
        const dir = evt.key;
        const elType = el.dataset.type;
        const appWrapper = homePageRef.current;
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
    };
    
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

    useEffect(() => {
        console.log('HomePage data changed - useEffect Triggered');
        homePageRef.current.querySelector('button').dataset.active = true;
        homePageRef.current.querySelector('button').dataset.history = true;
    }, []); 

    return (
        <section 
            className={styles.Collections} 
            ref={homePageRef} 
            data-animate={props.animate} 
            data-animationtier={props.animationTier} 
            data-platform="bsd" 
        >
            { props.showLogo ? <div className={styles.logoWrapper}><AnimatedLogo logoState={1} /></div> : null }
            { props.pageTitle ? <div className={styles.pageTitle}><PageTitle titleText={props.pageTitle} hasEmoji={props.hasEmoji} platform={props.platform} subTitle={props.subTitle} withTextShadow={true} /></div> : null } 
                   
                {props.data.sliceGroups[0].slices.map(function(data,i) {
                    return (
                        <Rail 
                            data={data} 
                            index={i} 
                            key={i} 
                            animate={props.animate} 
                            animationTier={props.animationTier} 
                            platform={'bsd'} 
                         />
                    )
                })}
        </section>
    )
};

export default React.memo(Collections); 