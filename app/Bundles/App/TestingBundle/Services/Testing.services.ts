import { ITestingSettings } from "@APP|Bundles/TestingBundle/Supports/Testing.supports"

export default class Testing {
	private settings: ITestingSettings

	constructor(settings: ITestingSettings) {
		this.settings = {
			mainClassName: settings.mainClassName,
			modalTitleClassName:
        settings.modalTitleClassName ?? "[data-test=\"modal-header-title\"]",
			modalTitleText: settings.modalTitleText ?? null,
			viewportHeight: settings.viewportHeight,
			viewportWidth: settings.viewportWidth,
		}
	}

	public checkComponentElements(): void {
		this.checkMainClass()

		this.checkModalTitle()
	}

	public setViewport(): void {
		cy.viewport(this.settings.viewportWidth, this.settings.viewportHeight)
	}

	private checkMainClass(): void {
		if (this.settings.mainClassName) {
			cy.get(this.settings.mainClassName)
		}
	}

	private checkModalTitle(): void {
		if (this.settings.modalTitleClassName && this.settings.modalTitleText) {
			cy.get(this.settings.modalTitleClassName).should(
				"have.text",
				this.settings.modalTitleText,
			)
		}
	}
}
