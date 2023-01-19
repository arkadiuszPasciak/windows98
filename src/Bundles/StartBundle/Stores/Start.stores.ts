import { defineStore } from 'pinia'
import { IStartStoreApps } from '@Bundles/StartBundle/Supports/Start.supports'
import { MStartStoreApps } from '@Bundles/StartBundle/Mocks/Start.mocks'

export const useStartStore = defineStore('start', {
  state: () => ({
    apps: MStartStoreApps as IStartStoreApps[],
  }),
})
