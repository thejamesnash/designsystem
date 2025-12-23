import React from 'react';
import styles from './Navigation.module.css';
import Icon from '../../global/Icon/Icon.jsx';
import Logo from '../../global/Logos/Logo.jsx';

export const Navigation = (props) => {
    return (
        <nav className={styles.Navigation}>
            <a href="/" className={styles.logo}>
                <Logo logoRef="C4" colour="primary" />
            </a>
            <a className="skipLink" href="#homePageContent">Skip to page content</a>
            <div className={styles.navLinks}>
                <ul>
                    <li>
                        <a href="#">
                            <span className={styles.navIcon}>
                                <Icon iconRef={'heart'} />
                            </span>
                            <span>My Shows</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className={styles.navIcon}>
                                <Icon iconRef={'livetv'} />
                            </span>
                            <span>Live TV</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className={styles.navIcon}>
                                <Icon iconRef={'categories2'} />
                            </span>
                            <span>Categories</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className={styles.userLinks}>
                <ul>
                    <li data-ref="upgrade">
                        <a href="#">
                            <span>Upgrade to Channel 4+</span>
                        </a>
                    </li>
                    
                    <li>
                        <button 
                            aria-label="Account menu"
                            aria-expanded="false"
                            aria-controls="account-menu"
                            id="account-toggle">
                                <span className={styles.navIcon}>
                                    <Icon iconRef={'user2'} />
                                </span>
                                <span className="visuallyHidden">Profile</span>
                            </button>
                    </li>
                    <li>
                        <a href="#">
                            <span className={styles.navIcon}>
                                <Icon iconRef={'search2'} />
                            </span>
                            <span className="visuallyHidden">Search</span>
                        </a>
                    </li>
                    <li data-ref="burger">
                        <button className={styles.burger}>
                            <span className={styles.navIcon}>
                                <b></b>
                                <b></b>
                                <b></b>
                                <b></b>
                            </span>
                            <span className="visuallyHidden">Menu</span>
                        </button>
                    </li>
                </ul>                
            </div>
            <div 
                    className={styles.dropdownMenu}
                    id="account-menu"
                    role="menu"
                    aria-label="Account menu"
                    data-open="false"
                >
                    <ul className={styles.menuList}>
                        <li role="none">
                            <a href="#"  role="menuitem">Account Settings</a>
                        </li>
                        <li role="none">
                            <a href="#" role="menuitem">Personal Details</a>
                        </li>
                        <li role="none">
                            <a href="#" role="menuitem">Channel 4+</a>
                        </li>
                        <li role="none">
                            <a href="#" role="menuitem">Parental Controls</a>
                        </li>
                        <li role="none">
                            <a href="#" role="menuitem">Sign Out</a>
                        </li>
                    </ul>
                </div>
        </nav>
    )
};

export default Navigation
