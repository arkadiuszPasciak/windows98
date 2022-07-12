import { defineStore } from 'pinia'
import { IPulpitStoreApps } from '@Bundles/PulpitBundle/Support/Pulpit.support'

export const usePulpitStore = defineStore('pulpit', {
  state: () => ({
    apps: [
      {
        name: 'My Computer',
        iconName: 'mycomputer',
      },
      {
        name: 'Recycle Bin',
        iconName: 'recycle',
      },
    ] as IPulpitStoreApps[],
  }),
})
