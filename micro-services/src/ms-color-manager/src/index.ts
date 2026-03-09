export { MSColorManager } from "./domain"

export namespace MSColorManagerTypes {
	export type CmykColor = import("./domain/models").CmykColor
	export type HexColor = import("./domain/models").HexColor
	export type HslColor = import("./domain/models").HslColor
	export type HsvColor = import("./domain/models").HsvColor
	export type RgbColor = import("./domain/models").RgbColor
}
