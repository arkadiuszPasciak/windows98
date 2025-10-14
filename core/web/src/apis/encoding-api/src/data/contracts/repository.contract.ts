export interface EncodingAPIRepositoryContract {
	createTextDecoder(): TextDecoder
	createTextEncoder(): TextEncoder
	createTextDecoderStream(): TextDecoderStream
	createTextEncoderStream(): TextEncoderStream
}
