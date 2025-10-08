import React from 'react';
import styles from './Settings.module.css';
import PageTitle from '../PageTitle/PageTitle.jsx';
import { useAppState }  from '../../../context/AppContext';

export const Settings = (props) => {
    const { animationState, animationTier } = useAppState();

    return (
        <div data-platform="bsd" className={styles.Settings}>
            <div className={styles.settingsContent}>
                <PageTitle titleText="Settings" hasEmoji="j" />
                <fieldset>
                    <legend>Let's get Channel 4 set up the way you like it</legend>
                    <ul>
                        <li>
                            <input 
                                type="checkbox" 
                                id="reducedmotion" 
                                data-type="settingsInput" 
                                defaultChecked={animationTier === 1}
                            />
                            <label htmlFor="reducedmotion">Reduced Motion</label>
                            <p>Select this option to reduce motion and animation across the app</p>
                        </li>
                        <li>
                            <input 
                                type="checkbox" 
                                id="nomotion" 
                                data-type="settingsInput" 
                                defaultChecked={!animationState}
                            />
                            <label htmlFor="nomotion">No Motion</label>
                            <p>Select this option to turn off all motion and animation across the app</p>
                        </li>
                        <li>
                            <input type="checkbox" id="subtitles" data-type="settingsInput" />
                            <label htmlFor="subtitles">Subtitles</label>
                            <p>Always show subtitles</p>
                        </li>
                        <li>
                            <input type="checkbox" id="audiodesc" data-type="settingsInput" />
                            <label htmlFor="audiodesc">Audio Description</label>
                            <p>Only show Audio Described shows</p>
                        </li>
                        <li>
                            <input type="checkbox" id="autoplay" data-type="settingsInput" />
                            <label htmlFor="autoplay">Next Episode Autoplay</label>
                            <p>Select this option to toggle autoplaying content.</p>
                        </li>
                    </ul>
                </fieldset>
            </div>
        </div>
    )
};

export default React.memo(Settings);