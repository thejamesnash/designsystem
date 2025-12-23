import { TabMenu } from './TabMenu';

const meta = {
    title: 'Design System/DotCom/Molecules/Navigation/TabMenu',
    component: TabMenu,
};

const navigationItems =  [
    {
      "title": "Tab 1",
      "panelId": "tabContent-1",
    },
    {
        "title": "Tab 2",
        "panelId": "tabContent-2",
      },
      {
        "title": "Tab 3",
        "panelId": "tabContent-3",
      },
      {
        "title": "Tab 4",
        "panelId": "tabContent-4",
      },
      {
        "title": "Tab 5",
        "panelId": "tabContent-5",
      },
      {
        "title": "Tab 6",
        "panelId": "tabContent-6",
      },
      {
        "title": "Tab 7",
        "panelId": "tabContent-7",
      },
      {
        "title": "Tab 8",
        "panelId": "tabContent-8",
      },

    
  ];

export default meta;
export const Default = {
    parameters: {
        layout: 'centered'
    },
    args: {
        navigationItems: navigationItems
    }
};

