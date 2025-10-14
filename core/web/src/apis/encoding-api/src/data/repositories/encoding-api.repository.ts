import type { EncodingAPIRepositoryContract } from "../contracts"

export class EncodingAPIRepository implements EncodingAPIRepositoryContract {
	public createTextDecoder(): TextDecoder {
		return new TextDecoder()
	}

	public createTextEncoder(): TextEncoder {
		return new TextEncoder()
	}

	public createTextDecoderStream(): TextDecoderStream {
		return new TextDecoderStream()
	}

	public createTextEncoderStream(): TextEncoderStream {
		return new TextEncoderStream()
	}
}
