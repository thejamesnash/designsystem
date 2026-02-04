import { DeviceSimulator } from './DeviceSimulator';
  const meta = {
      title: 'Tools/Device Simulator',
      component: DeviceSimulator,
      argTypes: {

        device: {
          options: ['ipadL','ipadP','iphoneL','iphoneP','iphoneMaxP','iphoneMaxL','TV'],
          control: {
            type: 'select',
            labels: {
              'ipadL':'iPad Landscape',
              'ipadP':'iPad Portrait',
              'iphoneL':'iPhone Landscape',
              'iphoneP':'iPhone Portrait',
              'iphoneMaxL':'iPhone Max Landscape',
              'iphoneMaxP':'iPhone Max Portrait',
              'TV':'TV'
            }
          }
        },
        frameSrc: {
          options: [
            '/iframe.html?globals=&args=&id=drops-drop-1-dotcom-home-page--default',
            '/iframe.html?globals=&args=&id=drops-drop-1-dotcom-brand-page--default',
            '/iframe.html?globals=&args=&id=drops-drop-3-dotcom-categories--default'            
        ],
          control: {
            type: 'select',
            labels: {
              '/iframe.html?globals=&args=&id=drops-drop-1-dotcom-home-page--default':'Dotcom - Homepage',
              '/iframe.html?globals=&args=&id=drops-drop-1-dotcom-brand-page--default':'Dotcom - Brand page',
              '/iframe.html?globals=&args=&id=drops-drop-3-dotcom-categories--default':'Dotcom - Categories',
            }
          }
        }
      }
  };
  export default meta;
  export const Default = {
      parameters: {
          design: {
            type: 'figma',
            url: 'https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File',
          },
        },
        args: {
          device: 'iphoneP',
          frameSrc: '/iframe.html?globals=&args=&id=drops-drop-1-dotcom-home-page--default'
        }
    };
  
  