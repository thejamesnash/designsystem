import React from 'react';
import styles from './TabMenu.module.css';

export const TabMenu = (props) => {
    return (
        <div className={styles.TabMenu} role="tablist" aria-label={props.menuTitle}>
            {props.navigationItems.map(function(navitem,i) {
                return (
                    <button key={i} role="tab" aria-selected={ i === 0 ? true : false } aria-controls={props.panelId} id={`tabMenuBtn-${i}`} className={styles.tabBtn} aria-label={navitem.title} tabIndex={i === 0 ? null : -1 }>
                        <span className={styles.tabTitle}>{navitem.title}</span>
                    </button>
                )
            })}
        </div>
    )
};

export default TabMenu
