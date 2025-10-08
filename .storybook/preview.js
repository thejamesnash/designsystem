
import { Preview } from '@storybook/nextjs'; 
import { themes } from 'storybook/internal/theming';
import c4Theme from '../.storybook/c4Theme';
import { MINIMAL_VIEWPORTS } from 'storybook/viewport';
import "../src/app/globals.css";

const bsdViewports = {
  TV1920: {
    name: 'TV 1920',
    styles: {
      width: '1920px',
      height: '1080px',
    },
  },
  TV720: {
    name: 'TV 720',
    styles: {
      width: '1280px',
      height: '720px',
    },
  },
  Iphone16: {
    name: 'iPhone 16',
    styles: {
      width: '393px',
      height: '852px'
    },
  },
  Iphone16ProMax: {
    name: 'iPhone 16 Pro Max',
    styles: {
      width: '440px',
      height: '956px'
    },
  },
  Ipad10: {
    name: 'iPad 10',
    styles: {
      width: '1080px',
      height: '810px'
    },
  }
};

const preview = {
  parameters: {
    layout: 'fullscreen',
    viewport: {
      options: {
        ...MINIMAL_VIEWPORTS,
        ...bsdViewports
      }
    },
    backgrounds: {
      options: {
        dark: {
          name: 'Dark',
          value: 'rgb(30,30,30)'
        }
      }
    },
    docs: {
      theme: c4Theme,
    },
  },
};
 
export default preview;