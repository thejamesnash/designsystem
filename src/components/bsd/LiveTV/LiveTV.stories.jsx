import { LiveTV } from './LiveTV';
import data from '../../../../public/data/nownext.json';

export default {
    title: 'Design System/BSD/Pages/LiveTV',
    component: LiveTV,
     parameters: {
        layout: 'centered',
        design: {
            type: 'figma',
            url: 'https://www.figma.com/design/dfKGw1H0IG6rr5ab6wLPxy/BSD--Template-Library?node-id=17568-176764&m=dev',
        },
    },
    
}
export const Default = {
    parameters: {},
    args: {
        animate: true,
        animationTier: 3,
        platform: 'bsd',
        data: data
    }
  };

