export interface DSSelectProps {
	disabled?: boolean;
	id: string;
	labelName?: string;
	labelPosition?: 'top' | 'left';
	modelValue: string | number;
	options: {
		value: string | number;
		name: string;
	}[]
	required?: boolean;
}
