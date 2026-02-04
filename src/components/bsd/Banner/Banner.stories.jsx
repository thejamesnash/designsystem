import { Banner } from './Banner';
export default {
    title: 'Design System/BSD/Molecules/Banner',
    component: Banner,
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/design/kxGwBgOIMEXGclFy7SM5R7/BSD---Component-Library?node-id=2959-59391&m=dev',
        },
    },
    argTypes:{
        animate: {
            control:{
                type: 'select'
            },
            options: [true,false]
        },
        animationTier: {
            control:{
                type: 'select'
            },
            options: [0,1,2,3]
        },
        size: {
            control:{
                type: 'select'
            },
            options: ["small","large"]
        }
    }
};

export const Small = {
    parameters: {},
    args: {
        animate: true,
        animationTier: 3,
        platform: 'bsd',
        size: 'small',
        bannerTitle: 'MAFS with no ads?',
        titleEmoji: 'e',
        bannerPrimaryBtn: 'Find out more',
        bannerSecondaryBtn: 'Something else'
    }
};
export const Large = {
    parameters: {},
    args: {
        animate: true,
        animationTier: 3,
        platform: 'bsd',
        size: 'large',
        bannerTitle: 'MAFS with no ads?',
        titleEmoji: 'e',
        bannerSubtitle: "Yes please! Subscribe to Channel 4+",
        bannerText: 'Enjoy Married at First Sight UK and 1,500 other premium shows without any ads',
        bannerPrimaryBtn: 'Find out more',
    }
};
export const WithImage = {
    parameters: {},
    args: {
        animate: true,
        animationTier: 3,
        platform: 'bsd',
        size: 'large',
        bannerTitle: 'MAFS with no ads?',
        titleEmoji: 'e',
        bannerSubtitle: "Yes please! Subscribe to Channel 4+",
        bannerText: 'Enjoy Married at First Sight UK and 1,500 other premium shows without any ads',
        bannerPrimaryBtn: 'Find out more',
        bannerSecondaryBtn: 'Something else',
        bannerImg: 'https://ic.c4assets.com/vps/married-at-first-sight-uk-s10-series-5---dp1/04CBBE53-BF59-42A2-A4F87F92623A99D4.jpg?imformat=chrome&resize=1080px:*'
    }
};

