import { vi } from "vitest"

type WorkerState =
	| "installing"
	| "installed"
	| "activating"
	| "activated"
	| "redundant"
	| "controlling"

class ServiceWorkerAPIMock {
	public registration: {
		scope: string
		active: ReturnType<ServiceWorkerAPIMock["createWorker"]> | null
		installing: ReturnType<ServiceWorkerAPIMock["createWorker"]> | null
		waiting: ReturnType<ServiceWorkerAPIMock["createWorker"]> | null
		update: ReturnType<typeof vi.fn>
		unregister: ReturnType<typeof vi.fn>
	} | null = this.createRegistration()

	private createWorker(scriptURL = "/sw.js", state: WorkerState = "activated") {
		return {
			scriptURL,
			state,
			addEventListener: vi.fn(),
			removeEventListener: vi.fn(),
		}
	}

	private createRegistration({
		scope = "/",
		active = this.createWorker("/sw.js", "activated"),
		installing = null,
		waiting = null,
	} = {}) {
		return {
			scope,
			active,
			installing,
			waiting,
			update: vi.fn(() => Promise.resolve()),
			unregister: vi.fn(() => Promise.resolve(true)),
		}
	}

	public createMock() {
		const register = vi.fn(
			(_scriptURL?: string, options?: Record<string, unknown>) => {
				let scope = "/"
				if (options && typeof options === "object" && "scope" in options) {
					const opt = options as Record<string, unknown>
					const s = opt.scope
					if (typeof s === "string") scope = s
				}
				return Promise.resolve(this.createRegistration({ scope }))
			},
		)

		const getRegistration = vi.fn(() => Promise.resolve(this.registration))

		const update = vi.fn(async () => {
			return Promise.resolve()
		})

		const unregister = vi.fn(async () => {
			if (!this.registration) return Promise.resolve(false)
			return Promise.resolve(this.registration.unregister())
		})

		const addEventListener = vi.fn()
		const removeEventListener = vi.fn()

		return {
			register,
			getRegistration,
			update,
			unregister,
			addEventListener,
			removeEventListener,
		}
	}

	public implementMock() {
		const {
			register,
			getRegistration,
			update,
			unregister,
			addEventListener,
			removeEventListener,
		} = this.createMock()
		vi.stubGlobal("navigator", {
			serviceWorker: {
				register: register,
				getRegistration: getRegistration,
				update: update,
				unregister: unregister,
				addEventListener: addEventListener,
				removeEventListener: removeEventListener,
			},
		})
	}

	public setRegistration(registration: typeof this.registration) {
		this.registration = registration
	}

	public reset() {
		this.registration = this.createRegistration()
		vi.restoreAllMocks()
	}
}

export const serviceWorkerAPIMock = new ServiceWorkerAPIMock()
