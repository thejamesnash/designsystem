import { Header } from './Header';
const meta = {
    title: 'Design System/DotCom/Header',
    component: Header,
};
export default meta;
export const Default = {
    parameters: {},
    args: {
        animate: true,
        animationTier: 3,
        platform: 'dotcom',
        pageTitle: 'This is the Page Title',
        pageDescription: 'This is the page description - there is a fair amount of info that can go here.',
        background: '/images/grad2.png',
        breadcrumbs: [{
               "title": "Home",
                "url": "#",
                "selected": false
            },{
                "title": "Page Title",
                "url": "#",
                "selected": false
            }],
        navigationItems: [{
            "title": "Series 1",
            "panelId": "tabContent-1",
            },
            {
                "title": "Series 2",
                "panelId": "tabContent-2",
            },
            {
                "title": "Series 3",
                "panelId": "tabContent-3",
            },
            {
                "title": "Series 4",
                "panelId": "tabContent-4",
            }]
    }
}
