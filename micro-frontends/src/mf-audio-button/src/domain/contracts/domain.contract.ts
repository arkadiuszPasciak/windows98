export interface AudioButtonDomainContract {
	isMuted: boolean

	toggleSound(): Promise<void>
}
