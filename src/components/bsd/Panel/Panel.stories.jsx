import { Panel } from './Panel';

const panelData = [
    {
        panelImg: "https://ic.c4assets.com/bips/collections/0D1ABBFD-CBD4-4e3d-836b-f409cd8912d8.jpg?output-quality=10&resize=960:540&informat=chrome&interpolation=progressive-bicubic",
        panelTitle: "Recommended for You",
        panelText: "Knead more Bake Off? We take another bite, for when one helping just isn't enough",
        buttons: [
            {
                btnText: "Playing Next in",
                withIcon: "play",
                duration: 10,
                type: "countdown"
            },{
                btnText: "Add to My List"
            }
        ]
    },{
        panelImg: "https://ic.c4assets.com/bips/collections/B37373C2-CF64-4554-acf5-977d3a9f83ef.jpg?output-quality=10&resize=960:540&informat=chrome&interpolation=progressive-bicubic",
        panelTitle: "More Like This",
        panelText: "From dough disasters to pastry pandemonium, amateur bakers compete for gooey glory",
        buttons: [
            {
                btnText: "Play",
                withIcon: "play",
                type: "playerAsideBtn"
            },{
                btnText: "Add to My List"
            }
        ]
    },{
        panelImg: "https://ic.c4assets.com/bips/collections/2811852D-3117-436f-9a22-676a05d01619.jpg?output-quality=10&resize=960:540&informat=chrome&interpolation=progressive-bicubic",
        panelTitle: "Something else",
        panelText: "A group of single celebrities join an exclusive dating agency in a bid to find true love",
        buttons: [
            {
                btnText: "Play",
                withIcon: "play",
                type: "playerAsideBtn"
            },{
                btnText: "Add to My List"
            }
        ]
    }
];


const meta = {
    title: 'DROPS/Drop #1/BSD/Panel',
    component: Panel,
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
        activePanel: {
            control:{
                type: 'select'
            },
            options: [0,1,2]
        }
    }
};
export default meta;
export const Default = {
    parameters: {
    // layout:'centered'
    },
    args:{
        animate: true,
        animationTier: 3,
        platform: 'bsd',
        activePanel: 0,
        data: panelData
    }
};

