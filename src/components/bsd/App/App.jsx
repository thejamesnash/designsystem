import React,{useState,useEffect,useRef} from 'react';
import styles from './App.module.css';
import Splash from '../Splash/Splash';
import SignIn from '../SignIn/SignIn';

export const App = (props) => {
    const [splashState,setSplashState] = useState('playing');
    const [splashSize,setSplashSize] = useState('full');
    const [signInState,setSignInState] = useState('intro');
    // Use props.appState as initial value and track it separately
    const [internalAppState,setInternalAppState] = useState(props.appState || 'loading');
    const appRef = useRef(null);

    // Sync with prop changes from Storybook controls
    useEffect(() => {
        if (props.appState && props.appState !== internalAppState) {
            setInternalAppState(props.appState);
        }
    }, [props.appState]);

    const handleAppKeyUp = (evt) => {
        console.log(evt);
        if( evt.key === 'Enter' ){
            if( evt.target.dataset.ref === 'btn1' ){
                setInternalAppState('qr')
            } else if( evt.target.dataset.ref === 'btn3' ){
                setInternalAppState('welcome')
            } 
        }
    }

    // React to state changes from either source
    useEffect(() => {
        let targetBtn;
        let timeoutDuration = 4000;
        
        if( internalAppState === 'loading' ){
            setSplashSize('full');
            setSplashState('playing');
            setSignInState('intro');
        } else if( internalAppState === 'intro' ){
            setSplashSize('half');
            setSplashState('paused');
            setSignInState('intro');
            timeoutDuration = 0;
            targetBtn = appRef.current?.querySelector('button[data-ref="btn1"]');
        } else if( internalAppState === 'qr' ){
            setSplashSize('half');
            setSplashState('paused');
            setSignInState('qr');
            timeoutDuration = 0;
            targetBtn = appRef.current?.querySelector('button[data-ref="btn3"]');
        } else if( internalAppState === 'welcome' ){
            setSplashSize('half');
            setSplashState('paused');
            setSignInState('welcome');
            timeoutDuration = 0;
            targetBtn = appRef.current?.querySelector('button[data-ref="btn4"]');
        }

        const timeoutId = setTimeout(() => {
            if (targetBtn) {
                console.log('focus');
                targetBtn.focus({preventScroll:true});
            } else {
                setInternalAppState('intro');

            }
        }, timeoutDuration);

        return () => clearTimeout(timeoutId);
    }, [internalAppState]);

    return (
        <div className={styles.App} ref={appRef} data-appstate={internalAppState} onKeyUp={handleAppKeyUp}>
            <Splash animate={true} animationTier={3} size={splashSize} state={splashState} />
            <div className={styles.signIn}>
                <SignIn animate={true} animationTier={3} state={signInState} />
            </div>
        </div>
    )
};

export default App