import React from 'react';
import styles from './Episode.module.css';
import Rail from '../Rail/Rail';
import Hero from '../Hero/Hero';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import Banner from '../Banner/Banner';
import TabMenu from '../TabMenu/TabMenu';

export const Episode = (props) => {
    return (
         <>
            <Navigation />
            <main className={styles.Episode}>
                <Hero data={props.data.sliceGroups[0].slices[0]} review={true}  />
                <section className={styles.episodesWrapper}>
                    <div className={styles.seriesSelector}>
                        <TabMenu navigationItems={props.navigationItems} />
                    </div>
                        <Rail 
                            data={props.data.sliceGroups[0].slices[2]} 
                            platform='dotcom' 
                            tileSize='xs' 
                            showMetaBg={false} 
                        />
                </section>
                
                
                <Banner 
                    bannerLogo="C4PLUS" 
                    bannerTitle="Banner Title"  
                    bannerSubTitle="Banner Subtitle" 
                    bannerText="Ad aliqua qui quis consequat ut anim exercitation ullamco ut mollit amet. Sint esse excepteur dolor excepteur non sunt incididunt id excepteur reprehenderit." 
                    bannerPrimaryCTAText="Primary CTA" 
                    bannerPrimaryCTAHref="#" 
                    bannerSecondaryCTAText="Secondary CTA" 
                    bannerSecondaryCTAHref="#" 
                    bannerImageHref="../../../../images/plus.jpg"
                />
                <Rail 
                    data={props.data.sliceGroups[0].slices[4]} 
                    platform='dotcom' 
                    tileSize='m' 
                    showMetaBg={false} 
                    showRailBg={true} 
                    showRailTitle={true} 
                />
            </main>
            <Footer />
        </>
    )
};

export default Episode
