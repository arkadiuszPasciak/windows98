import { IStartStoreApps } from '@APP|Bundles/StartBundle/Supports/Start.supports'

export const MStartStoreApps = [
  {
    data: {
      name: 'StartBundle.programs',
      iconName: 'folder-medium',
    },
    items: [
      {
        data: {
          name: 'StartBundle.accessories',
          iconName: 'folder-small',
        },
        items: [
          {
            data: {
              name: 'StartBundle.calculator',
              iconName: 'calculator',
            },
          },
          {
            data: {
              name: 'StartBundle.notepad',
              iconName: 'notepad',
            },
          },
        ],
      },
      {
        data: {
          name: 'StartBundle.entertainment',
          iconName: 'folder-small',
        },
        items: [
          {
            data: {
              name: 'StartBundle.media-player',
              iconName: 'media-player-small',
            },
          },
        ],
      },
      {
        data: {
          name: 'StartBundle.games',
          iconName: 'folder-small',
        },
        items: [
          {
            data: {
              name: 'StartBundle.tic-tac-toe',
              iconName: 'tic-tac-toe',
            },
          },
        ],
      },
    ],
  },
  {
    data: {
      name: 'StartBundle.documentation',
      iconName: 'documentation',
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
