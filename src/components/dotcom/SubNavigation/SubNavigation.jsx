import React from 'react';
import styles from './SubNavigation.module.css';

export const SubNavigation = (props) => {
    return (
        <nav className={styles.SubNavigation}>
            <ul>
                {props.navigationItems.map(function(navitem,i) {
                    return (
                        <li key={i}>
                            <a href={navitem.url} data-active={ i === 0 ? true : false }>{navitem.title}</a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
};

export default SubNavigation
