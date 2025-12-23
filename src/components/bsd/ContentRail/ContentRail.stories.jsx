import { ContentRail } from './ContentRail';
import NowNextData from '../../../../public/data/nownext.json';
import HomePageData from '../../../../public/data/homepageData.json';
export default {
    title: 'Design System/BSD/Molecules/ContentRail',
    component: ContentRail,
    args: {
        animate: true,
        animationTier: 3,
        platform: 'bsd',
    }
}

export const Default = {
    parameters: {},
    args: {
        template: 'default',
        data: HomePageData.sliceGroups[0].slices[3]
    }
};

export const LiveTV = {
    parameters: {},
    args: {
        template: 'livetv',
        data: NowNextData
    }
};


