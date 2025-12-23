import React from 'react';
import styles from './Header.module.css';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import SubNavigation from '../SubNavigation/SubNavigation';
import TabMenu from '../TabMenu/TabMenu';

export const Header = (props) => {
    return (
        <header className={styles.Header}>
            { props.background ? <div className={styles.headerBackground} style={{backgroundImage: `url(${props.background})`}}></div> :  null }
            <div className={styles.headerContent}>
                { props.breadcrumbs ? <div className={styles.breadcrumbWrap}><Breadcrumbs navigationItems={props.breadcrumbs} /></div> : null }
                { props.pageTitle ? <h1 className={styles.pageTitle}>{props.pageTitle}</h1> : null }
                { props.pageDescription ? <p>{props.pageDescription}</p> : null }
                { props.navigationItems ? <TabMenu navigationItems={props.navigationItems} /> : null }
            </div>
        </header>
    )
};

export default Header
