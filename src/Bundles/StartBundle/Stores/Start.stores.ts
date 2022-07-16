import { defineStore } from 'pinia'
import { IStartStorePanels } from '@Bundles/StartBundle/Support/Start.support'

export const useStartStore = defineStore('start', {
  state: () => ({
    apps: [
      {
        data: {
          name: 'Programs',
          iconName: 'programs',
        },
        items: [
          {
            data: {
              name: 'Accessories',
              iconName: 'programs',
            },
            items: {
              data: {
                name: 'Calculator',
                iconName: 'calculator',
              },
            },
          },
          {
            data: {
              name: 'Microsoft Exchange',
              iconName: 'mirosoft-exchange',
            },
          },
          {
            data: {
              name: 'MS-DOS Prompt',
              iconName: 'ms-dos-prompt',
            },
          },
        ],
      },
      {
        data: {
          name: 'Documents',
          iconName: 'documents',
        },
      },
      {
        data: {
          name: 'Settings',
          iconName: 'settings',
        },
      },
      {
        data: {
          name: 'Find',
          iconName: 'find',
        },
      },
      {
        data: {
          name: 'Help',
          iconName: 'help',
        },
      },
      {
        data: {
          name: 'Run...',
          iconName: 'Run',
        },
      },
      {
        data: {
          name: 'Shut Down...',
          iconName: 'shut-down',
        },
      },
    ] as IStartStorePanels[],
  }),
})
