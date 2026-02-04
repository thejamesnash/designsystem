import { App } from './App';
const meta = {
    title: 'Design System/BSD/App - in progress',
    component: App,
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
        appState: {
            control:{
                type: 'select'
            },
            options: ["loading","intro","qr","welcome"]
        }
    }
};
export default meta;
export const Default = {
    parameters: {},
    args: {
        animate: true,
        animationTier: 3,
        platform: 'bsd',
        appState: 'loading'
    }
  };

