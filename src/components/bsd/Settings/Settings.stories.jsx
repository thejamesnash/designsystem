import { Settings } from './Settings';
const meta = {
    title: 'Design System/BSD/Pages/Settings',
    component: Settings,
};
export default meta;
export const Default = {
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/design/dfKGw1H0IG6rr5ab6wLPxy/BSD--Template-Library?node-id=20987-11806&m=dev',
        },
    },
    args: {
        animate: true,
        animationTier: 3,
        platform: 'bsd',
        tabItems: ["Channel4+","Accessibility","Parental controls","Device privacy","FAQs","Terms of use","System Information","Sign Out"]
    }
  };