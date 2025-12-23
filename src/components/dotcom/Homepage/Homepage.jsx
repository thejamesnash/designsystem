import React, { useState, useEffect, useRef } from 'react';
import styles from './Homepage.module.css';
import Rail from '../Rail/Rail';
import Hero from '../Hero/Hero';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';


export const Homepage = (props) => {
    
    return (
        <>
            <Navigation />
            <main className={styles.homepage}>
                <Hero data={props.data.sliceGroups[0].slices[0]} multiItem />
                <Rail data={props.data.sliceGroups[0].slices[1]} tileSize={'xs'} />
                <Rail data={props.data.sliceGroups[0].slices[2]} tileSize={'m'} />
                <Rail data={props.data.sliceGroups[0].slices[4]} tileSize={'xs'} />
            </main>
            <Footer />
        </>
    )
};

export default Homepage
