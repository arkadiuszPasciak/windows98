interface IStartStorePanel {
  name: string
  iconName: string
}

export interface IStartStorePanels {
  data: IStartStorePanel
  items?: {
    data?: IStartStorePanel
    items?: {
      data?: IStartStorePanel
    }
  }[]
}
