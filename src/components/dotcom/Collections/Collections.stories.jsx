import { Collections } from './Collections';
import data from '../../../../public/data/homepageData.json';
const meta = {
    title: 'Design System/DotCom/Collections',
    component: Collections,
};
export default meta;
export const Default = {
    parameters: {},
    args: {
        animate: true,
        animationTier: 3,
        platform: 'dotcom',
        data: data
    }
  };

