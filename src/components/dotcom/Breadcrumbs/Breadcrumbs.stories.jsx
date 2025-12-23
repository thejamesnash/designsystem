import { Breadcrumbs } from './Breadcrumbs';
const meta = {
    title: 'Design System/DotCom/Molecules/Navigation/Breadcrumbs',
    component: Breadcrumbs,
};
export default meta;
const navigationItems = [
    {
        "title": "Home",
        "url": "#",
        "selected": false
    },{
        "title": "4Viewers",
        "url": "#",
        "selected": false
    },{
        "title": "Our Policies",
        "url": "#",
        "selected": false
    },{
        "title": "Privacy",
        "selected": true
    }
];
export const Default = {
    parameters: {layout: 'centered'},
    args: {
        navigationItems: navigationItems
    }
  };

