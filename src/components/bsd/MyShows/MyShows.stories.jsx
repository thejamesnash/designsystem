import { MyShows } from './MyShows';
import data from '../../../../public/data/homepageData.json';

export default {
    title: 'Design System/BSD/Pages/MyShows',
    component: MyShows,
    args:{
        showLogo: true,
        signedIn: true
    },
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/design/dfKGw1H0IG6rr5ab6wLPxy/BSD--Template-Library?node-id=11550-57595&m=dev',
        },
    },
};

export const NotSignedIn = {
    parameters: {},
    args: {
        animate: true,
        animationTier: 3,
        platform: 'bsd',
        signedIn: false
    }
};
export const NoShows = {
    parameters: {},
    args: {
        animate: true,
        animationTier: 3,
        platform: 'bsd',
        myShowsData: null,
        continueWatchingData: null,
    }
};
export const NoContinueWatching = {
    parameters: {},
    args: {
        animate: true,
        animationTier: 3,
        platform: 'bsd',
        myShowsData: data.sliceGroups[0].slices[1],
        continueWatchingData: null,
    }
};
export const NoMyShows = {
    parameters: {},
    args: {
        animate: true,
        animationTier: 3,
        platform: 'bsd',
        myShowsData: null,
        continueWatchingData: data.sliceGroups[0].slices[2],
    }
};
