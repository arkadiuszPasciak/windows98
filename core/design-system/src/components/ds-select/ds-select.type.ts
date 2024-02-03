export interface DSSelectProps {
	disabled?: boolean;
	id: string;
	labelName?: string;
	labelPosition?: 'top' | 'left';
	modelValue: string | number;
	options: Array<DSSelectOption>;
	required?: boolean;
}

export interface DSSelectOption {
	value: string | number;
	name: string;
}
