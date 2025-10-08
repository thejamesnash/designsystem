'use client';
import React, { useState, useEffect, useRef, useCallback, memo } from 'react';
import styles from './Search.module.css';
import Rail from '../Rail/Rail.jsx';
import { fetchSearchData } from '../../../functions/api.js';
import ResultsGrid from '../ResultsGrid/ResultsGrid';

// Memoized Results Component - only re-renders when results change
const SearchResults = memo(({ 
    searchResults, 
    inputValue, 
    isLoading, 
    searchError, 
    data, 
    animate, 
    animationTier 
}) => {
    console.log('🎨 SearchResults render - inputValue:', inputValue, 'hasResults:', !!searchResults);
    
    const shouldShowDefaultResults = !searchResults || inputValue.length < 3;
    const shouldShowUserResults = searchResults && inputValue.length >= 3;
    
    return (
        <div className={styles.searchResults}>
            {/* Show default results when no search or search term < 3 characters */}
            {shouldShowDefaultResults && (
                <div className={styles.searchDefaultResults}>
                    <Rail  
                        data={data.sliceGroups[0].slices[3]} 
                        animate={animate} 
                        animationTier={animationTier} 
                        index={0} 
                        platform='bsd' 
                        size="m" 
                        showMeta={'focus'} 
                        bg  
                        titleOverride="Recent Search" 
                        titleEmoji="a" 
                        parent="myshows" 
                    />
                    <Rail 
                        hideTitle={false} 
                        data={data.sliceGroups[0].slices[9]} 
                        animate={animate} 
                        animationTier={animationTier} 
                        index={1} 
                        platform='bsd' 
                        size="m" 
                        showMeta={'focus'} 
                        bg  
                        titleOverride="Most Popular" 
                        titleEmoji="a" 
                        parent="myshows" 
                    />
                </div>
            )}

            {/* Show search results when we have valid results */}
            {shouldShowUserResults && (
                <div className={styles.searchUserResults}>
                    {isLoading && <div>Searching...</div>}
                    {searchError && <div>Error: {searchError}</div>}
                    {!isLoading && !searchError && (
                        // <textarea 
                        //     readOnly 
                        //     value={JSON.stringify(searchResults, null, 2)}
                        //     style={{
                        //         width: '100%',
                        //         height: '400px',
                        //         fontFamily: 'monospace',
                        //         fontSize: '12px'
                        //     }}
                        // />
                        <ResultsGrid data={searchResults} />
                    )}
                </div>
            )}
        </div>
    );
});

SearchResults.displayName = 'SearchResults';

// Memoized Keyboard Component - never re-renders unless keyboardBtnData changes
const Keyboard = memo(() => {
    console.log('⌨️ Keyboard render');
    const keyboardBtnData = ['Delete', 'Space','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9','0'];

    return (
        <div className={styles.keyboard}>
            {keyboardBtnData.map(function(data, i) {
                return (
                    <button 
                        key={i} 
                        data-index={i} 
                        data-type="searchKey" 
                        className={styles.key} 
                        value={data}
                    >
                        {data}
                    </button>
                )
            })}
        </div>
    )
});

Keyboard.displayName = 'Keyboard';

export const Search = (props) => {
    console.log('🏠 Main Search component render');

    const [searchResults, setSearchResults] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [searchError, setSearchError] = useState(null);
    const [inputValue, setInputValue] = useState(''); // Track input value for display logic
    const searchInputRef = useRef(null);

    // Handle search API call when input changes and is > 3 characters
    const performSearch = useCallback(async (searchValue) => {
        console.log('🔍 performSearch called with:', searchValue);
        console.log('🔍 Search value length:', searchValue.length);
        
        if (searchValue.length >= 3) {
            console.log('✅ Search value >= 3, starting search...');
            setIsLoading(true);
            setSearchError(null);
            
            try {
                console.log(`🌐 Making API call for: ${searchValue}`);
                const results = await fetchSearchData(searchValue);
                console.log('✅ Search results received:', results);
                setSearchResults(results);
            } catch (error) {
                console.error('❌ Search error:', error);
                setSearchError(error.message);
                setSearchResults(null);
            } finally {
                console.log('🏁 Search completed, setting loading to false');
                setIsLoading(false);
            }
        } else {
            console.log('❌ Search value < 3, clearing results');
            // Clear results if search term is too short
            setSearchResults(null);
            setSearchError(null);
        }
    }, []);

    // Expose a global function for external keyboard to call
    useEffect(() => {
        window.updateSearchInput = (newValue) => {
            console.log('🌍 Global updateSearchInput called with:', newValue);
            setInputValue(newValue);
            // Also update the DOM input to keep it in sync
            if (searchInputRef.current) {
                searchInputRef.current.value = newValue;
            }
            
            // Trigger the search logic with debouncing
            console.log('🌍 Setting up search timeout from global function');
            clearTimeout(window.searchTimeout);
            window.searchTimeout = setTimeout(() => {
                console.log('⏰ Global search timeout fired, calling performSearch');
                performSearch(newValue);
            }, 300);
        };

        // Cleanup on unmount
        return () => {
            delete window.updateSearchInput;
        };
    }, [performSearch]);

    // Handle direct input changes - this will trigger the search
    const handleInputChange = useCallback((event) => {
        const searchValue = event.target.value;
        console.log('🎯 handleInputChange fired!');
        console.log('🎯 Input value:', searchValue);
        console.log('🎯 Input value length:', searchValue.length);
        
        // Update input value state for display logic
        setInputValue(searchValue);
        console.log('🎯 Updated inputValue state to:', searchValue);
        
        // Clear any existing timeout
        if (window.searchTimeout) {
            console.log('⏰ Clearing existing search timeout');
            clearTimeout(window.searchTimeout);
        }
        
        // Debounce the search to avoid too many API calls
        console.log('⏰ Setting new search timeout (300ms)');
        window.searchTimeout = setTimeout(() => {
            console.log('⏰ Search timeout fired, calling performSearch');
            performSearch(searchValue);
        }, 300);
    }, [performSearch]);

    return (
        <section className={styles.Search} data-platform="bsd" data-animate={props.animate}>
            <div className={styles.searchControls}>
                <input 
                    ref={searchInputRef}
                    className={styles.searchInput} 
                    data-type="searchinput" 
                    type="text" 
                    placeholder="Search by title, actor or genre"
                    onChange={handleInputChange}
                    defaultValue=""
                    onFocus={() => console.log('🎯 Input focused')}
                    onBlur={() => console.log('🎯 Input blurred')}
                />
                <Keyboard />
            </div>
            <SearchResults 
                searchResults={searchResults}
                inputValue={inputValue}
                isLoading={isLoading}
                searchError={searchError}
                data={props.data}
                animate={props.animate}
                animationTier={props.animationTier}
            />
        </section>
    )
};

export default React.memo(Search);