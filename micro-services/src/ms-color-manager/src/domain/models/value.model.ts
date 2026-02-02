import type { CmykColor } from "./cmyk.model"
import type { HexColor } from "./hex.model"
import type { HslColor } from "./hsl.model"
import type { HsvColor } from "./hsv.model"
import type { RgbColor } from "./rgb.model"

export type ColorValue = HexColor | RgbColor | HslColor | HsvColor | CmykColor
