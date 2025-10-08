import { Hero } from './Hero';
import data from '../../../../public/data/slices.json';
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
        pageTitle: 'Welcome to Channel 4'
    }
};