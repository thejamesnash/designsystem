import { Rail } from './Rail';
import data from '../../../../public/data/homepageData.json';
import catNavData from '../../../../public/data/categoriesNavigation.json';
import collectionstNavData from '../../../../public/data/collectionsNavigation.json';
export default {
    title: 'Design System/BSD/Molecules/Rail',
    component: Rail,
    args: {
        animate: true,
        animationTier: 3,
        platform: 'bsd',
        size: 'small',
        orientation: '169',
        background: false
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
        design: {
            type: 'figma',
            url: 'https://www.figma.com/design/kxGwBgOIMEXGclFy7SM5R7/BSD---Component-Library?node-id=2959-24024&m=dev',
        },
    },
    
}

export const Brand = {
    args: {
        data: data.sliceGroups[0].slices[1],
        showMeta: true,
        railSubtitle: 'Fresh goodness!'
    }
}
export const Categories = {
    args: {
        data: catNavData,
        type: 'categories'
    }
}
export const Collections = {
    args: {
        data: collectionstNavData,
        showMeta: true
    }
}
export const WatchNow = {
    args: {
        data: data.sliceGroups[0].slices[23],
        showMeta: true,
        showMeta: true,
        type: "slot",
        size: "large",
        channelLogo: true
    }
}
export const Portrait = {
    args: {
        data: data.sliceGroups[0].slices[7],
        orientation: 34,
        showMeta: true
    }
}
export const Top10 = {
    args: {
        data: data.sliceGroups[0].slices[10],
        orientation: 34,
        showMeta: true,
        top10: true
    }
}