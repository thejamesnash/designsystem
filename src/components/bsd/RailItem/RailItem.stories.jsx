import { RailItem } from './RailItem';
import data from '../../../../public/data/homepageData.json';
import catNavData from '../../../../public/data/categoriesNavigation.json';
import collectionsNavData from '../../../../public/data/collectionsNavigation.json';
import searchResults from '../../../../public/data/searchResults.json';
export default {
    title: 'Design System/BSD/Molecules/RailItem',
    component: RailItem,
    args: {
        animate: true,
        animationTier: 3,
        platform: 'bsd',
        size: 'small',
        orientation: '169',
        type: 'brand'
    },
    argTypes: {
        size: {
            control:{
                type: 'select'
            },
            options: ["small","large"]
        },
        orientation: {
            control:{
                type: 'select'
            },
            options: ["169","34"]
        }
    },
    parameters: {
        layout: "centered"
    }
}

export const Brand = {
    parameters: {},
    args: {
        data: data.sliceGroups[0].slices[1].sliceItems[0],
        showMeta: true,
        index: 0,
        type: 'brand'
    }
};
export const Episode = {
    parameters: {},
    args: {
        data: data.sliceGroups[0].slices[2].sliceItems[0],
        showMeta: true,
        index: 0,
        type: 'episode'
    }
};
export const WatchNow = {
    parameters: {},
    args: {
        data: data.sliceGroups[0].slices[23].sliceItems[0],
        showMeta: true,
        index: 0,
        type: 'slot',
        progress: true,
        channelLogo: true,
        size: 'large'
    }
};
export const Categories = {
    parameters: {},
    args: {
        data: catNavData.sliceItems[1],
        index: 0,
        type: 'categories'
    }
};
export const Collections = {
    parameters: {},
    args: {
        data: collectionsNavData.sliceItems[5],
        index: 0,
        showMeta: true,
    }
};
export const Portrait = {
    parameters: {},
    args: {
        data: data.sliceGroups[0].slices[7].sliceItems[2],
        index: 0,
        showMeta: true,
        orientation: 34
    }
};
export const Top10 = {
    parameters: {},
    args: {
        data: data.sliceGroups[0].slices[10].sliceItems[2],
        index: 0,
        showMeta: true,
        orientation: 34,
        top10: true
    }
};
export const SearchResult = {
    parameters: {},
    args: {
        data: searchResults.slices[0].sliceItems[1],
        index: 0,
        type: 'searchResult'
    }
};

