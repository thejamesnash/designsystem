import { Rail } from '../Railv1/Rail.jsx';
// import data from '../../../../public/data/taskmaster.json';
import data from '../../../../public/data/homepageData.json';
const meta = {
    title: 'Design System/BSD/Molecules/Hero',
    component: Rail,
    argTypes:{
        animate: {
            control:{
                type: 'select'
            },
            options: [true,false]
        },
        animationTier: {
            control:{
                type: 'select'
            },
            options: [0,1,2,3]
        }
    }
};
export default meta;
export const Default = {
     parameters: {
        
        design: {
            type: 'figma',
            url: 'https://www.figma.com/design/kxGwBgOIMEXGclFy7SM5R7/BSD---Component-Library?node-id=3685-85776&m=dev',
        },
    },
    args:{
        animate: true,
        animationTier: 3,
        data: data.sliceGroups[0].slices[0],
        platform: 'bsd',
    }
};

