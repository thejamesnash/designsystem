import { Episode } from './Episode';
import data from '../../../../public/data/homepageData.json';
const meta = {
    title: 'Design System/DotCom/Episode',
    component: Episode,
};
export default meta;
export const Default = {
    parameters: {},
    args: {
        animate: true,
        animationTier: 3,
        platform: 'dotcom',
        data: data,
        navigationItems: [{
      "title": "Series 1",
      "panelId": "tabContent-1",
    },
    {
        "title": "Series 2",
        "panelId": "tabContent-2",
      },
      {
        "title": "Series 3",
        "panelId": "tabContent-3",
      },
      {
        "title": "Series 4",
        "panelId": "tabContent-4",
      }]
    }
    }


