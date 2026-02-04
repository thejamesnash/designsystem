import { Player } from './Player';
// import data from '../../../../public/data/taskmaster.json';
//import data from '../../../../public/data/peepshowHubData.json';
import data from '../../../../public/data/gbbo.json';
const meta = {
    title: 'Design System/BSD/Pages/Player',
    component: Player,
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
        },
        state: {
            control:{
                type: 'select'
            },
            options: ["playback","showcontrols","more","endofplayback"]
        }
    },
    parameters: {
    
        design: {
            type: 'figma',
            url: 'https://www.figma.com/design/dfKGw1H0IG6rr5ab6wLPxy/BSD--Template-Library?node-id=9182-108717&m=dev',
        },
    },
    
};
export default meta;
export const Default = {
    parameters: {
    // layout:'centered'
    },
    args:{
        animate: true,
        animationTier: 3,
        data: data,
        platform: 'bsd',
        state: 'hero',
        showLogo: true,
        pageTitle: 'Tets',
        subTitle: 'This is more text'
    }
};

