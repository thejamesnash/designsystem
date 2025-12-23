import React from 'react';
import styles from './Footer.module.css';
import Logo from '../../global/Logos/Logo';

export const Footer = (props) => {
    return (
        <div className={styles.Footer}>
            <div className={styles.footerLinks}>
                <details className={styles.footerDetails}>
                    <summary>About Channel 4</summary>
                    <ul>
                        <li><a href="#">Annual Report</a></li>
                        <li><a href="#">Channel 4 News</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">4Careers</a></li>
                        <li><a href="#">4Corporate</a></li>
                        <li><a href="#">Channel 4 Sales</a></li>
                        <li><a href="#">Channel 4 Ventures</a></li>
                    </ul>
                </details>

                <details className={styles.footerDetails}>
                    <summary>Help & Support</summary>
                    <ul>
                        <li><a href="#">FAQ's</a></li>
                        <li><a href="#">How to Watch</a></li>
                        <li><a href="#">Channel 4+</a></li>
                        <li><a href="#">Parental Control</a></li>
                        <li><a href="#">Accessibility</a></li>
                        <li><a href="#">Accessibility Statements</a></li>
                        <li><a href="#">4Viewers</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Help</a></li>
                    </ul>
                </details>

                <details className={styles.footerDetails}>
                    <summary>Collections</summary>
                    <ul>
                        <li><a href="#">Film4</a></li>
                        <li><a href="#">Walter Presents</a></li>
                    </ul>
                </details>

                <details className={styles.footerDetails}>
                    <summary>Policies &amp; Legal</summary>
                    <ul>
                        <li><a href="#">Terms &amp; Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Cookie Policy</a></li>
                        <li><a href="#">Manage Cookies</a></li>
                        <li><a href="#">Freedom of Information</a></li>
                    </ul>
                </details>
            </div>
            <div className={styles.logo}>
                <Logo logoRef={'C4'} colour="white" />
            </div>
            <p className={styles.smallText}>&copy; Channel Four Television Corporation 2025</p>
        </div>
    )
};

export default Footer
