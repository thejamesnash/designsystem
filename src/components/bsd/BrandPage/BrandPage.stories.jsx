import { BrandPage } from './BrandPage';
// import data from '../../../../public/data/taskmaster.json';
import data from '../../../../public/data/peepshowHubData.json';
const meta = {
    title: 'Design System/BSD/Pages/Brand Page',
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
        design: {
            type: 'figma',
            url: 'https://www.figma.com/design/dfKGw1H0IG6rr5ab6wLPxy/BSD--Template-Library?node-id=24837-112591&m=dev',
        },
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

