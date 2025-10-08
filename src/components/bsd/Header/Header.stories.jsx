import { Header } from './Header';
const meta = {
    title: 'Design System/BSD/Molecules/Header', 
    component: Header,
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
        showLogo: true,
        withshadow: true,
        hasBg: true
    }
};

