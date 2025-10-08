import { Rail } from '../Rail/Rail.jsx';
// import data from '../../../../public/data/taskmaster.json';
import data from '../../../../public/data/homepageData.json';
const meta = {
    title: 'DROPS/Drop #1/BSD/Hero',
    component: Rail,
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
        data: data.sliceGroups[0].slices[0],
        platform: 'bsd',
    }
};

