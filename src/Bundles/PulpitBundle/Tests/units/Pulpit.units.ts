import { expect, it, describe } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { usePulpitStore } from '@Bundles/PulpitBundle/Stores/Pulpit.stores'
import { pulpitStoreApps } from '@Bundles/PulpitBundle/Mocks/Pulpit.mocks'

describe('[ClockBundle]<Stores>(usePulpitStore)', () => {
  setActivePinia(createPinia())
  const store = usePulpitStore()

  it('has default apps', () => {
    expect(store.apps).toStrictEqual(pulpitStoreApps)
  })
})
