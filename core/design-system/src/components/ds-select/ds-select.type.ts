export interface DSSelectProps {
	id: string;
	required?: boolean;
	disabled?: boolean;
	modelValue: string | number;
	options: {
	  value: string | number;
	  name: string;
	}[]
	labelName?: string;
	labelPosition?: 'top' | 'left';
}
