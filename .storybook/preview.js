import { Preview } from '@storybook/nextjs'; 
import c4Theme from '../.storybook/c4Theme';
import "../src/app/globals.css";
import { MINIMAL_VIEWPORTS } from 'storybook/viewport';
const bsdViewports = {
  TV1920: {
    name: 'TV 1920',
    styles: {
      width: '1920px',
      height: '1080px',
    },
  },
  TV1280: {
    name: 'TV 1280',
    styles: {
      width: '1280px',
      height: '720px',
    },
  },
  TV960: {
    name: 'TV 960',
    styles: {
      width: '960px',
      height: '540px',
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
    options: {
      storySort: {
        method: 'alphabetical'
      },
    },
    layout: 'fullscreen',
    viewport: {
      options: {
      ...MINIMAL_VIEWPORTS,
      ...bsdViewports
      },
      defaultViewport: 'TV960',
    },
    backgrounds: {
      values: [
        {
          name: 'Dark',
          value: 'rgb(90,90,90)'
        }
      ]
    },
    docs: {
      theme: c4Theme,
    },
  },
  initialGlobals: {
    viewport: {
      value: 'TV960'
    }
  }
};
 
export default preview;