import { Keyboard } from './Keyboard';

export default {
   title: 'Design System/BSD/Molecules/Keyboard',
    component: Keyboard,
     parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/design/kxGwBgOIMEXGclFy7SM5R7/BSD---Component-Library?node-id=666-12675&m=dev',
        },
    },
};
export const Search = {
    parameters: {},
    args: {
        animate: true,
        animationTier: 3,
        platform: 'bsd',
        type: 'search',
        data: ['Delete', 'Space','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9','0']
    }
};
export const Full = {
    parameters: {},
    args: {
        animate: true,
        animationTier: 3,
        platform: 'bsd',
        type: 'full',
        data: ['1','2','3','4','5','6','7','8','9','0','#+?','A','B','C','D','E','F','G','H','I','J','ABC','K','L','M','N','O','P','Q','R','S','T','Delete','U','V','W','X','Y','Z','-','_','.','@','Clear All','@gmail','@hotmail','@yahoo','.com','.co.uk','<','>']

    }
};

