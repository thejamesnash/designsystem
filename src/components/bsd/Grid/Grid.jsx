import React from 'react';
import styles from './Grid.module.css';
import RailItem from '../RailItem/RailItem';

export const Grid = (props) => {
    return (
        <ul className={styles.Grid} data-platform="bsd">
            {props.data.slices[0].sliceItems.map(function(data,i) {
                    return(
                        <RailItem data={data} type="searchResult" />
                    )
            })}
        </ul>
    )
};

export default Grid
