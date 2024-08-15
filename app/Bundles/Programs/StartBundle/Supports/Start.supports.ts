export interface IStartStoreApps {
	data: IStartStoreAppData
	items?: IStartStoreAppItem[]
}

interface IStartStoreAppData {
	name: string
	iconName: string
}

interface IStartStoreAppItem {
	data: IStartStoreAppData
	items?: IStartStoreAppItemItem[]
}

interface IStartStoreAppItemItem {
	data: IStartStoreAppData
}
