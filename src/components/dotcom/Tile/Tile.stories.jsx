import { Tile } from './Tile';
import data from '../../../../public/data/slices.json';

const meta = {
    title: 'Design System/DotCom/Molecules/Tile',
    component: Tile,
};
export default meta;
export const Default = {
    parameters: {},
    args: {
        data: data.slices[0].sliceItems[0],
        portrait: true
    }
  };
