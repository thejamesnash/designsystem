// import { useAppState } from '../../../context/AppContext';

import React from 'react';

// import { useAppState } from '../../../context/AppContext';
import styles from './Navigation.module.css';
import Icon from '../../global/Icon/Icon.jsx';

export const Navigation = (props) => {
    // const { appState, setAppState } = useAppState();
    // const { navigateToState } = useAppState();

    const navData = [
        {'title':'Home','target':'home','icon':'home'},
        {'title':'Search','target':'search','icon':'search'},
        {'title':'My Shows','target':'myshows','icon':'thumbsup'},
        {'title':'Live TV','target':'livetv','icon':'watch'},
        {'title':'Categories','target':'categories','icon':'categories'},
        {'title':'Settings','target':'settings','icon':'settings'},
    ];

    const resetData = (el,dataref) => {
        el.removeAttribute(dataref);
    };

    const resetPage = (stateRef) => {
    if (!['home', 'livetv', 'myshows'].includes(stateRef)) return;
    
    const sectionWrapper = document.querySelector(`section[data-name="${stateRef}"]`);
    if (!sectionWrapper) return;
    
    // Remove all data attributes in one pass
    sectionWrapper.querySelectorAll('button[data-navhistory], button[data-active], button[data-history]')
        .forEach(el => {
            delete el.dataset.navhistory;
            delete el.dataset.active;
            delete el.dataset.history;
        });
    
    // Set attributes on first button
    const firstBtn = sectionWrapper.querySelector('button');
    if (firstBtn) {
        Object.assign(firstBtn.dataset, {
            navhistory: true,
            active: true,
            history: true
        });
    }
};

    const handleNavFocus = (evt) => {
        const currentAppState =  document.querySelector('main[data-appstate]').dataset.appstate;
        const targetState = evt.target.value;

        console.log(currentAppState);
        console.log(targetState);
        
        if( currentAppState !== targetState ){
            navigateToState(evt.target.value);
            resetPage(currentAppState);
        }

        // if(evt.target.dataset.active !== true ){
        //     const currentAppState =  document.querySelector('main[data-appstate]').dataset.appstate;
        //     console.log('From navigation component: ',currentAppState);
            
        //     navigateToState(evt.target.value)
        //     setTimeout(()=>{
        //         resetPage(currentAppState);
        //     },100)
        // }

        
    };

    return (
        <div className={styles.Navigation} data-platform="bsd" data-animate={props.animate} data-animationtier={props.animationTier}>
            <div className={styles.navBtns}>
                {navData.map(function(navitem,i) {
                    return (
                        <button 
                            key={i}
                            data-type="navbtn" 
                            value={navitem.target} 
                            data-active={false} 
                            data-ref="primarynav" 
                            onFocus={handleNavFocus}
                            // onClick={()=>{setAppState(navitem.target)}}
                        >
                            <span className={styles.navIcon}>
                                <Icon iconRef={navitem.icon} />
                            </span>
                            <span className={styles.navText}>{navitem.title}</span>
                        </button>
                    )
                })}
            </div>
            <div className={styles.navFooter}>
                {/* <button>{localStorage.getItem('username')}</button> */}
                <p className={styles.profileSwitch}>
                    <span>Profile</span>
                    <span>Switch</span>
                </p>
            </div>
        </div>
    )
};


export default React.memo(Navigation); 
