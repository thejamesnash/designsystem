import React, { useEffect } from 'react';
import styles from './MyShows.module.css';
import PageTitle from '../PageTitle/PageTitle';
import Rail from '../Rail/Rail';
import Button from '../Button/Button';
import AnimatedLogo from '../AnimatedLogo/AnimatedLogo';

export const MyShows = (props) => {

    useEffect(() => {
        console.log('My Shows');
        if( props.signedIn === true ){
            if( props.myShowsData ){
                document.querySelector('section[data-platform="bsd"] button').focus({preventScroll: true});
            } else if( props.continueWatchingData ){
                document.querySelector('section[data-platform="bsd"] a').focus({preventScroll: true});
            } else if( props.continueWatchingData && props.myShowsData ){
                document.querySelector('section[data-platform="bsd"] a').focus({preventScroll: true});
            } else {
                document.querySelector('section[data-platform="bsd"] button').focus({preventScroll: true});
            }
        } else {
            document.querySelector('section[data-platform="bsd"] button').focus({preventScroll: true});    
        }
        
        
    }, []);

    return (
        <section className={styles.MyShows} data-platform="bsd">
            {props.showLogo ? 
          <div className={styles.logoWrapper}>
            <AnimatedLogo logoState={0} />
          </div> 
        : null}

        

            <div className={styles.scrollWrapper}>
                { props.signedIn ? 
                    <>
                        { props.continueWatchingData ? 
                            <Rail data={props.continueWatchingData} index={0} platform="bsd" overrideTitle="Hi Kieran"  noPadding />
                        :   <div className={styles.noDataPanel}>
                                <div className={styles.header}>
                                    <h2>Hi Kieran <span className={styles.emoji}>a</span></h2>
                                    <p>Continue Watching your favourites here&hellip;</p>
                                </div>
                                <p>We're not offended.. though you haven't watched anything yet. Resume unfinished shows and see new available episodes here.</p>
                                <Button btnText={'Find shows to watch'} />
                            </div> 
                        }
                        { props.myShowsData ? 
                            <Rail data={props.myShowsData} index={0} platform="bsd" overrideTitle="My List" noPadding  />
                        :  <div className={styles.noDataPanel}>
                                <div className={styles.header}>
                                    <h2>My List</h2>
                                </div>
                                <p>Shows you’ve added to your list will appear here</p>
                                <Button btnText={'Find shows to watch'} />
                            </div> 
                        }
                    </>
        
                    :       <div className={styles.noDataPanel}>
                                <div className={styles.header}>
                                    <h2>Hello?</h2>
                                    <p>Continue Watching your favourites here&hellip;</p>
                                </div>
                                <p>Sign in or Register now to see your Continue Watching and My List</p>
                                <Button btnText={'Sign In'} />
                            </div> 
                }
            </div>
            
        </section>
    )
};

export default MyShows
