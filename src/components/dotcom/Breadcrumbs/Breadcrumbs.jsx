import React from 'react';
import styles from './Breadcrumbs.module.css';

export const Breadcrumbs = (props) => {
    return (
        <nav className={styles.Breadcrumbs} aria-label="Breadcrumb">
            <ol>
                {props.navigationItems.map(function(navitem,i) {
                    return (
                        <li aria-current={ !navitem.url ? 'page' : null } key={i}>
                            { navitem.url ? <a href={navitem.url}>{navitem.title}</a> : <span>{navitem.title}</span> }
                        </li>
                    )
                })}
            </ol>
        </nav>
    )
};

export default Breadcrumbs
