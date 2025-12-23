import { Splash } from './Splash';
const meta = {
    title: 'Design System/BSD/Molecules/Splash',
    component: Splash,
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
        size: {
            control:{
                type: 'select'
            },
            options: ["full","half","third"]
        },
        state: {
            control:{
                type: 'select'
            },
            options: ["playing","paused"]
        }
    }
};
export default meta;
export const Default = {
    parameters: {},
    args: {
        animate: true,
        animationTier: 3,
        platform: 'bsd'
    }
  };

