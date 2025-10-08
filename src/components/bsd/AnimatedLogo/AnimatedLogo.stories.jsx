import { AnimatedLogo } from './AnimatedLogo';
const COMPONENT_VERSION = '1.2.3';
const CHANGELOG = [
  { version: '1.2.3', changes: 'Added dark mode support' },
  { version: '1.2.0', changes: 'Added size variants' },
  { version: '1.1.0', changes: 'Initial release' }
];

const meta = {
    title: 'Design System/BSD/Atoms/AnimatedLogo',
    component: AnimatedLogo,
    componentVersion: COMPONENT_VERSION,
    changelog: CHANGELOG,
    docs: {
      description: {
        component: `
            ## Version ${COMPONENT_VERSION}
            ### Recent Changes
            ${CHANGELOG.slice(0, 3).map(item => `- **v${item.version}**: ${item.changes}`).join('\n')}
            `
      },
    },
    argTypes:{
        logoState: {
            control:{
                type: 'select'
            },
            options: [1,'infinite']
        },
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
        layout:'centered'
    },
    args:{
        logoState: 1,
        animate: true,
        animationTier: 3
    }
  };



