import React from 'react';
import styles from './Keyboard.module.css';

export const Keyboard = (props) => {
    const handleKeyBoard = (evt) => {
        //console.log(evt.target.value);
        const btnIndex = evt.target.dataset.index;

        if( evt.key === 'Enter' ){
            const searchInput = document.querySelector('input[data-type="searchinput"]');
            if( evt.target.value === 'Delete' ){
                const searchString = searchInput.value;
                const newSearchString = searchString.slice(0, -1);
                searchInput.value = newSearchString;
            } else {
                let newCharacter = evt.target.value;
                if( evt.target.value === 'Space' ){
                    newCharacter = ' ';
                }
                let storedValue = searchInput.value;
                searchInput.value = `${storedValue}${newCharacter}`;
            }
        } else {
            if( evt.key === 'ArrowDown' ){
                let targetKey;
                if( btnIndex > 1 && btnIndex < 32 ){
                    //console.log('Second row');
                    targetKey = document.querySelector(`button[data-type="searchKey"][data-index="${Number(btnIndex)+6}"]`);
                } else if( btnIndex == 0 || btnIndex == 1){
                    targetKey = document.querySelector(`button[data-type="searchKey"][data-index="2"]`);
                } else if( btnIndex > 31 && btnIndex < 38 ){
                    targetKey = document.querySelector(`button[data-type="searchKey"][data-index="0"]`);
                }
                targetKey.focus({preventFocus:true});
            }
            if( evt.key === 'ArrowUp' ){
                let targetKey;
                if( btnIndex > 6 && btnIndex < 38 ){
                    //console.log('Second row');
                    targetKey = document.querySelector(`button[data-type="searchKey"][data-index="${Number(btnIndex)-6}"]`);
                } else if( btnIndex == 0 || btnIndex == 1){
                     targetKey = document.querySelector(`button[data-type="searchKey"][data-index="32"]`);
                } else if( btnIndex > 1 && btnIndex < 5 ){
                    targetKey = document.querySelector(`button[data-type="searchKey"][data-index="0"]`);
                } else if(btnIndex > 4 && btnIndex < 7){
                    targetKey = document.querySelector(`button[data-type="searchKey"][data-index="1"]`);
                }
                // else if( btnIndex == 0 || btnIndex == 1){
                //     targetKey = document.querySelector(`button[data-type="searchKey"][data-index="2"]`);
                // } else if( btnIndex > 31 && btnIndex < 38 ){
                //     targetKey = document.querySelector(`button[data-type="searchKey"][data-index="0"]`);
                // }
                targetKey.focus({preventFocus:true});
            }
            if( evt.key === 'ArrowRight' ){
                let allowMove = true;
                if( btnIndex == 1 || btnIndex == 7 || btnIndex == 13 || btnIndex == 19 || btnIndex == 25 || btnIndex == 31 || btnIndex == 37   ){
                    allowMove = false;
                }
                if( allowMove ){
                    evt.target.nextElementSibling.focus({preventScroll: true});
                }
            }
            if( evt.key === 'ArrowLeft' ){
                let allowMove = true;
                if( btnIndex == 0 || btnIndex == 2 || btnIndex == 8 || btnIndex == 14 || btnIndex == 20 || btnIndex == 26 || btnIndex == 32   ){
                    allowMove = false;
                }
                if( allowMove ){
                    evt.target.previousElementSibling.focus({preventScroll: true});
                }
            }
        }
    };
    const keyboardBtnData = props.data;
    return (
        <div className={styles.keyboard} data-platform={props.platform} data-type={props.type}>
            {keyboardBtnData.map(function(data,i) {
                return (
                    <button data-index={i} data-type="searchKey" className={styles.key} value={data} onKeyUp={handleKeyBoard}>{data}</button>
                )
            })}    
        </div>
    )
};

export default Keyboard
