import { Button } from './Button';
const meta = {
    title: 'Design System/DotCom/Atoms/Button',
    component: Button,
};
export default meta;
export const Default = {
    parameters: {
        layout: 'centered',
    },
    args: {
        animate: false,
        btnText: 'Hello',
        platform: 'dotcom'
    }
};
export const Secondary = {
    parameters: {
        layout: 'centered',
    },
    args: {
        animate: false,
        btnText: 'Hello',
        platform: 'dotcom',
        secondary: true
    }
};
export const TextButton = {
    parameters: {
        layout: 'centered',
    },
    args: {
        animate: false,
        btnText: 'Hello',
        platform: 'dotcom'
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
        platform: 'dotcom'
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
        platform: 'dotcom'
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
        platform: 'dotcom'
    }
};
export const IconButton = {
    parameters: {
        layout: 'centered',
    },
    args: {
        animate: false,
        withIcon: 'play',
        type: 'icon',
        platform: 'dotcom'
    }
};
