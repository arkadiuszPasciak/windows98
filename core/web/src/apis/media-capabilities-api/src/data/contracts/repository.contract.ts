export interface MediaCapabilitiesAPIRepositoryContract {
	decodingInfo(
		configuration: MediaDecodingConfiguration,
	): Promise<MediaCapabilitiesDecodingInfo>
	encodingInfo(
		configuration: MediaEncodingConfiguration,
	): Promise<MediaCapabilitiesEncodingInfo>
}
