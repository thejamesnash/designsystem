import React from 'react';
import styles from './PageTitle.module.css';

export const PageTitle = (props) => {
    return (
        <div className={styles.PageTitle} data-platform={props.platform} data-name="pageTitle" data-withshadow={props.withTextShadow}>
            <h2>
                {props.titleText} 
                {props.hasEmoji ? <span className={styles.emoji} aria-hidden="true">{props.hasEmoji}</span> : null}
            </h2>
            { props.subTitle ? <h3>{props.subTitle}</h3> : null }
            { props.moreText ? <p>{props.moreText}</p> : null }
        </div>
    )
};

export default PageTitle
