import { Toggle } from './Toggle';

export default {
    title: 'Design System/BSD/Molecules/Toggle',
    component: Toggle,
}

export const Default = {
    parameters: {},
    args: {
        animate: true,
        animationTier: 3,
        platform: 'bsd',
        labelTitle: "Subtitles",
        labelText: "You can get subtitles on all programmes available to watch on Channel 4. ",
        toggleOptions: ["Off","On"],
        name: 'subtitles',
        checked: true,
        active: true
    }
  };

