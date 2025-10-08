import React from 'react';
import styles from './Meta.module.css';
import Icon from '../../global/Icon/Icon.jsx'

export const Meta = (props) => {

    let hasGuidance = false;
    let hasSubtitles = false;
    let hasBSL = false;
    let hasAD = false;
    let hasSeries = false;
    let hasCategories = false;
    let hasDateLabel = false;
    let hasdurationLabel = false;
    let seriesString = '';
    let categoriesString = '';
    let dateLabelString = '';
    let durationLabelString = '';
    
    if( props.isSigned ){
        hasBSL = true
    }
    if( props.type === 'assetinfo' ){
        // console.log('From assets');
        // console.log(props.brandData);
        if( Number(props.brandData.assetInfo.streaming.ageRating) > 0 ){
            hasGuidance = true;
        }
        if( props.brandData.assetInfo.streaming.subtitled ){
            hasSubtitles = true;
        }
        if( props.brandData.assetInfo.streaming.audioDescribed ){
            hasAD = true;
        }
        if( props.brandData.dateLabel ){
            hasDateLabel = true;
            dateLabelString = props.brandData.dateLabel
        }
         if( props.brandData.assetInfo.streaming.durationLabel ){
            hasdurationLabel = true;
            durationLabelString = props.brandData.assetInfo.streaming.durationLabel
        }
        if( props.brandData.assetInfo.streaming.signed ){
            hasBSL = true;
        }
    } else if( props.type === 'brand' ){
        // console.log('From brand');
        if( props.brandData.brand.hasGuidance ) {
            hasGuidance = true;
        }
        if( props.brandData.brand.subtitledStatus === 'FULL' || props.brandData.brand.subtitledStatus === 'PARTIAL' ){
            hasSubtitles = true;
        }
        if( props.brandData.brand.audioDescribedStatus === 'FULL' || props.brandData.brand.audioDescribedStatus === 'PARTIAL' ){
            hasAD = true;
        }
        if( props.brandData.brand.signedStatus === 'FULL' || props.brandData.brand.signedStatus === 'PARTIAL' ){
            if( props.brandData.brand.title === 'Taskmaster' ){
                hasBSL = true;
            }
            hasBSL = true;
        }
        if( props.brandData.brand.categories ){
            hasCategories = true;
            categoriesString = props.brandData.brand.categories.join(' | ');
        }
        // console.log(props.brandData);
    } else if( props.type === 'slot' ){
        
        if( props.brandData.slot.signed === true ){
            hasBSL = true;
        }
        if( props.brandData.slot.rating ) {
            hasGuidance = true;
        }
        if( props.brandData.slot.subtitled  ){
            hasSubtitles = true;
        }
        if( props.brandData.slot.audioDescribed === true ){
            hasAD = true;
        }
        if( props.brandData.brand ){
            if( props.brandData.brand.categories ){
                hasCategories = true;
                categoriesString = props.brandData.brand.categories.join(' | ');
            }
        }
    } else if( props.type === 'cats' ){

        if( props.brandData.hasGuidance ) {
            hasGuidance = true;
        }
        if( props.brandData.subtitledStatus === 'FULL' || props.brandData.subtitledStatus === 'PARTIAL' ){
            hasSubtitles = true;
        }
        if( props.brandData.audioDescribedStatus === 'FULL' || props.brandData.audioDescribedStatus === 'PARTIAL' ){
            hasAD = true;
        }
        if( props.brandData.signedStatus === 'FULL' || props.brandData.signedStatus === 'PARTIAL' ){
            hasBSL = true;
        }
        if( props.brandData.categories ){
            hasCategories = true;
            categoriesString = props.brandData.categories.join(' | ');
        }
    }

    return (
            <p className={styles.Meta}>
                { hasGuidance ? <span className={styles.metaIcon} data-type="guidance"><Icon iconRef="guidance" /></span> : null }
                { hasSubtitles ? <span className={styles.metaIcon}><Icon iconRef="subtitles" /></span> : null }
                { hasAD ? <span  className={styles.metaIcon}><Icon iconRef="audiodesc" /></span> : null } 
                { hasBSL ? <span  className={styles.bslIcon}><Icon iconRef="bsl" /></span> : null }
                { hasSeries ? <span>{seriesString}</span> : null }
                { hasCategories ? <span>{categoriesString}</span> : null }
                { hasDateLabel ? <span>{dateLabelString}</span> : null }
                { hasdurationLabel ? <span>∙ {durationLabelString}</span> : null }
            </p>
        )
};

export default React.memo(Meta);