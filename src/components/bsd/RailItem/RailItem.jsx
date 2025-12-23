import React from 'react';
import styles from './RailItem.module.css';
import PerformantImage from '@/components/global/Img/Img';
import Metadata from '../Metadata/Metadata';
import Icon from '@/components/global/Icon/Icon';
import Logo from '@/components/global/Logos/Logo';
import Progress from '../Progress/Progress';

export const RailItem = (props) => {

    const returnSummary = (props) => {
        let summary;
        if( props.brand ){
            // console.log('HAS BRAND');
            if( props.brand.shortSummary ){
                summary = props.brand.shortSummary;
            }
        } else {
            summary = props.summary;
        }
        return summary
    }

    const ReturnImg = () => {
        // console.log(props.data);
        if( props.data.image ){
            if( props.data.focusimage ){
                return (
                    <>
                        <PerformantImage 
                            type='rail' 
                            src={props.data.image.href} 
                            aspect={props.orientation} 
                            platform="bsd" 
                            size={props.size}
                        />
                        <PerformantImage 
                            type='rail' 
                            src={props.data.focusimage.href} 
                            aspect={props.orientation} 
                            platform="bsd" 
                            size={props.size}
                        />
                    </>
                )
            }
            return (
                <PerformantImage 
                    type='rail' 
                    src={props.data.image.href} 
                    aspect={props.orientation} 
                    platform="bsd" 
                    size={props.size}
                />
            )
        }  else if( props.data.icon ){
            return (
                <span className={styles.railItemIcon}>
                    <Icon iconRef={props.data.icon} />
                    <b>{props.data.title}</b>
                </span>
            )
        }
        return false
    };

    const SlotContent = () => {
        return (
            <div className={styles.slotContent}>
                { props.channelLogo ? <div className={styles.txLogo}><Logo logoRef={props.data.slot.slotTXChannel} /></div> : null } 
                <div className={styles.slotText}>
                    { props.type === 'slot' ? <p>{props.data.title}</p> : null }
                    { props.type === 'slot' ? <p>{props.data.secondaryTitle}</p> : null }
                    { props.progress ? <Progress /> : null }
                </div>
                
            </div>
        )
    };

    const SearchString = ({str}) => {
        const transformed = str
        .replace(/\*#\*/g, '<b>')
        .replace(/\*%\*/g, '</b>');
        return (
            <span className={styles.searchString} dangerouslySetInnerHTML={{ __html: transformed }} />
        )
    };

    return (
        <li className={styles.RailItem} data-animate={props.animate} data-size={props.size} data-orientation={props.orientation} data-platform="bsd" data-index={props.index} data-active={ props.index === 0 ? true : false } data-top10={props.top10} data-focusimg={props.data.focusimage?true:false} data-type={props.type}>
            <a href="#" aria-label={props.data.title}>
                <div className={styles.railImg}>
                    <ReturnImg />
                </div>
                { props.type === 'slot' ? <SlotContent /> : null }
            </a>
            { props.showMeta ? 
                <div className={styles.railItemMeta}>
                    <Metadata
                        title={props.data.title} 
                        editorialLabel={ props.data.editorialLabel && props.data.editorialLabel !== "" ? props.data.editorialLabel : null}
                        summary={returnSummary(props.data)} 
                        hasGuidance={props.data.brand && props.data.brand.hasGuidance ? true : false }  
                        isSubtitled={props.data.brand && props.data.brand.subtitledStatus ? true : false } 
                        isAudioDescribed={props.data.brand && props.data.brand.audioDescribedStatus ? true : false } 
                        allSeriesCount={props.data.brand && props.data.brand.allSeriesCount ? props.data.brand.allSeriesCount : false } 
                        categories={props.data.brand && props.data.brand.categories ? props.data.brand.categories : false} 
                        platform={props.platform}
                    />
                </div>
            : null }
            { props.type === 'searchResult' ? 
                <SearchString str={props.data.title} />
            : null }
            
        </li>
    )
};

export default RailItem
