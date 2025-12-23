import { Rail } from './Rail';
import data from '../../../../public/data/slices.json';

const meta = {
    title: 'Design System/DotCom/Molecules/Rail',
    component: Rail,
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
    parameters: {},
    args: {
        data: data.slices[0],
        platform: 'dotcom',
        tileSize: 'xs',
        expanding: false,
        showRailBg: false,
        showEditorialLabel: false,
        showCategories: false,
        addToList: false,
        showRailTitle: false,
        showMetaBg: false
    }
};
export const Expanding = {
    parameters: {},
    args: {
        data: data.slices[0],
        platform: 'dotcom',
        tileSize: 'xs',
        expanding: true,
        showRailBg: false,
        showEditorialLabel: true,
        showCategories: true,
        addToList: true,
        showRailTitle: true,
        showMetaBg: true
    }
};
