import React from 'react';
import styles from './Channel4Plus.module.css';
import Header from '../Header/Header';
import Button from '../Button/Button';
import Logo from '@/components/global/Logos/Logo';
import Icon from '@/components/global/Icon/Icon';
export const Channel4Plus = (props) => {
    return (
        <section className={styles.Channel4Plus} data-platform="bsd">
            <header>
                <div className={styles.logoWrapper}>
                    <Logo logoRef="C4PLUS" colour="primary" />
                </div>
                <h1>Binge more box sets</h1>
                <ul>
                    <li><span className={styles.tick}><Icon iconRef="tick" /></span><b>No Ads</b> Stream 1500 shows without interruption</li>
                    <li><span className={styles.tick}><Icon iconRef="tick" /></span><b>Early Access</b> Stream selected series, before anyone else</li>
                    <li><span className={styles.tick}><Icon iconRef="tick" /></span><b>Example</b> Stream selected series, before anyone else</li>
                </ul>
            </header>
            <div className={styles.upgradeContent}>
                <ul className={styles.btnWrap}>
                    <li>
                        <p><strong>Monthly</strong> <b>&pound;3.99</b></p>
                        <p>Lorem ipsum dolor sit amet cursus ultrices egestas sed</p>
                        <Button btnText="Sign up to Channel 4+ Monthly" type="nopadding" />
                    </li>
                    <li>
                        <p><strong>Annual</strong> <b>&pound;39.99</b></p>
                        <p>Lorem ipsum dolor sit amet cursus ultrices egestas sed</p>
                        <Button btnText="Sign up to Channel 4+ Annually" type="nopadding" />
                    </li>
                </ul>
                <Button btnText="Restore Purchase" type="text" />
                <p>&pound;3.99 a month or &pound;39.99 annually after free trial ends. You'll be billed automatically when the free trial ends unless you cancel it. Channel 4+ benefits available in UK only. Terms &amp; Conditions and Privacy Policy apply.</p>
                <p>*For contractual reasons some programmes contain ads or promotional trails for other programmes. Channel 4+ does not include Watch Live.</p>
            </div>
        </section>
    )
};

export default Channel4Plus
