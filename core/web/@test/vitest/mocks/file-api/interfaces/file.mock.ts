export class FileInterfaceMock extends Blob implements File {
	public readonly lastModified: number
	public readonly name: string
	public readonly webkitRelativePath: string = ""
	public readonly type: string

	constructor(bits: BlobPart[], name: string, options?: FilePropertyBag) {
		super(bits, options)
		this.name = name
		this.type = options?.type ?? ""
		this.lastModified = options?.lastModified ?? Date.now()
	}
}
