import { HomePage } from './HomePage';
// import data from '../../../../public/data/taskmaster.json';
import data from '../../../../public/data/homepageData.json';
const meta = {
    title: 'Design System/BSD/Pages/Home Page',
    component: HomePage,
    argTypes:{
        animate: {
            control:{
                type: 'select'
            },
            options: [true,false]
        },
        animationTier: {
            control:{
                type: 'select'
            },
            options: [1,2,3]
        },
        hubState: {
            control:{
                type: 'select'
            },
            options: ["hero","series","more"]
        }
    }
};
export default meta;
export const Default = {
    parameters: {
    // layout:'centered'
    },
    args:{
        animate: true,
        animationTier: 3,
        data: data,
        platform: 'bsd',
        showLogo: true,
    }
};

