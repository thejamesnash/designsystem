import React from 'react';
import styles from './Categories.module.css';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header';
import Rail from '../Rail/Rail';


export const Categories = (props) => {
    return (
        <>
            <Navigation />
            <main className={styles.Categories}>
                <Header
                  pageTitle='Categories' 
                  pageDescription='Looking for something to watch? Stream 100s of series and films' 
                  breadcrumbs={[{
                      "title": "Home",
                      "url": "#",
                      "selected": false
                    },{
                      "title": "Categories",
                      "url": "#",
                      "selected": false
                    }]} 
                />
                <Rail data={props.categoryData} iconRail tileSize="xs"/>
                <Rail data={props.data.sliceGroups[0].slices[15]} tileSize="l" expanding showRailTitle showRailBg />
                <Rail data={props.data.sliceGroups[0].slices[1]} tileSize="s" expanding showRailTitle  />
            </main>
            <Footer />
        </>
    )
};

export default Categories
