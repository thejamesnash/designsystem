import { Player } from './Player';
// import data from '../../../../public/data/taskmaster.json';
import data from '../../../../public/data/peepshowHubData.json';
const meta = {
    title: 'DROPS/Drop #1/BSD/Player Page',
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
    }
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

