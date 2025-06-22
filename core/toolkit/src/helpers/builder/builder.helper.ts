export class Builder<Config> {
	private config: Config

	constructor(defaultConfig: Config) {
		this.config = { ...defaultConfig }
	}

	setProperty<Key extends keyof Config>(key: Key, value: Config[Key]): this {
		this.config = { ...this.config, [key]: value }
		return this
	}

	build(): Config {
		return this.config
	}
}
