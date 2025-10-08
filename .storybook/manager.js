
import { addons } from 'storybook/manager-api';
import c4Theme from './c4Theme';

addons.setConfig({
  isFullscreen: true,
  theme: c4Theme,
});