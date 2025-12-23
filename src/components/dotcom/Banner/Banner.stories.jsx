import { Banner } from './Banner';
const meta = {
    title: 'DROPS/Drop #3/DotCom/Banner',
    component: Banner,
    argTypes:{
        bannerLogo: {
            control:{
                type: 'select'
            },
            options: ['','C4','C4PLUS','M4','F4','E4','4S',]
        },
        subtitlePosition: {
            control:{
                type: 'select'
            },
            options: ['top','bottom']
        },
        subtitleSize: {
            control:{
                type: 'select',
                labels: {20:'Default',24:'Large',30:'Extra Large'}
            },
            options: [20,24,30]
        },


    }
};
export default meta;
export const Default = {
    parameters: {},
    args:{
        bannerLogo: 'C4PLUS',
        bannerTitle: 'Banner Title',
        bannerSubTitle: 'Banner Subtitle',
        bannerText: 'Ad aliqua qui quis consequat ut anim exercitation ullamco ut mollit amet. Sint esse excepteur dolor excepteur non sunt incididunt id excepteur reprehenderit.',
        bannerPrimaryCTAText: 'Primary CTA',
        bannerPrimaryCTAHref: '#',
        bannerSecondaryCTAText: 'Secondary CTA',
        bannerSecondaryCTAHref: '#',
        animatedGradient: true
    }
};
export const Split = {
    parameters: {},
    args:{
        bannerLogo: 'C4PLUS',
        bannerTitle: 'Banner Title',
        bannerSubTitle: 'Banner Subtitle',
        bannerText: 'Ad aliqua qui quis consequat ut anim exercitation ullamco ut mollit amet. Sint esse excepteur dolor excepteur non sunt incididunt id excepteur reprehenderit.',
        bannerPrimaryCTAText: 'Primary CTA',
        bannerPrimaryCTAHref: '#',
        bannerSecondaryCTAText: 'Secondary CTA',
        bannerSecondaryCTAHref: '#',
        bannerImageHref: '../../../../images/plus.jpg',
        animatedGradient: true
    }
};
export const Trailer = {
    parameters: {},
    args:{
        bannerLogo: 'C4PLUS',
        bannerTitle: "Look out crime, he's fully armed",
        bannerSubTitle: 'Banner Subtitle',
        bannerText: 'Following in the footsteps of his bumbling father, Detective Frank Drebin Jr. must solve a murder case to prevent the police department from shutting down.',
        bannerPrimaryCTAText: 'Watch now',
        bannerPrimaryCTAIcon: 'play',
        bannerPrimaryCTAHref: '#',
        bannerVideoSrc: '../../../../video/nakedgun.mp4',
        bannerVideoSubs: '../../../../video/nakedgun.vtt',
        bannerVideoPoster: '../../../../video/nakedgunposter.jpg',
        animatedGradient: false,
        subtitlePosition: 'top',
        subtitleSize: 20
    }
};

