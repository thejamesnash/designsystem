import React from 'react';
import styles from './List.module.css';
import Icon from '../../global/Icon/Icon.jsx';
import Meta from '../Meta/Meta.jsx';
import { returnImg } from '@/app/functions/returnImg';

export const List = (props) => {

    const railTemplate = 'list'
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
    const ReturnMeta = (metaProps) => {
        if( railTemplate === 'livetv' || railTemplate === 'fast'){
            return (
                <Meta brandData={metaProps.data} fromTemplate={railTemplate}  type="slot" />
            )
        } else if( railTemplate === 'default' && metaProps.data.brand ){
            return (
                <Meta brandData={metaProps.data} fromTemplate={railTemplate} type="brand" />
            )
        } else if( railTemplate === 'categoryEditorial' || railTemplate === 'categoryEditorialSmall' || railTemplate === 'gradient-featured' && metaProps.data.brand ){
            return (
                <Meta brandData={metaProps.data} fromTemplate={railTemplate} type="brand" />
            )
        } else if( railTemplate === 'seriesselector' && metaProps.data.assetInfo ){
            return (
                <Meta brandData={metaProps.data} fromTemplate={railTemplate} type="assetinfo" />
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
    const returnRailItemTitle = (railData,railTemplate) => {
        if( railTemplate === 'livetv' || railTemplate === 'fast' ){
            return false
        }
        return railData.title
    };
    return (
        <div className={styles.List} data-platform="bsd" data-animate={props.animate} data-animationtier={props.animationTier} data-size={props.size} >
            {props.data.sliceItems.map(function(data,i) {
                return (
                    <button 
                        data-type="listBtn" 
                        data-index={i} 
                        key={i} 
                        onFocus={(evt)=>handleFocus(evt,i,true)} 
                        data-target={ data.brand ? data.brand.websafeTitle : null } 
                        data-episode={ data.programmeId ? data.programmeId : null } 
                        data-series={ data.seriesNumber? data.seriesNumber: null } 
                        data-collection={ data.ip ? data.ip.websafeTitle: null } 
                    >
                       <img src={returnImgSize(data.image.href,'list','list')} alt={data.title} />
                       <div className={styles.railMeta} data-index={i} data-visible={false} key={i} >
                            <h2>{returnRailItemTitle(data,railTemplate)}</h2>
                            <p>{returnSummary(data, railTemplate)}</p>
                            
                            <Meta brandData={data} fromTemplate={railTemplate} type="brand" />
                        </div>
                    </button>
                )
            })}
        </div>
    )
};

export default List
