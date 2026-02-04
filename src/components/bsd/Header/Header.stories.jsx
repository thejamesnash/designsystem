import { Header } from './Header';
const meta = {
    title: 'Design System/BSD/Molecules/Header', 
    component: Header,
};
export default meta;
export const Default = {
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/design/kxGwBgOIMEXGclFy7SM5R7/BSD---Component-Library?node-id=2883-9001&m=dev',
        },
    },
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

