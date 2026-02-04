import { PopUp } from './PopUp';
export default {
    title: 'Design System/BSD/Molecules/PopUp',
    component: PopUp,
    parameters: {

        design: {
            type: 'figma',
            url: 'https://www.figma.com/design/kxGwBgOIMEXGclFy7SM5R7/BSD---Component-Library?node-id=9868-49480&m=dev',
        },
    },
    
}

export const Error = {
    parameters: {},
    args: {
        hasIcon: 'error',
        title: 'No internet connection',
        subtitle: 'Error Code: 0001',
        message: 'Please connect to Wi-Fi in order to use Channel 4.',
        btnText: 'Back',
        animate: true,
        animationTier: 3,
        platform: 'bsd'
    }
  };
  export const Greeting = {
    parameters: {},
    args: {
        hasIcon: 'wave',
        title: 'Welcome Kieran! Enjoy Channel4 on your TV',
        message: 'Start to stream the best British TV shows, hit US series, True Crime, world drama, live sport and more.',
        btnText: 'Back',
        animate: true,
        animationTier: 3,
        platform: 'bsd'
    }
  };

   export const Thanks = {
    parameters: {},
    args: {
        title: 'Thank you for saving your privacy settings',
        message: 'Thank you. We’ve saved your privacy settings. If you wish to amend these in the future, you can find them in Settings.',
        btnText: 'Continue to Channel 4',
        animate: true,
        animationTier: 3,
        platform: 'bsd'
    }
  };
  export const Exit = {
    parameters: {},
    args: {
        title: 'Are you sure you want to exit?',
        message: 'Exiting means that your changes will not be saved',
        btnText: 'Cancel',
        secondaryBtnText: 'Exit',
        animate: true,
        animationTier: 3,
        platform: 'bsd'
    }
  };

