import {React} from 'react';
import styles from './Header.module.css';
import PageTitle from '../PageTitle/PageTitle';
import AnimatedLogo from '../AnimatedLogo/AnimatedLogo.jsx';

export const Header = (props) => {
    return (
        <header 
          className={styles.Header} 
          data-platform="bsd" 
          data-hasbg={props.hasBg} 
          style={ props.headerBgImg ? {'--headerBgImg': `url(${props.headerBgImg})`} : null }  
          data-fixedheader={props.fixedHeader} 
          data-shortheader={props.shortHeader}
        >
            { props.showLogo === true ? 
                <div className={styles.logoWrapper}>
                    <AnimatedLogo logoState={0} />
                </div> 
            : null }
            <PageTitle 
                titleText={props.titleText} 
                moreText={props.moreText} 
                platform='bsd' 
                hasEmoji={props.hasEmoji}  
                withTextShadow={true} />
        </header>
    )
};

export default Header
