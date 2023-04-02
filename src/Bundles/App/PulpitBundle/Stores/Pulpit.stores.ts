import { defineStore } from 'pinia'
import { IPulpitStoreApps } from '@Bundles/PulpitBundle/Supports/Pulpit.supports'
import { MPulpitStoreApps } from '@Bundles/PulpitBundle/Mocks/Pulpit.mocks'

export const usePulpitStore = defineStore('pulpit', {
  state: () => ({
    apps: MPulpitStoreApps as IPulpitStoreApps[],
  }),
})
