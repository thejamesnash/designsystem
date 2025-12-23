import { SubNavigation } from './SubNavigation';
const meta = {
    title: 'Design System/DotCom/Molecules/Navigation/SubNavigation',
    component: SubNavigation,
};
export default meta;
const navigationItems =  [
    {
      "title": "Comedy",
      "url": "/discovery/comedy/tv.json?client=amazonfire&sort=popular&filter=none",
      "selected": false
    },
    {
      "title": "Documentaries",
      "url": "/discovery/documentaries/tv.json?client=amazonfire&sort=popular&filter=none",
      "selected": false
    },
    {
      "title": "Drama",
      "url": "/discovery/drama/tv.json?client=amazonfire&sort=popular&filter=none",
      "selected": false
    },
    {
      "title": "Entertainment",
      "url": "/discovery/entertainment/tv.json?client=amazonfire&sort=popular&filter=none",
      "selected": false
    },
    {
      "title": "Film",
      "url": "/discovery/film/tv.json?client=amazonfire&sort=popular&filter=none",
      "selected": false
    },
    {
      "title": "Lifestyle",
      "url": "/discovery/lifestyle/tv.json?client=amazonfire&sort=popular&filter=none",
      "selected": false
    },
    {
      "title": "News & Current Affairs",
      "url": "/discovery/news-current-affairs-and-politics/tv.json?client=amazonfire&sort=popular&filter=none",
      "selected": false
    },
    {
      "title": "Sport",
      "url": "/discovery/sport/tv.json?client=amazonfire&sort=popular&filter=none",
      "selected": false
    },
    {
      "title": "World Drama",
      "url": "/discovery/world-drama/tv.json?client=amazonfire&sort=popular&filter=none",
      "selected": false
    },
    {
      "title": "On TV: Yesterday",
      "url": "/discovery/on-tv-yesterday/tv.json?client=amazonfire&sort=popular&filter=none",
      "selected": false
    },
    {
      "title": "On TV: Last 7 Days",
      "url": "/discovery/on-tv-last-week/tv.json?client=amazonfire&sort=popular&filter=none",
      "selected": false
    },
    {
      "title": "Box Sets",
      "url": "/discovery/boxsets/tv.json?client=amazonfire&sort=popular&filter=none",
      "selected": false
    }
  ];
export const Default = {
    parameters: {
        layout: 'centered'
    },
    args: {
        navigationItems: navigationItems
    }
  };

