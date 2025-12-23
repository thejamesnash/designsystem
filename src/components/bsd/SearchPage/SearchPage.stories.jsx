import { SearchPage } from './SearchPage';
import data from '../../../../public/data/homepageData.json';
import resultsData from '../../../../public/data/searchResults.json';
export default {
    title: 'Design System/BSD/Pages/Search',
    component: SearchPage,
    args:{
        animate: true,
        animationTier: 3,
        platform: 'bsd',
        data: data,
        signedin: true
    }
};
export const Landing = {
    parameters: {},
    args: {
        state: 'landing'
    }
};
export const Results = {
    parameters: {},
    args: {
        state: 'results',
        inputStr: 'BRIT',
        resultsData: resultsData
    }
};
export const NoResults = {
    parameters: {},
    args: {
        state: 'results',
        inputStr: 'BQIT',
    }
};
export const SignedOut = {
    parameters: {},
    args: {
        state: 'landing',
        signedin: false
    }
};
