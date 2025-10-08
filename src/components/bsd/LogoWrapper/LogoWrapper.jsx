import React from 'react';
import styles from './LogoWrapper.module.css';
import Logo from '../../global/Logos/Logo.jsx';
import AnimatedLogo from '../AnimatedLogo/AnimatedLogo.jsx';
// import GLTFViewer from '../../global/GLTFViewer/GLTFViewer.jsx';

export const LogoWrapper = (props) => {
    return (
        <div 
            className={styles.LogoWrapper} 
            data-position={props.logoPosition} 
            data-animate={props.animate} 
            data-animationtier={props.animationTier}
        >
            <div className={styles.logo}>
                { props.animate === false ?
                    <Logo logoRef="C4" colour="primary" />
                : null }
                { props.animate === true && props.animationTier === 1 ?
                    <Logo logoRef="C4" colour="primary" />
                : null }
                { props.animate === true && props.animationTier === 2 ?
                    <AnimatedLogo logoState={props.logoState} />
                : null }
                {/* { props.animate === true && props.animationTier === 3 ?
                    <GLTFViewer
                        animate={true} 
                        animationTier={3} 
                        gltfUrl={'./gltf/loading.gltf'} 
                        width={274} 
                        height={372} 
                        autoRotate={false} 
                        cameraPosition={[0, 0, 3]} 
                        enableAnimation={true} 
                        materialColor={'#aaff89'} 
                        materialMetalness={0} 
                        materialRoughness={1} 
                        hdrUrl={"./gltf/environment.hdr"} 
                        envMapIntensity={2.6} 
                        animationLoop={1} 
                        animationSpeed={1} 
                        animationDelay={0} 
                        animationPaused={false} 
                        pauseAtFrame={'55'}
                     />
                : null } */}
            </div>
        </div>
    )
};

export default LogoWrapper
