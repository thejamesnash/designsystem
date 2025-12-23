import { Grid } from './Grid';
import resultsData from '../../../../public/data/searchResults.json';
const meta = {
    title: 'Design System/BSD/Molecules/Grid',
    component: Grid,
    args:{
        animate: true,
        animationTier: 3,
        platform: 'bsd'
    }
};
export default meta;
export const Default = {
    parameters: {},
    args: {
        data: resultsData
    }
  };

