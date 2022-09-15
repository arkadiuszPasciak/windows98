import { defineStore } from 'pinia'
import { IStartStoreApps } from '@Bundles/StartBundle/Supports/Start.supports'
import { startStoreApps } from '@Bundles/StartBundle/Mocks/Start.mocks'

export const useStartStore = defineStore('start', {
  state: () => ({
    apps: startStoreApps as IStartStoreApps[],
  }),
})
