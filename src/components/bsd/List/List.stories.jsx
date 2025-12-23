import { List } from './List';
import data from '../../../../public/data/homepageData.json';


export default {
    title: 'Design System/BSD/Molecules/List',
    component: List,
};
export const Small = {
    parameters: {},
    args: {
        animate: true,
        animationTier: 3,
        platform: 'bsd',
        data: data.sliceGroups[0].slices[4],
        size: 'small'
    }
};
export const Medium = {
    parameters: {},
    args: {
        animate: true,
        animationTier: 3,
        platform: 'bsd',
        data: data.sliceGroups[0].slices[4],
        size: 'medium'
    }
};

