import React,{useState, useRef, useEffect} from 'react';
import styles from './LiveTV.module.css';
import Header from '../Header/Header.jsx';
import Rail from '../Rail/Rail.jsx';
import collectionsData from '../../../../../public/data/platform/featuredCollections.json';


export const LiveTV = (props) => {

    const liveTVRef = useRef();
    useEffect(() => {
        console.log('liveTVRef data changed - useEffect Triggered');
        liveTVRef.current.querySelector('button').dataset.active = true;
        liveTVRef.current.querySelector('button').dataset.history = true;
    }, []); 

    let watchNowSlice;
    let watchNextSlice;
    let fastChannelsSlice = collectionsData;
    // console.log(fastChannelsSlice);
    props.data.sliceGroups[0].slices.map((sliceData,i) => {
        //console.log(sliceData);
        if( sliceData.type === 'WATCH_LIVE' ){
            watchNowSlice = sliceData;
        } else if( sliceData.type === 'WATCH_NEXT' ){
            watchNextSlice = sliceData;
        } else if( sliceData.type === 'COLLECTION' && sliceData.collectionProperties.websafeTitle === 'featured-collections' ){
            //fastChannelsSlice = sliceData;
            fastChannelsSlice = collectionsData.slices;
         

        }

    });

    return (
        <div className={styles.LiveTV} ref={liveTVRef}>
            <div className={styles.fixedHeader}>
                <Header 
                    titleText={`Live TV`}
                    moreText="The channels you know and love" 
                    platform="bsd" 
                    hasEmoji="t" 
                    showLogo={false} 
                    withshadow={true}  
                    hasBg={true} 
                    fixedHeader={true} 
                    shortHeader={true}
                />
            </div>
            
             <div className={styles.fixedContent}>
                { watchNowSlice ? 
                    <Rail 
                        hideTitle={true}  
                        parent="livetv" 
                        data={watchNowSlice} 
                        nextData={watchNextSlice} 
                        animationTier={props.animationTier} 
                        animate={props.animate} 
                        index={0} 
                        platform='bsd' 
                        size="l" 
                        showMeta={'focus'} 
                        ref="livetv" 
                        bg progress 
                        template="livetv" 
                        showSliceItemSubtitle 
                        showTXLogo 
                     /> 
                : null }
                {/* <Rail parent="livetv" hasTitleEmoji={'e'} titleOverride="Stream 24/7" template="fast" data={watchNextSlice} animate={props.animate} index={1} platform='bsd' animationTier={props.animationTier} size="l" showMeta={'focus'} ref="livetv" bg  />  */}
                <Rail 
                    parent="livetv" 
                    template="fast" 
                    ref="livetv" 
                    hasTitleEmoji={'e'} 
                    titleOverride="Stream 24/7" 
                    data={watchNextSlice} 
                    animate={props.animate} 
                    index={1} 
                    platform='bsd' 
                    animationTier={props.animationTier} 
                    size="l" 
                    showMeta={'focus'} 
                    bg  
                /> 
            </div>
        </div>
    )
};

export default React.memo(LiveTV); 
