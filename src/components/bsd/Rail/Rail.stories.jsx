import { Rail } from './Rail';
import data from '../../../../public/data/slices.json';
const meta = {
    title: 'Design System/BSD/Molecules/Rail',
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
        data: data.slices[3],
        platform: 'bsd'
    }
};
export const ContinueWatching = {
    parameters: {
    // layout:'centered'
    },
    args:{
        animate: true,
        animationTier: 3,
        data: data.slices[1],
        platform: 'bsd'
    }
};

