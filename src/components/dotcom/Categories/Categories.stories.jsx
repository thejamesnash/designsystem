import { Categories } from './Categories';
import data from '../../../../public/data/homepageData.json';
const meta = {
    title: 'Drops/Drop #3/Dotcom/Categories',
    component: Categories,
};
export default meta;
export const Default = {
    parameters: {},
    args: {
        animate: true,
        animationTier: 3,
        platform: 'dotcom',
        data: data,
        categoryData: {
        "title": "Categories",
        "type": "COLLECTION",
        "sliceItems": [
            {
                "title":"Audio Described",
                "url":"audio-described",
            },
            {
                "title":"Comedy",
                "url":"comedy"
            },
            {
                "title":"Documentaries",
                "url":"documentaries"
            },
            {
                "title":"Drama",
                "url":"drama"
            },
            {
                "title":"Entertainment",
                "url":"entertainment"
            },
            {
                "title":"Film",
                "url":"film"
            },
            {
                "title":"Lifestyle",
                "url":"lifestyle"
            },
            {
                "title":"News & Current Affairs",
                "url":"news-current-affairs-and-politics"
            },
            {
                "title":"Signed",
                "url":"signed"
            },
            {
                "title":"Sport",
                "url":"sport"
            },
            {
                "title":"World Drama",
                "url":"world-drama"
            },
            {
                "title":"Box Sets",
                "url":"boxsets"
            }
        ]
    }
    }
  };

