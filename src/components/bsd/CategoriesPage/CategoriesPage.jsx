import React,{useEffect,useState,useCallback} from 'react';
import styles from './CategoriesPage.module.css';
import Header from '../Header/Header';
import Rail from '../Rail/Rail';
import AnimatedLogo from '../AnimatedLogo/AnimatedLogo';
import Button from '../Button/Button';
import FilterMenu from '../FilterMenu/FilterMenu';

export const CategoriesPage = (props) => {
    const [editorialData1,setEditorialData1] = useState(null);
    const [editorialData2,setEditorialData2] = useState(null);
    const [editorialData3,setEditorialData3] = useState(null);
    
     useEffect(() => {
        if (props.resultsData) {
            
            
            let rawEditoriaData1 = {
                title: 'Entertainment',
                //sliceItems: props.resultsData.sliceGroups[0].slices.slice(1,5)
                sliceItems: props.editorialData.sliceItems.slice(1,5)
            };
            setEditorialData1(rawEditoriaData1);
            
            let rawEditoriaData2 = {
                title: 'Most Popular',
                //sliceItems: props.resultsData.sliceGroups[0].slices.slice(1,5)
                sliceItems: props.editorialData.sliceItems.slice(6,12)
            };
            setEditorialData2(rawEditoriaData2);
            
            let rawEditoriaData3 = {
                title: 'Recommended for you',
                //sliceItems: props.resultsData.sliceGroups[0].slices.slice(1,5)
                sliceItems: props.editorialData.sliceItems.slice(13,19)
            };
            setEditorialData3(rawEditoriaData3);
            
            // let rawEditoriaData2 = {
            //     title: 'Most Popular',
            //     sliceItems: props.resultsData.sliceGroups[0].slices[0].sliceItems.slice(6,12)
            // };
            // setEditorialData2(rawEditoriaData2);
            // let rawEditoriaData3 = {
            //     title: 'Recommended for you',
            //     sliceItems: props.resultsData.sliceGroups[0].slices[0].sliceItems.slice(13,19)
            // };
            // setEditorialData3(rawEditoriaData3);
            // Update filteredData if needed
            
        }
    }, [props.resultsData]);
    
    useEffect(() => {
        document.querySelector('section[data-platform="bsd"] a').focus({preventScroll: true});
    }, []);

    const keyDownHandler = (event) => {
        
        const evt = event.key;
        const evtEl = event.target;
        if( evtEl.tagName === 'BODY' ){
            document.querySelector('section[data-platform="bsd"] a').focus()
        }
        console.log(evt);
        console.log(evtEl);
        const parentEl = evtEl.parentElement.parentElement.parentElement;
        let targetEl;
        if( evt === 'ArrowDown' ){
            targetEl = parentEl.nextElementSibling.querySelector('a');
        } else if( evt === 'ArrowUp' ){
            targetEl = parentEl.previousElementSibling.querySelector('a');
        }
        if( targetEl ){
            targetEl.focus({preventScroll:true});
        }
    }

    const handleKeyUp = useCallback((event) => {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
    }, []);

    const handleKeyDown = useCallback((event) => {
        event.preventDefault();
        event.stopPropagation();
        keyDownHandler(event);
    }, [keyDownHandler]); 

    useEffect(() => {
        console.log(document.querySelector('section.CategoriesPage a'));
        document.querySelector('a').focus({preventScroll:true});
        document.addEventListener('keydown', handleKeyDown, { capture: true });
        document.addEventListener('keyup', handleKeyUp, { capture: true });
        return () => {
            document.removeEventListener('keydown', handleKeyDown, { capture: true });
            document.removeEventListener('keyup', handleKeyUp, { capture: true });
        };
    }, [handleKeyDown, handleKeyUp]);

    return (
        <section className={styles.CategoriesPage} data-platform="bsd" data-animate={props.animate} data-state={props.state}>
            { props.showLogo ? <div className={styles.logoWrapper}><AnimatedLogo logoState={1} /></div> : null }
            <div className={styles.categoriesLanding}>
                {/* <Header 
                    titleText={``}
                    platform="bsd" 
                    showLogo={true} 
                    withshadow={false}  
                    hasBg={false} 
                    fixedHeader={true} 
                    shortHeader={true}
                /> */}
                <Rail data={props.categoriesData} animate={props.animate} />
                <Rail data={props.collectionsData} showMeta size="large" animate={props.animate} />
                <Rail data={props.data} showMeta overrideTitle="Popular" animate={props.animate} />
            </div>
            <div className={styles.categoriesResults}>
                { editorialData1 ? 
                <>
                    <Button btnText={'Accessibility Filters'} withIcon="filter" />
                    <div className={styles.resultsWrap}>
                        
                        <Rail data={editorialData1} showMeta size="large" animate={props.animate} railSubtitle="384 shows" railEmoji="e" />
                        <Rail data={editorialData2} showMeta size="small" animate={props.animate} />
                        <Rail data={editorialData3} showMeta size="small" animate={props.animate} />
                    </div>
                    <div className={styles.filtersMenu}>
                        <FilterMenu animate={props.animate}/>
                    </div>
                </>
                : null }
            </div>
            
        </section>
    )
};

export default CategoriesPage
