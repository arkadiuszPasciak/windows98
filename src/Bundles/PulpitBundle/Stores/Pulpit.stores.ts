import { defineStore } from 'pinia'
import { IPulpitStoreApps } from '@Bundles/PulpitBundle/Support/Pulpit.support'
import { pulpitStoreApps } from '@Bundles/PulpitBundle/Mocks/Pulpit.mocks'

export const usePulpitStore = defineStore('pulpit', {
  state: () => ({
    apps: pulpitStoreApps as IPulpitStoreApps[],
  }),
})
