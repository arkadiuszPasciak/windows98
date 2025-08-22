import { beforeEach, describe, expect, it } from "vitest"
import { LoadingStateHelper } from "./loading-state.helper"
import { LoadingState } from "./loading-state.type"

describe("LoadingStateHelper", () => {
	let helper: LoadingStateHelper

	beforeEach(() => {
		helper = new LoadingStateHelper()
	})

	it("should initialize with IDLE state", () => {
		expect(helper.getLoadingState()).toBe(LoadingState.IDLE)
	})

	it("should set state to LOADING", () => {
		helper.setLoadingState(LoadingState.LOADING)
		expect(helper.getLoadingState()).toBe(LoadingState.LOADING)
	})

	it("should set state to SUCCESS", () => {
		helper.setLoadingState(LoadingState.SUCCESS)
		expect(helper.getLoadingState()).toBe(LoadingState.SUCCESS)
	})

	it("should set state to ERROR", () => {
		helper.setLoadingState(LoadingState.ERROR)
		expect(helper.getLoadingState()).toBe(LoadingState.ERROR)
	})
})
