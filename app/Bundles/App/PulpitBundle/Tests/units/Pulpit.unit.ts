import { MPulpitStoreApps } from "@APP|Bundles/PulpitBundle/Mocks/Pulpit.mocks"
import { usePulpitStore } from "@APP|Bundles/PulpitBundle/Stores/Pulpit.stores"
import { createPinia, setActivePinia } from "pinia"
import { describe, expect, it } from "vitest"

describe("[ClockBundle]<Stores>(usePulpitStore)", () => {
	setActivePinia(createPinia())
	const store = usePulpitStore()

	it("has default apps", () => {
		expect(store.apps).toStrictEqual(MPulpitStoreApps)
	})
})
