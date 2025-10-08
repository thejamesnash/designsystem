import React,{useState, useRef, useEffect} from 'react';
import styles from './MyShows.module.css';
import Rail from '../Rail/Rail';
import Header from '../Header/Header';

export const MyShows = (props) => {
    //console.log(props.data);
    const myShowsRef = useRef();
        useEffect(() => {
            console.log('Shows data changed - useEffect Triggered');
            myShowsRef.current.querySelector('button').dataset.active = true;
            myShowsRef.current.querySelector('button').dataset.history = true;
        }, []); 
    return (
        <div className={styles.MyShows} ref={myShowsRef}>
            <div className={styles.fixedHeader}>
                <Header 
                    // titleText={`Hi ${localStorage.getItem('username')}`}
                    titleText={"Hello friend"}
                    moreText="Continue watching your favourites here..." 
                    platform="bsd" 
                    hasEmoji="r" 
                    showLogo={false} 
                    withshadow={true}  
                    hasBg={true} 
                    fixedHeader={true}
                />
            </div>
            
             <div className={styles.fixedContent}>
                <Rail hideTitle={true} data={props.data.sliceGroups[0].slices[3]} animate={props.animate} animationTier={props.animationTier} index={0} platform='bsd' size="m" showMeta={'focus'} bg  titleOverride="My List" titleEmoji="a" parent="myshows" />
                <Rail hideTitle={false} data={props.data.sliceGroups[0].slices[1]} animate={props.animate} animationTier={props.animationTier} index={1} platform='bsd' size="m" showMeta={'focus'} bg  titleOverride="My List" titleEmoji="a" parent="myshows" />
             </div>
            
            {/* <Slice data={props.data.slices[14]} animate={props.animate} index={0} platform='bsd' size="m" showMeta={'focus'} bg titleOverride="My Shows" />
            <Slice data={props.data.slices[7]} animate={props.animate} index={1} platform='bsd' size="m" showMeta={'focus'} bg  titleOverride="My List" titleEmoji="a" />
            <Slice data={props.data.slices[19]} animate={props.animate} index={2} platform='bsd' size="m" showMeta={'focus'} bg  titleOverride="Continue Watching" />                             */}
        </div>
    )
};

export default React.memo(MyShows); 
