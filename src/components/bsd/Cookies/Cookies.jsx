import React from 'react';
import styles from './Cookies.module.css';
import Toggle from '../Toggle/Toggle';
import PopUp from '../PopUp/PopUp';
import Splash from '../Splash/Splash';
import Button from '../Button/Button';

export const Cookies = (props) => {
    return (
        <section className={styles.Cookies} data-platform="bsd" data-state={props.state}>
            <Splash state="paused" size="third" />
            <div className={styles.cookieContent}>
                <div className={styles.intro}>
                    <h1>Your privacy on Channel 4</h1>
                    <p>We use cookies on your device to help us provide a more reliable service, show you relevant adverts and create more shows you might like.</p>
                    <p>Find out more at <b>channel4.com/cookies and channel4.com/privacy</b>.</p>
                    <div className={styles.btnWrap}>
                        <Button type="nopadding" btnText={'Reject & Continue'} />
                        <Button btnText={'Manage'} />
                        <Button btnText={'Accept & Continue'} />
                    </div>
                </div>
                <div className={styles.manageCookies}>
                    <Toggle 
                        disabled 
                        animate={true} 
                        animationTier="3" 
                        platform="bsd" 
                        labelTitle="Essential Information" 
                        labelText="These cookies cannot be turned off because they are necessary to run the Channel 4 service." 
                        toggleOptions={"Always On"} 
                        name="subtitles" 
                        checked={true} 
                        active={true}
                    />
                    <Toggle 
                        disabled 
                        animate={true} 
                        animationTier="3" 
                        platform="bsd" 
                        labelTitle="Measurement" 
                        labelText="We receive information about the programmes you watch, the parts of our service that aren't working well, and which version of a page works best." 
                        toggleOptions={"Always On"} 
                        name="subtitles" 
                        checked={true} 
                        active={true}
                    />
                    <Toggle 
                        animate={true} 
                        animationTier="3" 
                        platform="bsd" 
                        labelTitle="Channel 4 Promotions" 
                        labelText={["We measure your response to our targeted marketing on other websites and services you might visit. This helps Channel 4 improve the content we promote to you.","The cookies we use for this recognise your Channel 4 account using a unique code. By opting out you may still see Channel 4 messages on these websites and services, but they may be less relevant to you."]}  
                        toggleOptions={['Off','On']} 
                        name="subtitles" 
                        checked={true} 
                        active={true}
                    />
                    
                    <Toggle 
                        animate={true} 
                        animationTier="3" 
                        platform="bsd" 
                        labelTitle="Targeted Advertising" 
                        labelText={["Channel 4 is owned by you, and our programmes are funded by the adverts you see whilst streaming. Opt-in and you'll see advertising based on how you use our service and what we think you're interested in.","We will also measure your response to our advertising. We recognise your device by storing a random and unique code, but we never access personal information from your device. Visit your account settings to manage how we serve you adverts without cookies."]}  
                        toggleOptions={['Off','On']} 
                        name="subtitles" 
                        checked={true} 
                        active={true}
                    />
                    <div className={styles.saveSettings}>
                        <h2>Save choices</h2>
                        <p>Save your settings below to continue to Channel 4</p>
                        <div className={styles.btnWrap}>
                            <Button   btnText={'Allow All Settings'} />
                            <Button  btnText={'Save Settings'} />
                        </div>
                    </div>
                </div>
                

                
            </div>
            <div className={styles.exitCookies}>
                <PopUp 
                    title="Are you sure you want to exit?" 
                    message="Exiting means that your changes will not be saved" 
                    btnText="Cancel" 
                    secondaryBtnText="Exit" 
                    animate={true} 
                    animationTier="3" 
                    platform="bsd" 
                />
            </div>
            <div className={styles.thanksCookies}>
                <PopUp 
                    title="Thank you for saving your privacy settings" 
                    message="Thank you. We've saved your privacy settings. If you wish to amend these in the future, you can find them in Settings." 
                    btnText="Continue to Channel 4" 
                    animate={true} 
                    animationTier="3" 
                    platform="bsd" 
                />
            </div>


        </section>
    )
};

export default Cookies
