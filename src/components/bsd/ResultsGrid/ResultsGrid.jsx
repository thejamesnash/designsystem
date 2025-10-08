import React,{ useState, useEffect, useRef } from 'react';
import { returnImg } from '../../../functions/returnImg';
import Meta from '../Meta/Meta.jsx';
import styles from './ResultsGrid.module.css';

const ResultsGrid = (props) => {
    console.log(props.data);

    const returnTitle = (str) => {
        if (!/\*[^*]*\*.*?\*[^*]*\*/.test(str)) {
            return str;
        }
        return str.replace(/\*[^*]*\*(.*?)\*[^*]*\*/g, '<b>$1</b>');
    }

    return (
        
        <div className={styles.ResultsGrid} data-name="searchGrid">
            {props.data.slices[0].sliceItems.map(function(data, i) {
                return (
                    <button data-type="searchResultBtn" data-index={i} key={i}>
                        <img src={returnImg(data.image.href, 304, 171)} alt="" />
                        <div>
                            <h3 dangerouslySetInnerHTML={{__html: returnTitle(data.title)}} />
                            <p>{data.secondaryTitle}</p>
                            <Meta brandData={data.brand} type="cats" />
                        </div>
                    </button>
                )
            })} 
        </div>
        
    )
} 

    export default React.memo(ResultsGrid);