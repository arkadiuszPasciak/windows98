import { defineStore } from 'pinia'
import { IPulpitStoreApps } from '@APP|Bundles/PulpitBundle/Supports/Pulpit.supports'
import { MPulpitStoreApps } from '@APP|Bundles/PulpitBundle/Mocks/Pulpit.mocks'

export const usePulpitStore = defineStore('pulpit', {
  state: () => ({
    apps: MPulpitStoreApps as IPulpitStoreApps[],
  }),
})
