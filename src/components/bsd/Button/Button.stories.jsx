import { Button } from './Button';
const meta = {
    title: 'Design System/BSD/Atoms/Button',
    component: Button,
};
export default meta;
export const Default = {
    parameters: {
        layout: 'centered',
        design: {
            type: 'figma',
            url: 'https://www.figma.com/design/kxGwBgOIMEXGclFy7SM5R7/BSD---Component-Library?node-id=28-952&m=dev',
        },
    },
    args: {
        animate: false,
        btnText: 'Hello',
        platform: 'bsd'
    }
};
export const TextButton = {
    parameters: {
        layout: 'centered',
    },
    args: {
        animate: false,
        btnText: 'Hello',
        platform: 'bsd'
    }
};
export const TextButtonWithIcon = {
    parameters: {
        layout: 'centered',
    },
    args: {
        animate: false,
        btnText: 'Hello',
        withIcon: 'play',
        platform: 'bsd'
    }
};
export const MultilineButton = {
    parameters: {
        layout: 'centered',
    },
    args: {
        animate: false,
        btnText: 'Hello',
        btnSubText: 'This is some more text',
        platform: 'bsd'
    }
};
export const MultilineButtonWithIcon = {
    parameters: {
        layout: 'centered',
    },
    args: {
        animate: false,
        btnText: 'Hello',
        btnSubText: 'This is some more text',
        withIcon: 'play',
        platform: 'bsd'
    }
};
export const IconButton = {
    parameters: {
        layout: 'centered',
    },
    args: {
        animate: false,
        withIcon: 'subtitles',
        type: 'icon',
        platform: 'bsd'
    }
};
export const KeyboardButton = {
    parameters: {
        layout: 'centered',
    },
    args: {
        animate: false,
        type: 'keyboard',
        btnText: 'A',
        platform: 'bsd'
    }
};
export const ExpandingButton = {
    parameters: {
        layout: 'centered',
    },
    args: {
        animate: true,
        type: 'expanding',
        withIcon: 'play',
        btnText: 'This is some text',
        btnSubText: 'This is some more text',
        platform: 'bsd'
    }
};
export const CountdownButton = {
    parameters: {
        layout: 'centered',
    },
    args: {
        animate: true,
        type: 'countdown',
        withIcon: 'play',
        btnText: 'Playing next in ',
        platform: 'bsd',
        duration: 10,
        platform: 'bsd'
    }
};


