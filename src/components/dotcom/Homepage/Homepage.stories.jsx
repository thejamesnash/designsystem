import { Homepage } from './Homepage';
import data from '../../../../public/data/homepageData.json';

const meta = {
    title: 'DROPS/Drop #1/Dotcom/Home Page',
    component: Homepage    
};
export default meta;
export const Default = {
    parameters: {},
    args: {
        data: data,
        platform: 'dotcom',
    }
  };
