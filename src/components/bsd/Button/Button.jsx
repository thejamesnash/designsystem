import React, { useState, useEffect, useRef } from 'react';
import styles from './Button.module.css';
import Icon from '../../global/Icon/Icon.jsx';

export const Button = (props) => {
    const [timeLeft, setTimeLeft] = useState(props.duration);
    const [isCountingDown, setIsCountingDown] = useState(false);
    const [hasBeenFocused, setHasBeenFocused] = useState(false);
    const intervalRef = useRef(null);

    // Initialize time but don't start countdown automatically
    useEffect(() => {
        if (props.type === 'countdown' && props.duration) {
            setTimeLeft(props.duration);
        }
    }, [props.type, props.duration]);

    // Handle countdown logic
    useEffect(() => {
        if (isCountingDown && timeLeft > 0) {
            intervalRef.current = setInterval(() => {
                setTimeLeft(prev => {
                    if (prev <= 1) {
                        setIsCountingDown(false);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        } else {
            clearInterval(intervalRef.current);
        }

        return () => clearInterval(intervalRef.current);
    }, [isCountingDown, timeLeft]);

    // Handle focus - start countdown only on first focus
    const handleFocus = () => {
        if (props.type === 'countdown' && props.duration && !hasBeenFocused) {
            setHasBeenFocused(true);
            setIsCountingDown(true);
        }
    };

    // Handle focus loss - stop countdown permanently
    const handleBlur = () => {
        if (props.type === 'countdown' && isCountingDown) {
            setIsCountingDown(false);
            clearInterval(intervalRef.current);
        }
    };

    // Handle key press to cancel countdown
    const handleKeyDown = (e) => {
        if (props.type === 'countdown' && isCountingDown && (e.key === ' ' || e.key === 'Enter')) {
            e.preventDefault();
            setIsCountingDown(false);
            clearInterval(intervalRef.current);
        }
    };

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    const getButtonText = () => {
        if (props.type === 'countdown' && props.duration) {
            if (isCountingDown && timeLeft > 0) {
                return `Playing next in ${timeLeft}`;
            } else if (hasBeenFocused) {
                return 'Play next episode';
            } else {
                return props.btnText || 'Focus to start countdown';
            }
        }
        return props.btnText;
    };

    const getCharacterCount = () => {
        let longestString = 0;
        let btnTextCount = props.btnText.length;
        let subTextCount = 0;
        if( props.btnSubText ){
            subTextCount = props.btnSubText.length;
            if( subTextCount > btnTextCount ){
                longestString = subTextCount
            } else {
                longestString = btnTextCount    
            }
        } else {
            longestString = btnTextCount
        }
        return longestString;
    };

    console.log(props.type);

    return (
        <button 
            className={styles.Button} 
            data-platform={props.platform} 
            data-animate={props.animate} 
            data-animationtier={props.animationTier} 
            data-ref={props.ref} 
            data-template={props.type} 
            data-type={props.type} 
            onClick={props.onClick} 
            data-index={props.index} 
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown} 
            role={props.type === 'countdown' ? 'button' : undefined}
            aria-live={props.type === 'countdown' && isCountingDown ? 'polite' : undefined}
            aria-atomic={props.type === 'countdown' ? 'true' : undefined}
            aria-label={props.type === 'countdown' ? ( isCountingDown ? `Auto-play countdown: ${timeLeft} seconds remaining. Press back or down to cancel.` : hasBeenFocused ? 'Play next episode' : 'Focus to start auto-play countdown') : props['aria-label']} 
            style={{
                ...(props.type === 'countdown' && { '--duration': `${props.duration}s` }),
                ...(props.type === 'expanding' && { '--characterCount': getCharacterCount() })
            }}
        > 
            {props.withIcon ? <Icon iconRef={props.withIcon} colour="dark" /> :  null}
            {props.btnSubText ? (
                <span className={styles.btnText}>
                    <b>{getButtonText()}</b>
                    <b>{props.btnSubText}</b>
                </span>
            ) : (
                <b className={styles.btnText}>{getButtonText()}</b>
            )}
            {props.type === 'countdown' && !hasBeenFocused && (
                <span className="visuallyHidden">
                    Focus this button to start auto-play countdown.
                </span>
            )}
            {props.type === 'countdown' && isCountingDown && (
                <span className="visuallyHidden">
                    Auto-play will begin in {timeLeft} seconds. Press back, down, or lose focus to cancel.
                </span>
            )}
        </button>
    )
};

export default React.memo(Button);