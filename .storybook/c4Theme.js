// import { create } from 'storybook/internal/theming';
import { create } from 'storybook/theming';


export default create({
  base: 'dark',
  brandTitle: 'Channel 4 Streaming',
  brandUrl: 'https://www.channel4.co.uk',
  brandImage: 'https://testrigv2.vercel.app/4_logo.png',
  brandTarget: '_self',

  colorPrimary: '#FFFFFF',
  colorSecondary: '#aaff89',
  
  // UI
  appBg: '#1e1e1e',
  appPreviewBg: '#292929',
  appContentBg: '#1e1e1e',
  appBorderColor: '#292929',
  appBorderRadius: 4,

  // Text colors
  textColor: '#FFFFFF',
  textInverseColor: 'red',

  // Toolbar default and active colors
  barTextColor: '#FFFFFF',
  barSelectedColor: '#aaff89',
  barSelectedTextColor: 'red',
  barHoverColor: '#aaff89',
  barBg: '#292929',

  // Form colors
  inputBg: '#000',
  inputBorder: '#333',
  inputTextColor: '#aaff89',
  inputBorderRadius: 2,
});