export interface DSInputProps {
	type?: 'text' | 'password' | 'email' | 'number';
	id: string;
	disabled?: boolean;
	readonly?: boolean;
	modelValue: string | number;
	labelName?: string;
	labelPosition?: 'top' | 'left';
	min?: number;
	max?: number;
	onChange: (value: string | number) => void;
}
