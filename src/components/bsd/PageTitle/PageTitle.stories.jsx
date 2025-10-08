import { PageTitle } from './PageTitle';
const meta = {
    title: 'Design System/BSD/Molecules/PageTitle',
    component: PageTitle,
};
export default meta;
export const Default = {
    parameters: {},
    args: {
        titleText: 'This is a title',
        subTitle: 'This is a subtitle',
        moreText: 'This is more text in a paragraph',
        platform: 'bsd',
        hasEmoji: 'a',
        withTextShadow: false
    }
};

