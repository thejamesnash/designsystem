import { BrandPage } from './BrandPage';
// import data from '../../../../public/data/taskmaster.json';
import data from '../../../../public/data/peepshowHubData.json';
const meta = {
    title: 'DROPS/Drop #1/BSD/Brand Page',
    component: BrandPage,
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
            options: [0,1,2,3]
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
        hubState: 'hero',
        showLogo: true,
        // pageTitle: 'Extra title',
        // subTitle: 'Extra title supplementary text'
    }
};

