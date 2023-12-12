import { expect, it, describe } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { usePulpitStore } from '@APP|Bundles/PulpitBundle/Stores/Pulpit.stores'
import { MPulpitStoreApps } from '@APP|Bundles/PulpitBundle/Mocks/Pulpit.mocks'

describe('[ClockBundle]<Stores>(usePulpitStore)', () => {
  setActivePinia(createPinia())
  const store = usePulpitStore()

  it('has default apps', () => {
    expect(store.apps).toStrictEqual(MPulpitStoreApps)
  })
})
