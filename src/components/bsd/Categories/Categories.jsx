import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useAppState } from '../../../context/AppContext'; // Update path as needed
import Header from '../Header/Header.jsx';
import Icon from '../../global/Icon/Icon.jsx';
import Button from '../Button/Button.jsx';
import Meta from '../Meta/Meta.jsx';
import Rail from '../Rail/Rail.jsx';
import { returnImg } from '../../../functions/returnImg';
import styles from './Categories.module.css';
import dramaData from '../../../../../public/data/platform/drama-signed.json';
import homeData from '../../../../../public/data/platform/bsdHome.json';

export const Categories = (props) => {
    // Get context data
    const { categoryData, fetchAndSetCategoryData } = useAppState();
    
    const [catData, setCatData] = useState(null);
    const [catPageState, setCatPageState] = useState('landing');
    const [showfilterPanel, setShowfilterPanel] = useState(false);
    const [filteredData, setFilteredData] = useState(dramaData.sliceGroups[0].slices);
    const [editorialData1,setEditorialData1] = useState(null);
    const [editorialData2,setEditorialData2] = useState(null);
    const [editorialData3,setEditorialData3] = useState(null);

    const catPageRef = useRef();

    const catLandingData = {
        "title": "Categories",
        "type": "COLLECTION",
        "sliceItems": [
            {
                "title":"Audio Described",
                "url":"audio-described",
            },
            {
                "title":"Comedy",
                "url":"comedy"
            },
            {
                "title":"Documentaries",
                "url":"documentaries"
            },
            {
                "title":"Drama",
                "url":"drama"
            },
            {
                "title":"Entertainment",
                "url":"entertainment"
            },
            {
                "title":"Film",
                "url":"film"
            },
            {
                "title":"Lifestyle",
                "url":"lifestyle"
            },
            {
                "title":"News & Current Affairs",
                "url":"news-current-affairs-and-politics"
            },
            {
                "title":"Signed",
                "url":"signed"
            },
            {
                "title":"Sport",
                "url":"sport"
            },
            {
                "title":"World Drama",
                "url":"world-drama"
            },
            {
                "title":"Box Sets",
                "url":"boxsets"
            }
        ]
    }


    // Update local state when context categoryData changes
    useEffect(() => {
        if (categoryData) {
            console.log(categoryData);
            console.log('Category data updated from context:', categoryData);
            setCatData(categoryData);
            let rawEditoriaData1 = {
                title: 'tets',
                sliceItems: categoryData.sliceGroups[0].slices[0].sliceItems.slice(1,5)
            };
            setEditorialData1(rawEditoriaData1);
            let rawEditoriaData2 = {
                title: 'Most Popular',
                sliceItems: categoryData.sliceGroups[0].slices[0].sliceItems.slice(6,12)
            };
            setEditorialData2(rawEditoriaData2);
            let rawEditoriaData3 = {
                title: 'Recommended for you',
                sliceItems: categoryData.sliceGroups[0].slices[0].sliceItems.slice(13,19)
            };
            setEditorialData3(rawEditoriaData3);
            // Update filteredData if needed
            if (categoryData.sliceGroups && categoryData.sliceGroups[0]) {
                setFilteredData(categoryData.sliceGroups[0].slices[0].sliceItems);
            }
        }
    }, [categoryData]);

    useEffect(() => {
        console.log('catPageRef data changed - useEffect Triggered');
        if (catPageRef.current?.querySelector('button')) {
            catPageRef.current.querySelector('button').dataset.active = true;
            catPageRef.current.querySelector('button').dataset.history = true;
        }
    }, []); 

    const returnEmoji = (emojiStr) => {
        switch (emojiStr) {
            case 'Audio Described':
                return '';
            case 'Comedy':
                return 'm';
            case 'Drama':
                return 'h';
            case 'Films':
                return 'n';
            case 'World Drama':
                return 'h';
            case 'Documentaries':
                return 'g';
            case 'Entertainment':
                return 'e';
            case 'Lifestyle':
                return 'j';
            default:
                return '';
        }
    }

    const ResultsGrid = () => {
        console.log(filteredData);
        let thisData = filteredData;
        if( filteredData[0].hasOwnProperty('sliceItems') ){
            console.log('Is array');
            thisData = filteredData[0].sliceItems
        }
         
        return (
            
            <>
                {thisData.map(function(data, i) {
                    return (
                        <button data-type="railResultBtn" data-index={i} key={i}>
                            <img src={returnImg(data.image.href, 304, 171)} alt="" />
                            <div>
                                <h3>{data.title}</h3>
                                <p>{data.brand.shortSummary}</p>
                                <Meta brandData={data.brand} type="cats" />
                            </div>
                        </button>
                    )
                })} 
            </>
            
        )
    } 

    const showFilters = () => {
        setShowfilterPanel(true);
        setTimeout(() => {
            const filterBtn = document.querySelector('button[data-filter="audioDescribedStatus"]');
            if (filterBtn) {
                filterBtn.focus({preventScroll: true});
            }
        }, 0);
    };

    const  capitalizeWords = (str) => {
        const catPage = document.querySelector('section[data-catstate]');
        const cat = catPage.dataset.currentcat;
        const filter = catPage.dataset.currentfilter;
        console.log(cat);
        console.log(filter);
        if( cat === 'drama' && filter === 'signed' ){
            return 'Drama'
        }
        
        let newStr = str.replace('-',' ');
        return newStr.replace(/\b\w/g, char => char.toUpperCase());
    }

    return (
        <section className={styles.Categories} data-catstate={catPageState} data-animate={props.animate} data-animationtier={props.animationTier} data-platform="bsd" data-showfilters={showfilterPanel} ref={catPageRef} data-currentcat={'comedy'} data-currentfilter="none">

            <div className={styles.landing} data-name="catLanding">
                <Rail data={catLandingData} index={0} animate={props.animate} animationTier={props.animationTier} template="catTrigger" />
                <Rail titleOverride={'Collections'} template={'featured'} data={homeData.slices[11]} index={1} animate={props.animate} animationTier={props.animationTier} />
                <Rail data={homeData.slices[4]} index={2} animate={props.animate} animationTier={props.animationTier} />
            </div>
            
            <div className={styles.categoryLanding}>
                <Header 
                    titleText={ categoryData ? capitalizeWords(categoryData.tracking.secondLevel) : 'unset'}
                    moreText={ categoryData ? `${categoryData.page.totalResults}` : 'unset' } 
                    platform="bsd" 
                    hasEmoji={ categoryData ?  returnEmoji(capitalizeWords(categoryData.tracking.secondLevel)) : 'unset'} 
                    showLogo={false} 
                    withshadow={true}  
                    hasBg={true}
                />
                <div className={styles.filterBtn} data-name="catFilterBtnWrap">
                    <Button btnText="Access Services" withIcon="filter" onClick={showFilters} type="catFilterPanelBtn" animate={props.animate} animationTier={props.animationTier} />
                </div>
                <div className={styles.categoryResults}>
                    
                    <div className={styles.results} data-name="catEditorial">
                        { editorialData1 && (
                            <Rail hideTitle={true} data={editorialData1}  template="categoryEditorial" index={0} animate={props.animate} animationTier={props.animationTier} />
                        )}
                        { editorialData2 && (
                            <Rail data={editorialData2} template="categoryEditorialSmall" index={1} animate={props.animate} animationTier={props.animationTier} />
                        )}
                        { editorialData3 && (
                            <Rail data={editorialData3} template="categoryEditorial" index={2} animate={props.animate} animationTier={props.animationTier} />
                        )}
                    </div>
                    <div className={styles.resultsGrid} data-name="catGrid">
                        { filteredData ? 
                            <div className={styles.resultsGridWrapper}>
                                <ResultsGrid />
                            </div>
                         : null }
                    </div>
                    
                </div>
                <div className={styles.resultsFilter}>
                        <h2>Filter By</h2>
                        <div className={styles.resultsFilterBtns}>
                            <button data-category={'comedy'} data-filter="audio-described" data-type="catFilter"><b><Icon iconRef="tick" /></b><Icon iconRef="audiodesc" /><span>Audio Described</span></button>
                            <button data-category={'comedy'} data-filter="signed" data-type="catFilter"><b><Icon iconRef="tick" /></b><Icon iconRef="bsl" /><span>Signed</span></button>
                            <button data-category={'comedy'} data-filter="subtitled" data-type="catFilter"><b><Icon iconRef="tick" /></b><Icon iconRef="subtitles" /><span>Subtitled</span></button>
                            <button data-category={'comedy'} data-filter="none" data-type="catFilter"><b><Icon iconRef="tick" /></b><span>Show All</span></button>
                        </div>
                    </div>
            </div>            
        </section>
    )
};


export default React.memo(Categories);