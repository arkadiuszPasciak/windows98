import TeleportPulpit from "@APP|Bundles/TeleportBundle/Components/TeleportPulpit.vue"
import type { ITeleportPulpitTesting } from "@APP|Bundles/TeleportBundle/Supports/TeleportPulpitTesting.supports"
import { createTestingPinia } from "@pinia/testing"

export default class TeleportPulpitTesting {
	public testComponent(settings: ITeleportPulpitTesting): void {
		this.setViewport(settings.width, settings.height)

		this.renderComponent(settings.name)

		this.getElements(settings.name)
	}

	private setViewport(width: number, height: number) {
		cy.viewport(width, height)
	}

	private renderComponent(name: string): void {
		cy.mount(TeleportPulpit, {
			global: {
				plugins: [
					createTestingPinia({
						createSpy: cy.spy,
						initialState: {
							program: { [`modal${name}`]: true },
						},
						stubActions: false,
					}),
				],
			},
		})
	}

	private getElements(name: string): void {
		cy.get("div.TeleportGrid.TeleportPulpit")
		cy.get(`div.UIModal.${name}`)

		cy.get('[data-test="ui-modal-button-close"]').click()

		cy.get(`div.UIModal.${name}`).should("not.exist")
	}
}
