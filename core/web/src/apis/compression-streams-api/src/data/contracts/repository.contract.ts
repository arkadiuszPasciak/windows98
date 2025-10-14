export interface CompressionStreamsAPIRepositoryContract {
	createCompressionStream(format: CompressionFormat): CompressionStream
	createDecompressionStream(format: CompressionFormat): DecompressionStream
}
