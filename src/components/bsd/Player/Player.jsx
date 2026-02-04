import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from './Player.module.css';
import Button from '../Button/Button';
import PageTitle from '../PageTitle/PageTitle.jsx';
import AnimatedLogo from '../AnimatedLogo/AnimatedLogo.jsx';
import Icon from '../../global/Icon/Icon.jsx';
import Progress from '../Progress/Progress.jsx';
import Rail from '../Railv1/Rail.jsx';

export const Player = (props) => {
  // Add early return if props.data is undefined
  if (!props.data) {
    console.warn('Player component received undefined data');
    return <div>Loading player...</div>;
  }
  

  const videoSources = [
    { 
      'videoSrc':'https://github.com/thejamesnash/video/raw/refs/heads/main/BakeOffFinal.mp4',
      'subtitlesSrc': '../../../../video/bakeoff.vtt'
    },
     { 
      'videoSrc':'https://github.com/thejamesnash/video/raw/refs/heads/main/tm_compressed.mp4',
      'subtitlesSrc': '../../../../video/taskmaster.vtt'
    },
     { 
      'videoSrc':'https://github.com/thejamesnash/video/raw/refs/heads/main/taskmaster_bsl.mp4',
      'subtitlesSrc': '../../../../video/taskmaster.vtt'
    }
  ];


  
  

  
  
  const [playerState, setPlayerState] = useState(props.state);
  const [videoSrcState,setVideoSrcState] = useState(videoSources[0].videoSrc);
  const [subtitlesSrcState, setSubtitlesSrcState] = useState(videoSources[0].subtitlesSrc);
  const [currentTime, setCurrentTime] = useState('00:00:00');
  const [totalTime, setTotalTime] = useState('01:00:00');
  const [progressString, setProgessString] = useState('10%');
  const videoRef = useRef(null);
  const playerWrapRef = useRef(null);
  const progressElRef = useRef(null);
  const timeoutRef = useRef(null);
  
  const [isBSLMode, setIsBSLMode] = useState(false);


  const clearSubtitleTracks = useCallback(() => {
  if (videoRef.current) {
    const tracks = videoRef.current.textTracks;
    // Disable all existing tracks
    for (let i = 0; i < tracks.length; i++) {
      tracks[i].mode = 'disabled';
    }
  }
}, []);


// Add these functions after your existing useCallback functions (around line 70)
const switchToBSLVideo = useCallback(() => {
  console.log('Switching to BSL video');
  setVideoSrcState(videoSources[2].videoSrc);
  setSubtitlesSrcState(videoSources[2].subtitlesSrc);
  setIsBSLMode(true);
}, []);

const switchToRegularVideo = useCallback(() => {
  console.log('Switching to regular video');
  // Check if it should be Taskmaster or default
  if (props.data?.brand?.title === 'Taskmaster') {
    setVideoSrcState(videoSources[1].videoSrc);
    setSubtitlesSrcState(videoSources[1].subtitlesSrc);
  } else {
    setVideoSrcState(videoSources[0].videoSrc);
    setSubtitlesSrcState(videoSources[0].subtitlesSrc);
  }
  setIsBSLMode(false);
}, [props.data?.brand?.title]);

// Add this useEffect after your existing cancelVideoModeTimer useEffect (around line 220)
useEffect(() => {
  window.switchToBSLVideo = switchToBSLVideo;
  window.switchToRegularVideo = switchToRegularVideo;
  
  return () => {
    delete window.switchToBSLVideo;
    delete window.switchToRegularVideo;
  };
}, [switchToBSLVideo, switchToRegularVideo]);


useEffect(() => {
  console.log('-----------------');
  console.log('From PLAYER');
  console.log(props.data.brand.title);
  
  // Don't change video if we're in BSL mode
  if (!isBSLMode) {
    if(props.data.brand.title === 'Taskmaster'){
      console.log('Setting Taskmaster video source');
      setVideoSrcState(videoSources[1].videoSrc);
      setSubtitlesSrcState(videoSources[1].subtitlesSrc);
    } else {
      console.log('Setting default video source');
      setVideoSrcState(videoSources[0].videoSrc);
      setSubtitlesSrcState(videoSources[0].subtitlesSrc);
    }
  }
  console.log('-----------------');
}, [props.data?.brand?.title, isBSLMode]);

useEffect(() => {
  if (videoRef.current) {
    // Clear existing subtitle tracks first
    clearSubtitleTracks();
    
    // Force video to reload with new source
    videoRef.current.load();
  }
}, [videoSrcState, subtitlesSrcState, clearSubtitleTracks]);

  // Define computed values first
  const brandTitle = props.data?.brand?.title || 'Unknown Title';
  const brandImageHref = props.data?.brand?.image?.href || '';
  const sliceGroups = props.data?.sliceGroups || [];

  // Memoize functions to prevent recreation on every render
  const clearModeTimeout = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const startModeTimer = useCallback(() => {
    console.log(playerState);
    clearModeTimeout();
    timeoutRef.current = setTimeout(() => {
      setPlayerState(currentState => {
        return currentState === 'showcontrols' ? 'playback' : currentState;
      });
      timeoutRef.current = null;
    }, 3000);
  }, [clearModeTimeout, playerState]);

  const cancelModeTimer = useCallback(() => {
    clearModeTimeout();
    setPlayerState(currentState => {
      return currentState === 'playback' ? 'showcontrols' : currentState;
    });
  }, [clearModeTimeout]);

  const secondsToHHMMSS = useCallback((seconds) => {
    const totalSeconds = parseFloat(seconds);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const secs = Math.floor(totalSeconds % 60);
    
    const paddedHours = hours.toString().padStart(2, '0');
    const paddedMinutes = minutes.toString().padStart(2, '0');
    const paddedSeconds = secs.toString().padStart(2, '0');
    
    return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
  }, []);

  // Memoize the result of returnMoreSlices
  const moreSlicesData = React.useMemo(() => {
    if (sliceGroups.length === 0) return null;
    
    console.log('Rendering more slices');
    console.log(sliceGroups);
    let moreData;
    sliceGroups.forEach((obj) => {
      if (obj.type === 'FOOTER') {
        moreData = obj.slices[0];
      }
    });
    console.log(moreData);
    return moreData;
  }, [sliceGroups]);

  // Safe Rail data access
  const railData = React.useMemo(() => {
    if (sliceGroups.length === 0) return null;
    if (sliceGroups[1]?.slices?.[0]) {
      return sliceGroups[1].slices[0];
    }
    if (sliceGroups[0]?.slices?.[0]) {
      return sliceGroups[0].slices[0];
    }
    return null;
  }, [sliceGroups]);

  // Safe aside data access
  const asideData = React.useMemo(() => {
    if (!railData?.sliceItems?.[0]?.brand) return null;
    return railData.sliceItems[0].brand;
  }, [railData]);

  // Event handlers
  const handleVideoPlay = useCallback(() => {
    if (videoRef.current) {
      console.log('Video has started playing');
      startModeTimer();
    }
  }, [startModeTimer]);

const handleLoadedMetadata = useCallback(() => {
  const appWrapper = document.querySelector('main[data-appstate]');
  console.log('handleLoadedMetadata');
  if (videoRef.current) {
    console.log('handleLoadedMetadata has videoref');
    
    // Clear all tracks first
    clearSubtitleTracks();
    
    // Then enable only the first track
    const tracks = videoRef.current.textTracks;
    if (tracks.length > 0) {
      tracks[0].mode = 'showing';
    }
    
    if (appWrapper?.dataset.state === 'player') {
      console.log('handleLoadedMetadata has videoref');
      videoRef.current.play();
      startModeTimer();
    }
  }
}, [startModeTimer, clearSubtitleTracks]);

  const handleTimeUpdate = useCallback((evt) => {
    if (evt.target.currentTime > 154 && playerState !== 'endofplayback') {
      setPlayerState('endofplayback');
      playerWrapRef.current.querySelector('button[data-ref="eopBtn"]').focus({preventScroll: true});
      // progressElRef.current?.focus({preventScroll: true});
    }
    let rawCurrentTime = 3419.960667 + evt.target.currentTime;
    setProgessString(`${(rawCurrentTime / 3600) * 100}%`);
    if (progressElRef.current) {
      progressElRef.current.value = rawCurrentTime;
    }
    setCurrentTime(secondsToHHMMSS(rawCurrentTime));
  }, [playerState, secondsToHHMMSS]);

  const handleProgressChange = useCallback((evt) => {
    if (videoRef.current) {
      // Get the new time from the progress input
      const newTime = parseFloat(evt.target.value) - 3419.960667;
      
      // Update video current time
      videoRef.current.currentTime = Math.max(0, newTime);
      
      // Update progress string and current time display
      setProgessString(`${(parseFloat(evt.target.value) / 3600) * 100}%`);
      setCurrentTime(secondsToHHMMSS(parseFloat(evt.target.value)));
    }
  }, [secondsToHHMMSS]);

  const handleProgressFocus = useCallback(() => {
    startModeTimer();
  }, [startModeTimer]);
  
  let allowMove = true;

  const handleLostFocus = () => {
    const playerPage = playerWrapRef.current;
    console.log(playerState);
    if( playerState === "playback" ){
      progressElRef.current.focus({preventScroll:true});
      setPlayerState('showcontrols');
    } else if( playerState === "showcontrols" ){
      progressElRef.current.focus({preventScroll:true});
      setPlayerState('showcontrols');
    } else if( playerState === "endofplayback" ){
      playerPage.querySelector('button[data-ref="eopBtn"]').focus({preventScroll: true});
    } 
  }

  // Expose cancel function globally for navigation.js
  useEffect(() => {
    window.cancelVideoModeTimer = cancelModeTimer;
    return () => {
      delete window.cancelVideoModeTimer;
      clearModeTimeout(); // Cleanup on unmount
    };
  }, [cancelModeTimer, clearModeTimeout]);

  useEffect(() => {
    setPlayerState(props.state);
    const playerPage = playerWrapRef.current;
    if (props.state === 'endofplayback') {
      console.log('EOP');
      const timer = setTimeout(() => {
        playerPage.querySelector('button[data-ref="eopBtn"]').focus({preventScroll: true});
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [props.state]);

  const baseTime = 3600 - 180.039333;

  

  const playerRailVerticalBehaviour = (el,dir,appWrapper) => {
    const playerPage = appWrapper;
    playerPage.dataset.state = 'showcontrols';
    playerPage.querySelector('input[data-type="progress"]').focus({preventScroll:true});
};

const handlePlayerProgress = ( el,dir,appWrapper ) => {
    console.log('On progress');
    // const playerPage = appWrapper;
    const playerPage = playerWrapRef.current; 

    const playerVideo = playerPage.querySelector('video');
    console.log(playerPage.dataset.state);
    //console.log(playerPage);
    if( dir === 'ArrowDown' ){
        playerPage.dataset.state = 'more';
        const moreRailItem = playerPage.querySelector('div[data-parent="player"] button[data-template="gradient-featured"]');
        //console.log(moreRailItem);
        moreRailItem.focus({preventScroll:true});
    } else if( dir === 'ArrowUp' ){
        playerPage.dataset.state = 'showcontrols';
        playerPage.querySelector('button[data-type="playerHeader"]').focus({preventScroll:true});
        //playerPage.querySelector('div[data-parent="player"] button[data-template="gradient-featured"]').focus({preventScroll:true});
    } else if( dir === 'ArrowRight' ){
        if(playerPage.dataset.state === 'showcontrols' || playerPage.dataset.state === 'playback') {
          playerPage.dataset.state = 'showcontrols';
          playerVideo.pause();
          const videoCurrentTime = Number(playerVideo.currentTime);
          playerVideo.currentTime = videoCurrentTime + 5;
          playerVideo.play();

        } else if( playerPage.dataset.state = 'endofplayback' ){
            console.log('EOP');
        }
        // advance
        
        // if( playerPage.dataset.state = 'endofplayback' ){
        //   console.log('EOP');
        // } else {
          
        // }
    } else if( dir === 'ArrowLeft' ){
        // advance
        playerVideo.pause();
        playerPage.dataset.state = 'showcontrols';
        const videoCurrentTime = Number(playerVideo.currentTime);
        playerVideo.currentTime = videoCurrentTime - 5;
        playerVideo.play();
    }
    allowMove = true;
}

const handlePlayerHeaderBtn = (el,dir,appWrapper) => {
    const playerPage = appWrapper;
    playerPage.dataset.state = 'showcontrols';
    if( dir === 'ArrowDown' ){
        playerPage.dataset.state = 'showcontrols';
        progressElRef.current.focus({preventScroll:true});
    } if( dir === 'ArrowRight' ){
        el.nextElementSibling.focus({preventScroll:true});
    }
    allowMove = true;
};

const handlePlayerIconBtn = (el,dir,appWrapper) => {
    
    const playerPage = appWrapper;
    playerPage.dataset.state = 'showcontrols';
    if( dir === 'ArrowDown' ){
        playerPage.dataset.state = 'showcontrols';
        progressElRef.current.focus({preventScroll:true});
    } else if( dir === 'ArrowLeft' ){
        el.previousElementSibling.focus({preventScroll:true});
    }

    allowMove = true;
};

const handlePlayerAsideBtn = (el, dir, appWrapper) => {
    const playerPage = appWrapper;
    const currentAsideIndex = Number(playerPage.dataset.activeeop);
    console.log(playerPage.dataset.activeeop);
    console.log(el);
    if( dir === 'ArrowDown' ){
        if( Number(el.dataset.index) === 1 ){
            playerPage.dataset.state = 'endofplayback';
            playerPage.dataset.activeeop = 2;
            playerPage.querySelector('div[data-name="playerAside"][data-index="2"] button').focus({preventScroll:true});
        } else if( Number(el.dataset.index) === 2 ){
            playerPage.dataset.state = 'endofplayback';
            playerPage.dataset.activeeop = 3;
            playerPage.querySelector('div[data-name="playerAside"][data-index="3"] button').focus({preventScroll:true});
        }
    } else if( dir === 'ArrowUp' ){
        if( Number(el.dataset.index) === 2 ){
            playerPage.dataset.state = 'endofplayback';
            playerPage.dataset.activeeop = 1;
            playerPage.querySelector('div[data-name="playerAside"][data-index="1"] button').focus({preventScroll:true});
        } else if( Number(el.dataset.index) === 3 ){
            playerPage.dataset.state = 'endofplayback';
            playerPage.dataset.activeeop = 2;
            playerPage.querySelector('div[data-name="playerAside"][data-index="2"] button').focus({preventScroll:true});
        }
    } else if( dir === 'ArrowLeft' ){
        playerPage.dataset.state = 'showcontrols';
        progressElRef.current.focus({preventScroll:true});
    }
    allowMove = true;
}

const railBtnBehaviour = (el, dir, appWrapper) => {
    let targetBtn;
    let newIndex;
    if( dir === 'ArrowLeft' || dir === 'ArrowRight' ){
        if( dir === 'ArrowRight'){
            targetBtn = el.nextElementSibling;
            newIndex = Number(el.dataset.index) + 1;
        } else if( dir === 'ArrowLeft'){
            targetBtn = el.previousElementSibling;
            newIndex = Number(el.dataset.index) - 1;
        }
        if( targetBtn ){
            el.dataset.active = false;
            el.dataset.history = false;
            targetBtn.dataset.active = true;
            targetBtn.dataset.history = true;
            targetBtn.parentElement.parentElement.style = `--transformXIndex: ${newIndex}`;
            targetBtn.focus({preventScroll:true});
            allowMove = true;
        } else {
            if( Number(el.dataset.index) === 0 ){
                console.log(appWrapper.dataset.appstate);
                if( appWrapper.dataset.appstate === 'home' || appWrapper.dataset.appstate === 'myshows' || appWrapper.dataset.appstate === 'categories' || appWrapper.dataset.appstate === 'livetv' ){
                    appWrapper.dataset.navopen = true;
                    const targetNavBtn = document.querySelector(`button[data-type="navbtn"][value="${appWrapper.dataset.appstate}"]`);
                    if (targetNavBtn) {
                        targetNavBtn.focus({preventScroll: true});
                        targetNavBtn.dataset.active = true;
                    }
                    el.dataset.navhistory = true;
                    allowMove = true;
                }      
            }
        }
    }  else if( dir === 'ArrowUp' || dir === 'ArrowDown' ){
        //console.log('Rail up or down');
        
            playerRailVerticalBehaviour(el, dir, appWrapper);
        
    }
    allowMove = true;
};

const keyDownHandler = (evt) => {
    console.log(evt);
    const el = evt.target;
    const dir = evt.key;
    const elType = el.dataset.type;
    console.log(elType);
    const appWrapper = playerWrapRef.current;
    if( dir === 'ArrowUp' || dir === 'ArrowDown' || dir === 'ArrowLeft' ||dir === 'ArrowRight' ){
                switch(elType) {
                    case 'navbtn':
                        navBtnBehaviour(el, dir, appWrapper);
                        break;
                    case 'railBtn':
                        railBtnBehaviour(el, dir, appWrapper);
                        break;
                    case 'catFilterPanelBtn':
                        catPageBehaviour(dir);
                        break;
                    case 'expanding':
                        handleHubButtonNavigation(el, dir);
                        break;
                    case 'series':
                        handleSeriesButtonNavigation(el, dir);
                        break;
                    case 'catFilter':
                        catFilterBehaviour(el, dir);
                        break;
                    case 'railResultBtn':
                        handleRailResultBtn(el, dir);
                        break;
                    case 'searchKey':
                        handleSearchKeyboard(el, dir, appWrapper);
                        break;
                    case 'progress':
                        handlePlayerProgress(el, dir, appWrapper);
                        break;
                    case 'playerHeader':
                        handlePlayerHeaderBtn(el, dir, appWrapper);
                        break;
                    case 'icon':
                        handlePlayerIconBtn(el, dir, appWrapper);
                        break;
                    case 'settingsInput':
                        handleSettingsInput(el, dir, appWrapper);
                        break;
                    case 'countdown':
                        handlePlayerAsideBtn(el, dir, appWrapper);
                        break;
                    case 'eop':
                        handlePlayerAsideBtn(el, dir, appWrapper);
                        break;
                    case 'playerAsideBtn':
                        handlePlayerAsideBtn(el, dir, appWrapper);
                        break;
                    case 'body':
                        handleLostFocus(el, dir, appWrapper);
                        break;
                    
                    default:
                        handleLostFocus(el, appWrapper);
                        break;
                }
            }
  }

  const handleKeyUp = useCallback((event) => {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
    }, []);

    const handleKeyDown = useCallback((event) => {
        event.preventDefault();
        event.stopPropagation();
        keyDownHandler(event);
    }, [keyDownHandler]); 

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown, { capture: true });
        document.addEventListener('keyup', handleKeyUp, { capture: true });
        return () => {
            document.removeEventListener('keydown', handleKeyDown, { capture: true });
            document.removeEventListener('keyup', handleKeyUp, { capture: true });
        };
    }, [handleKeyDown, handleKeyUp]);

    
  return (
    <section className={styles.Player} ref={playerWrapRef} data-platform="bsd" data-state={playerState} data-name={'playerpage'} data-showsubs={false} data-activeeop={1} data-signed={false} data-animate={props.animate} data-animationtier={props.animationTier} >
      <div className={styles.playerHeader}>
        {props.showLogo ? 
          <div className={styles.logoWrapper}>
            <AnimatedLogo logoState={0} />
          </div> 
        : null}
        <PageTitle 
          titleText={brandTitle} 
          subTitle={'Series 16 Episode 10'} 
          withTextShadow 
        />
        <div className={styles.playerHeaderBtns}>
          <Button withIcon={'fourplus'} btnText={'Go ad-free'} type={'playerHeader'} />
          <Button withIcon={'subtitles'} type={'icon'} ref={'subtitlesBtn'} />
        </div>
      </div>
      <div className={styles.playerWrapper}>
        <video 
          ref={videoRef} 
          className={styles.playerElement} 
          preload="metadata" 
          aria-describedby="video-description" 
          poster={brandImageHref} 
          onLoadedMetadata={handleLoadedMetadata} 
          onTimeUpdate={handleTimeUpdate} 
          onPlay={handleVideoPlay}
          playsInline 
          muted 
          autoPlay
        >
          <source src={videoSrcState} type="video/mp4" />
          <track 
            kind="subtitles" 
            // src="../../../../video/taskmaster.vtt"  
            src={subtitlesSrcState} 
            srcLang="en" 
            label="English"
            default></track>
          <p>Sorry - your device doesn't support these videos</p>
        </video>
      </div>
      <div className={styles.playerControls}>
        <div className={styles.playStateIcon}>
          <Icon iconRef={'play'} />
        </div>
        <p className={styles.timecode}>{currentTime}</p>
        <input 
          type="range" 
          data-type="progress" 
          value="3419.960667" 
          max="3600" 
          min="0" 
          className={styles.progress} 
          style={{'--currentProgress': `${progressString}`}} 
          onChange={handleProgressChange} 
          ref={progressElRef} 
          onFocus={handleProgressFocus} 
          
        />
        <p className={styles.timecode}>{totalTime}</p>
      </div>
      <div className={styles.playerFooter}>
        <p className={styles.tip}>Take me back</p>
        {sliceGroups.length > 0 && moreSlicesData && (
            <Rail 
              key={0} 
              data={moreSlicesData} 
              animate={props.animate} 
              index={0} 
              platform='bsd' 
              parent={'player'} 
              hasGradient={true} 
              template="gradient-featured" 
              titleEmoji={'a'} 
              size="l" 
              showMeta="always" 
              animationTier={3}
            />
        )}
      </div>

      <div className={styles.playerAside}>
        <div className={styles.asideIndicator}><b></b><b></b><b></b></div>
        
        <div className={styles.asideContent}  data-name="playerAside" data-index={1}>
          <>
              <img src={"https://ic.c4assets.com/bips/collections/0D1ABBFD-CBD4-4e3d-836b-f409cd8912d8.jpg?output-quality=10&resize=960:540&informat=chrome&interpolation=progressive-bicubic"} alt="" />
              <h3>Recommended for You</h3>
              <p>Knead more Bake Off? We take another bite, for when one helping just isn't enough</p>
          </>
          <div className={styles.playerAsideBtns}>
            {/* <Button btnText="Playing Next in" withIcon="play" duration={10} type="countdown" animate={true} index="1"/> */}
            <Button withIcon="play" btnText="Play next episode" ref={'eopBtn'} type="eop" index="1" />
            <Button btnText="Add to My List" />
          </div>
          <p className={styles.asideTip}>More like this</p>
        </div>
         
        <div className={styles.asideContent} data-name="playerAside" data-index={2}>
          <>
            <img src={"https://ic.c4assets.com/bips/collections/B37373C2-CF64-4554-acf5-977d3a9f83ef.jpg?output-quality=10&amp;resize=960:540&amp;informat=chrome&amp;interpolation=progressive-bicubic"} alt="" />
            <h3>More Like This</h3>
            <p>"From dough disasters to pastry pandemonium, amateur bakers compete for gooey glory"</p>
          </>
          <div className={styles.playerAsideBtns}>
            <Button btnText="Play" withIcon="play" type="playerAsideBtn" index="2"  />
            <Button btnText="Add to My List" />
          </div>
          <p className={styles.asideTip}>More like this</p>
        </div>

        <div className={styles.asideContent} data-name="playerAside" data-index={3}>
          <>
            <img src={"https://ic.c4assets.com/bips/collections/2811852D-3117-4cb2-90f0-d7b2c3bc78b7.jpg?output-quality=10&amp;resize=960:540&amp;informat=chrome&amp;interpolation=progressive-bicubic"} alt="" />
            <h3>Recommended for You</h3>
            <p>"A group of single celebrities join an exclusive dating agency in a bid to find true love"</p>
          </>
          <div className={styles.playerAsideBtns}>
            <Button btnText="Play" withIcon="play" type="playerAsideBtn" index="3" />
            <Button btnText="Add to My List" />
          </div>
        </div>
      </div>
    </section>
  )
};

export default React.memo(Player);