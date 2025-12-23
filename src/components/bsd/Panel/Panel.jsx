import React from 'react';
import styles from './Panel.module.css';
import BSDButton from '../Button/Button';
import Button from '../../dotcom/Button/Button';

export const Panel = (props) => {

    return (
        <aside className={styles.panel} data-activepanel={props.activePanel} data-platform={props.platform} data-animate={props.animate} data-animationtier={props.animationTier} >
            <div className={styles.panelIndicator}>
                {props.data.map(function(panelData,i) {
                    return (
                        <b key={i}></b>
                    )
                })}
            </div>
            { props.platform === 'dotcom' ? <div className={styles.panelNav}>
                <Button withIcon="chevron" />
            </div> : null }
            {props.data.map(function(panelData,i) {
                return (
                    <div key={i} className={styles.panelContent} data-name="playerAside" data-index={i}>
                        <img src={panelData.panelImg} alt="" />
                        <div className={styles.panelTextWrap}>
                            <h3>{panelData.panelTitle}</h3>
                            <p>{panelData.panelText}</p> 
                            <div className={styles.panelBtns}>
                                {panelData.buttons.map(function(buttonData,i) {
                                    if( props.platform === 'bsd' ){
                                        return (
                                            <BSDButton 
                                            btnText={buttonData.btnText} 
                                            withIcon={buttonData.withIcon} 
                                            duration={buttonData.duration} 
                                            type={buttonData.type} 
                                            platform={props.platform} 
                                            animate={props.animate}
                                            />    
                                        )
                                    }
                                    return (
                                        <Button 
                                            btnText={buttonData.btnText} 
                                            withIcon={buttonData.withIcon} 
                                            duration={buttonData.duration} 
                                            type={buttonData.type} 
                                            platform={props.platform} 
                                            animate={props.animate}

                                        />
                                    )
                                })}
                            </div>   
                            { i !== Number(props.data.length - 1) && props.platform === 'bsd' ? <p className={styles.panelTip}>More like this</p> : null }
                        </div>
                        
                    </div>
                )
            })}
      </aside>
    )
};

export default Panel

