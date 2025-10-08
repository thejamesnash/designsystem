import { Metadata } from './Metadata';
// import data from '../../../../public/data/taskmaster.json';
import data from '../../../../public/data/peepshowHubData.json';
const meta = {
    title: 'Design System/BSD/Molecules/Metadata',
    component: Metadata,
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
        data: data,
        platform: 'bsd',
        hideTitle: false,
        title: 'This is the title',
        editorialLabel: 'This is an editorial label',
        summary: "This is a summary. It can go onto two lines if needed. Sometimes it will. Sometimes it won't",
        hasGuidance: true,
        isAudioDescribed: true,
        isSigned: true,
        allSeriesCount: 10,
        categories: ['Category 1', 'Category 2']
    }
};

