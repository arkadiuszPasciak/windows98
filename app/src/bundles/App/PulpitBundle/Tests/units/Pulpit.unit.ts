import { MPulpitStoreApps } from "@APP/src/bundles/App/PulpitBundle/Mocks/Pulpit.mocks"
import { usePulpitStore } from "@APP/src/bundles/App/PulpitBundle/Stores/Pulpit.stores"
import { createPinia, setActivePinia } from "pinia"
import { describe, expect, it } from "vitest"

describe("[ClockBundle]<Stores>(usePulpitStore)", () => {
	setActivePinia(createPinia())
	const store = usePulpitStore()

	it("has default apps", () => {
		expect(store.apps).toStrictEqual(MPulpitStoreApps)
	})
})
