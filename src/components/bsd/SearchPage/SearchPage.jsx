import React,{useState, useRef, useEffect, useCallback} from 'react';
import styles from './SearchPage.module.css';
import Keyboard from '../Keyboard/Keyboard';
import PageTitle from '../PageTitle/PageTitle';
import Rail from '../Rail/Rail';
import Header from '../Header/Header';
import ContentRail from '../ContentRail/ContentRail';
import Grid from '../Grid/Grid';
import Button from '../Button/Button';

export const SearchPage = (props) => {
    const searchPageRef = useRef();
    return (
        <section 
          className={styles.SearchPage} 
          ref={searchPageRef} 
          data-animate={props.animate} 
          data-animationtier={props.animationTier} 
          data-platform="bsd" 
          data-state={props.state} 
          data-signedin={props.signedin}
        >
            <div className={styles.fixedHeader}>
                <Header 
                    titleText={`Search`}
                    platform="bsd" 
                    showLogo={true} 
                    withshadow={false}  
                    hasBg={false} 
                    fixedHeader={true} 
                    shortHeader={true}
                />
            </div>
             <div className={styles.searchContent}>
                <div className={styles.searchInputs}>
                    <p>Enter a title, actor or genre</p>
                    <input type="text" placeholder="Type to search" value={props.inputStr ? props.inputStr : null }/>
                    <Keyboard
                        animate={props.animate} 
                        animationTier={props.animationTier}
                        platform={props.platform} 
                        type="search" 
                        data={['Delete', 'Space','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9','0']}
                    />
                </div>
                <div className={styles.searchResults}>
                    <div className={styles.searchPreResults}>
                        { props.signedin ? 
                            <Rail data={props.data.sliceGroups[0].slices[5]} parent="search" showMeta size="small" noPadding titleScale={false} animate={props.animate} animationTier={props.animationTier} overrideTitle="Recent Searches" />
                        :  
                            <div className={styles.searchMsg}>
                                <h2>Recent searches</h2>
                                <p>We're searching high and low&hellip;<br/>
                                Sign in to jeep a history of your recent searches.</p>
                                <Button btnText="Sign In" />
                            </div>   
                        }
                        <Rail data={props.data.sliceGroups[0].slices[3]} parent="search" showMeta size="small" noPadding titleScale={false} overrideTitle={'Popular'} />
                    </div>
                    <div className={styles.searchUserResults}>
                        { props.resultsData ? 
                            <Grid data={props.resultsData} />
                        : 
                            <div className={styles.searchMsg}>
                                <h2>Awkward&hellip;</h2>
                                <p>We don’t have anything by that name&hellip;<br/>
                                &hellip;which is weird because we have A LOT of old shows</p>
                                <p>Please check for typos, try using different keywords, or use broader more general terms</p>
                            </div>
                        }
                    </div>
                     
                </div>
             </div>
            


        </section>
    )
};

export default SearchPage
