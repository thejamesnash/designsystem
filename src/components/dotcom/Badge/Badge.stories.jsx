import { Badge } from './Badge';
  const emojiOptions = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t']



  const meta = {
    title: 'Design System/DotCom/Atoms/Badge',
      component: Badge,
      argTypes: {
          badgeIconPosition: {
              control: {
                  type:'select'
              },
              options: ['before','after']
          }, 
          badgeIcon: {
              control: { 
                  type: 'select',
                  labels: {
                      'a':'Alien',
                      'b':'Picture',
                      'c':'Rewind',
                      'd':'Stars',
                      'e':'Devil',
                      'f':'Egg',
                      'g':'Camera',
                      'h':'Masks',
                      'i':'Eyes',
                      'j':'House',
                      'k':'Right Finger',
                      'l':'Dotted Face',
                      'm':'Smiley',
                      'n':'Popcorn',
                      'o':'Boomerang',
                      'p':'Fireworks',
                      'q':'Rocket',
                      'r':'Down Finger',
                      's':'Arrow Up',
                      't':'Lightning',
                  },
              },
              options: emojiOptions,
          }
      }
  };
  export default meta;
  export const Default = {
      parameters: {
          layout: 'centered',
      },
      args: {
          badgeText: 'Default',
          badgeIcon: '',
          badgeIconPosition: ''
      }
  };
  export const Light = {
    parameters: {
        layout: 'centered',
    },
    args: {
        badgeText: 'Default',
        badgeIcon: '',
        badgeIconPosition: '',
        badgeBg: 'light'
    }
};
export const Dark = {
    parameters: {
        layout: 'centered',
    },
    args: {
        badgeText: 'Default',
        badgeIcon: '',
        badgeIconPosition: '',
        badgeBg: 'dark'
    }
};
export const NoBg = {
    parameters: {
        layout: 'centered',
    },
    args: {
        badgeText: 'Default',
        badgeIcon: '',
        badgeIconPosition: '',
        badgeBg: 'none'
    }
};

export const Contrast = {
    parameters: {
        layout: 'centered',
    },
    args: {
        badgeText: 'Default',
        badgeIcon: 't',
        badgeIconPosition: 'before',
        badgeBg: 'contrast'
    }
};
  export const WithIconBefore = {
      parameters: {
          layout: 'centered',
      },
      args: {
          badgeText: 'Default',
          badgeIcon: 't',
          badgeIconPosition: 'before'
      }
  };
  export const WithIconAfter= {
      parameters: {
          layout: 'centered',
      },
      args: {
          badgeText: 'Default',
          badgeIcon: 't',
          badgeIconPosition: 'after'
      }
  };
  
  
