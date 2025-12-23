import React,{useState, useRef, useEffect} from 'react';
import styles from './LiveTV.module.css';
import Header from '../Header/Header.jsx';
import ContentRail from '../ContentRail/ContentRail';
// import Rail from '../Rail/Rail.jsx';
//import collectionsData from '../../../../../public/data/platform/featuredCollections.json';


export const LiveTV = (props) => {

    const liveTVRef = useRef();
    // useEffect(() => {
    //     console.log('liveTVRef data changed - useEffect Triggered');
    //     liveTVRef.current.querySelector('button').dataset.active = true;
    //     liveTVRef.current.querySelector('button').dataset.history = true;
    // }, []); 

    // let watchNowSlice;
    // let watchNextSlice;
    // let fastChannelsSlice = collectionsData;
    // // console.log(fastChannelsSlice);
    // props.data.sliceGroups[0].slices.map((sliceData,i) => {
    //     //console.log(sliceData);
    //     if( sliceData.type === 'WATCH_LIVE' ){
    //         watchNowSlice = sliceData;
    //     } else if( sliceData.type === 'WATCH_NEXT' ){
    //         watchNextSlice = sliceData;
    //     } else if( sliceData.type === 'COLLECTION' && sliceData.collectionProperties.websafeTitle === 'featured-collections' ){
    //         //fastChannelsSlice = sliceData;
    //         fastChannelsSlice = collectionsData.slices;
         

    //     }

    // });

    return (
        <section className={styles.LiveTV} ref={liveTVRef} data-platform="bsd">
            <div className={styles.fixedHeader}>
                <Header 
                    titleText={`Live TV`}
                    platform="bsd" 
                    hasEmoji="t" 
                    showLogo={true} 
                    withshadow={false}  
                    hasBg={false} 
                    fixedHeader={true} 
                    shortHeader={true}
                />
            </div>
            
             <div className={styles.fixedContent}>
                <ContentRail template="livetv" data={props.data} />
            </div>
        </section>
    )
};

export default React.memo(LiveTV); 
