import { BrandPage } from './BrandPage';
import data from '../../../../public/data/homepageData.json';

const meta = {
    title: 'DROPS/Drop #1/Dotcom/Brand Page',
    component: BrandPage
};
export default meta;
export const Default = {
    parameters: {},
    args: {
        data: data,
        platform: 'dotcom',
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
  };
