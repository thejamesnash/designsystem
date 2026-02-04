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
    parameters: {
      
        design: {
            type: 'figma',
            url: 'https://www.figma.com/design/kxGwBgOIMEXGclFy7SM5R7/BSD---Component-Library?node-id=3699-52956&m=dev',
        },
    },
    args: {
        data: resultsData
    }
  };

