import React from 'react';
import styles from './TVGuide.module.css';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
export const TVGuide = (props) => {
    return (
        <>
            <Navigation />
            <main className={styles.TVGuide}>
                
            </main>
            <Footer />
        </>
    )
};

export default TVGuide
