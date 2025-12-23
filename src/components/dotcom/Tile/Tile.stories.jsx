import { Tile } from './Tile';
import data from '../../../../public/data/slices.json';

const meta = {
    title: 'Design System/DotCom/Molecules/Tile',
    component: Tile,
     argTypes:{
        tileSize: {
            control:{
                type: 'select'
            },
            options: ['xs','s','m','l','xl']
        }
    }
};
export default meta;
export const Default = {
    parameters: {
        
    },
    args: {
        data: data.slices[0].sliceItems[0],
        platform: 'dotcom',
        tileSize: 's',
        progressValue:50,
        progressTotal:120,
        hideTitle: true,
        showMetaBg: false
    }
  };
  export const Expanding = {
    parameters: {
        
    },
    args: {
        data: data.slices[0].sliceItems[0],
        platform: 'dotcom',
        tileSize: 's',
        expanding: true,
        addToList: true,
        showCategories: true,
        showEditorialLabel: true,
        showMetaBg: true
    }
  };
