import { Cookies } from './Cookies';
const meta = {
    title: 'Design System/BSD/Pages/Cookie Consent',
    component: Cookies,
    argTypes: {
        state: {
            control:{
                type: 'select'
            },
            options: ["intro","manage","exit","thanks"]
        }
    }
};
export default meta;
export const Default = {
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/design/dfKGw1H0IG6rr5ab6wLPxy/BSD--Template-Library?node-id=21297-56959&m=dev',
        },
        
    },
    args: {
        animate: true,
        animationTier: 3,
        platform: 'bsd',
        state: 'intro'
    }
};

