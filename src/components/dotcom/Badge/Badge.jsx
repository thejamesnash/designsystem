import styles from './Badge.module.css';
import Icon from '../../global/Icon/Icon.jsx';

export const Badge = (props) => {
    return (
        <p 
          data-bg={props.badgeBg} 
          className={styles.badge} 
          data-icon={props.badgeIcon} 
          data-iconposition={props.badgeIconPosition} 
        >
            {props.badgeText}
        </p>
    )
}
export default Badge;