export enum EShutDownRadioCheck {
  SHUT_DOWN = "shut-down",
  RESTART = "restart",
}

export type IShutDownRadioCheck =
  | EShutDownRadioCheck.SHUT_DOWN
  | EShutDownRadioCheck.RESTART

export const shutDownRadioInputName = "shut-down"
