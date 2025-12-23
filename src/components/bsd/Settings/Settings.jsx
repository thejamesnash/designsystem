import React from 'react';
import styles from './Settings.module.css';
import Toggle from '../Toggle/Toggle';

export const Settings = (props) => {
    return (
        <section data-platform="bsd" className={styles.Settings}>
            <div className={styles.settingsNavWrap}>
                <h1>Settings</h1>
                <div className={styles.settingsNav} role="tablist" aria-label='Settings'>
                    {props.tabItems.map(function(tabitem,i) {
                        return (
                            <button 
                                id={`settingsTab${i}`} 
                                role="tab" 
                                aria-selected={i===0 ? true : false} 
                                aria-controls={`settingsPanel${i}`}>{tabitem}</button>
                        )
                    })}
                </div>
            </div>
            <div className={styles.settingsContent}>
                <div id="settingsPanel1" role="tabpanel" tabindex="0" aria-labelledby="settingsTab1">
                    <Toggle 
                        animate={props.animate} 
                        animationTier={props.animationTier} 
                        platform="bsd"
                        labelTitle="Subtitles" 
                        labelText="You can get subtitles on all programmes available to watch on Channel 4. You can turn subtitles on here, or you can also enable subtitles during playback by going to the speech bubble button." 
                        toggleOptions={["Off","On"]} 
                        name="subtitles" 
                        checked={true}
                        active={true}
                    />
                    <Toggle 
                        animate={props.animate} 
                        animationTier={props.animationTier} 
                        platform="bsd"
                        labelTitle="Audio Description" 
                        labelText="Many shows have Audio description available. This can be toggled here and also in playback by selecting the AD button." 
                        toggleOptions={["Off","On"]} 
                        name="audiodesc" 
                        checked={false}
                        active={false}
                    />
                    <Toggle 
                        animate={props.animate} 
                        animationTier={props.animationTier} 
                        platform="bsd"
                        labelTitle="Autoplay" 
                        labelText="Autoplay automatically plays the next episode so you can keep watching without interruption." 
                        toggleOptions={["Off","On"]} 
                        name="audiodesc" 
                        checked={false}
                        active={false}
                    />
                    <Toggle 
                        animate={props.animate} 
                        animationTier={props.animationTier} 
                        platform="bsd"
                        labelTitle="Low Motion Mode" 
                        labelText="Low Motion Mode reduces on-screen motion on Channel 4, creating a simpler, more focused browsing experience for users who prefer less on-screen movement." 
                        toggleOptions={["Off","On"]} 
                        name="audiodesc" 
                        checked={false}
                        active={false}
                    />
                    
                </div>
            </div>
        </section>
    )
};

export default Settings
