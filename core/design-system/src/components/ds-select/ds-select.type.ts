export interface DSSelectProps {
	id: string;
	required?: boolean;
	disabled?: boolean;
	modelValue: string | number;
	options: Array<DSSelectOption>;
	labelName?: string;
	labelPosition?: 'top' | 'left';
}

export interface DSSelectOption {
	value: string | number;
	name: string;
}
