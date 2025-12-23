import { Hero } from './Hero';
import data from '../../../../public/data/heroSlices.json';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
const meta = {
    // title: 'Design System/DotCom/Components/Hero',
    title: 'Drops/Drop #1/DotCom/Hero',
    component: Hero,
};
export default meta;
export const Default = {
    parameters: {
        
    },
    args: {
        animate: false,
        animationTier: 0,
        platform: 'dotcom',
        data: data.slices[0],
        pageTitle: 'Welcome to Channel 4',
        multiItem: true
    }
};
export const SingleItem = {
    parameters: {
        
    },
    args: {
        animate: false,
        animationTier: 0,
        platform: 'dotcom',
        data: data.slices[0],
        review: true,
        breadcrumbs: [
    {
        "title": "Home",
        "url": "#",
        "selected": false
    },{
        "title": "This show",
        "selected": true
    }
]

    }
};