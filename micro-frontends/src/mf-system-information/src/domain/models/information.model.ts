type Information = { label: string; value: string }

type Informations = Array<Information>

export interface InformationModel {
	name: string
	items: Informations
}
