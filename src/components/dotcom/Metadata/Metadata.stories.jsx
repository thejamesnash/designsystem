import { Metadata } from './Metadata';
import data from '../../../../public/data/slices.json';

const meta = {
    title: 'Design System/DotCom/Atoms/Metadata',
    component: Metadata,
};
export default meta;
export const Default = {
    parameters: {},
    args: {
        animate: true,
        animationTier: 3,
        data: data,
        platform: 'dotcom',
        hideTitle: false,
        title: 'This is the title',
        editorialLabel: 'This is an editorial label',
        summary: "This is a summary. It can go onto two lines if needed. Sometimes it will. Sometimes it won't",
        hasGuidance: true,
        isAudioDescribed: true,
        isSigned: true,
        allSeriesCount: 10,
        categories: ['Category 1', 'Category 2'],
        data: data.slices[0].sliceItems[0],
        progressValue: 50,
        progressTotal: 120
    }
  };
