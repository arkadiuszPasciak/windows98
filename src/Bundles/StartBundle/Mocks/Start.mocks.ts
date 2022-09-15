import { IStartStoreApps } from '@Bundles/StartBundle/Supports/Start.supports'

export const startStoreApps = [
  {
    data: {
      name: 'StartBundle.programs',
      iconName: 'programs',
    },
    items: [
      {
        data: {
          name: 'StartBundle.accessories',
          iconName: 'programs',
        },
        items: [
          {
            data: {
              name: 'StartBundle.calculator',
              iconName: 'calculator',
            },
          },
        ],
      },
      {
        data: {
          name: 'Microsoft Exchange',
          iconName: 'microsoft-exchange',
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
      name: 'StartBundle.documents',
      iconName: 'documents',
    },
  },
  {
    data: {
      name: 'StartBundle.settings',
      iconName: 'settings',
    },
  },
  {
    data: {
      name: 'StartBundle.find',
      iconName: 'find',
    },
  },
  {
    data: {
      name: 'StartBundle.help',
      iconName: 'help',
    },
  },
  {
    data: {
      name: 'StartBundle.run',
      iconName: 'run',
    },
  },
  {
    data: {
      name: 'StartBundle.shut-down',
      iconName: 'shut-down',
    },
  },
] as IStartStoreApps[]
