import type { CompressionStreamsAPIRepositoryContract } from "../contracts"

export class CompressionStreamsAPIRepository
	implements CompressionStreamsAPIRepositoryContract
{
	public createCompressionStream(format: CompressionFormat): CompressionStream {
		return new CompressionStream(format)
	}

	public createDecompressionStream(
		format: CompressionFormat,
	): DecompressionStream {
		return new DecompressionStream(format)
	}
}
