import { LiveTV } from './LiveTV';
import data from '../../../../public/data/nownext.json';

export default {
    title: 'Design System/BSD/Pages/LiveTV',
    component: LiveTV,
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

