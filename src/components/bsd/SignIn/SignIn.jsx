import React from 'react';
import styles from './SignIn.module.css';
import Button from '../Button/Button';
import Keyboard from '../Keyboard/Keyboard';

export const SignIn = (props) => {
    const keyboardBtnData = ['1','2','3','4','5','6','7','8','9','0','#+?','A','B','C','D','E','F','G','H','I','J','ABC','K','L','M','N','O','P','Q','R','S','T','Delete','U','V','W','X','Y','Z','-','_','.','@','Clear All','@gmail','@hotmail','@yahoo','.com','.co.uk','<','>']
    return (
        <div className={styles.SignIn}>
            <div className={styles.step}>
                <h1>Hey there, nice to see you, lets get to know each other <span className={styles.emoji}>e</span></h1>
                <div className={styles.btnWrap}>
                    <Button btnText="Sign in/ Register"  />
                    <Button btnText="Just browse"  />
                </div>
                <p>By continuing you confirm you accept the Terms and Conditions and you have read our Privacy Policy www.channel4.com/4viewers/policies-overview</p>
            </div>
            <div className={styles.step}>
                <h2>OK let's get you signed in <span className={styles.emoji}>d</span></h2>
                <div className={styles.instructions}>
                    <div className={styles.qrWrap}></div>
                    <ol>
                        <li>Scan QR code or visit channel4.com/code</li>
                        <li>Sign in or register</li>
                        <li>Enter this code: <b>280425</b></li>
                    </ol>
                </div>
                <Button btnText="Sign in with my TV" />
                <p>Code will refresh every X minutes</p>
            </div>
            <div className={styles.step}>
                <h2>Welcome Heather!</h2>
                <p>Enjoy your altogether different streaming experience <span className={styles.emoji}>d</span></p>
            </div>
            <div className={styles.step}>
                <h2>Sign In</h2>
                <p>
                    <label htmlFor='email'>Enter your email address</label>
                    <input type="email" id="email" placeholder="user@domain.com" />
                    <Button withIcon="add" />
                </p>
                <Keyboard type="full" data={keyboardBtnData} platform="bsd" />
                <div className={styles.pagination}>
                    <Button btnText="Back" withIcon="chevron" />
                    <Button btnText="Next" withIcon="chevron" />
                </div>
            </div>
        </div>
    )
};

export default SignIn
