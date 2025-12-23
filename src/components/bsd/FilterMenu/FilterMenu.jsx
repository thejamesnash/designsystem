import React from 'react';
import styles from './FilterMenu.module.css';
import Icon from '@/components/global/Icon/Icon';

export const FilterMenu = (props) => {
    return (
        <div className={styles.FilterMenu} data-animate={props.animate} data-platform="bsd">
            <h2>Filter by</h2>
            <button>
                <Icon iconRef="audiodesc" />
                <span>Audio Described</span>
            </button>
            <button>
                <Icon iconRef="bsl" />
                <span>Signed (BSL)</span>
            </button>
            <button>
                <Icon iconRef="subtitles" />
                <span>Subtitled</span>
            </button>
        </div>
    )
};

export default FilterMenu
