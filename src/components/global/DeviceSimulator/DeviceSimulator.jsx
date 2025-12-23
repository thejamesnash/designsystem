import React, { useState, useEffect, useRef } from 'react';
import styles from './DeviceSimulator.module.css';

export const DeviceSimulator = (props) => {
    const [frameWidth, setFrameWidth] = useState(props.width || 375);
    const [frameHeight, setFrameHeight] = useState(props.height || 667);

    const frameWidthRef = useRef(frameWidth);
    const frameHeightRef = useRef(frameHeight);
    const deviceRef = useRef(null);

    useEffect(() => {
        frameWidthRef.current = frameWidth;
        frameHeightRef.current = frameHeight;
    }, [frameWidth, frameHeight]);

    const setFrameDimensions = (deviceType) => {
        console.log('Setting dimensions for:', deviceType);
        
        if (!deviceType) {
            console.log('No device type set, using default iPhone Portrait');
            setFrameHeight(667);
            setFrameWidth(375);
        } else {
            console.log('Device type set:', deviceType);
            
            switch (deviceType) {
                case 'ipadL':
                    setFrameHeight(768);
                    setFrameWidth(1024);
                    break;
                case 'ipadP':
                    setFrameHeight(1024);
                    setFrameWidth(768);
                    break;
                case 'iphoneL':
                    setFrameHeight(375);
                    setFrameWidth(667);
                    break;
                case 'iphoneP':
                    setFrameHeight(667);
                    setFrameWidth(375);
                    break;
                case 'iphoneMaxP':
                    setFrameHeight(932);
                    setFrameWidth(430);
                    break;
                case 'iphoneMaxL':
                    setFrameHeight(430);
                    setFrameWidth(932);
                    break;
                case 'TV':
                    setFrameHeight(1080);
                    setFrameWidth(1920);
                    break;
                default:
                    setFrameHeight(667);
                    setFrameWidth(375);
            }
        }
    }

     useEffect(() => {
        const element = deviceRef.current;
        if (!element) return;
    
        const resizeObserver = new ResizeObserver(entries => {
          const entry = entries[0]; // We're only observing one element
          setFrameWidth(entry.contentRect.width);
          setFrameHeight(entry.contentRect.height);
          //setFrameDimensions(element);
        });
    
        resizeObserver.observe(element);
    
        // // Set initial width
        // setFrameWidth(element.offsetWidth);
        // setFrameHeight(element.offsetHeight);
    
        // Cleanup
        return () => resizeObserver.disconnect();
      }, []);

    // Set frame dimensions according to device
    useEffect(() => {
        setFrameDimensions(props.device);
    }, [props.device]);
    
    return (
        <div 
            className={styles.DeviceSimulator} 
            ref={deviceRef}     
            style={{ 
                '--frameWidth': `${frameWidth}px`,
                '--frameHeight': `${frameHeight}px` 
            }}
        >
            <div className={styles.diagnostics}>
                <p>Width: {frameWidth}</p>
                <p>Height: {frameHeight}</p>
                <p>Device: {props.device}</p>
            </div>
            <iframe 
                className={styles.inner} 
                src={props.frameSrc || "/iframe.html?globals=&args=&id=drops-drop-1-dotcom-home-page--default"} 
            />
        </div>
    )
};

export default DeviceSimulator;