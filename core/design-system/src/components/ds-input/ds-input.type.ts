export interface DSInputProps {
	type?: 'text' | 'password' | 'email' | 'number';
	id: string;
	disabled?: boolean;
	readonly?: boolean;
	initialValue: string | number;
	labelName?: string;
	labelPosition?: 'top' | 'left';
	min?: number;
	max?: number;
	onChange: (value: string | number) => void;
}

export interface UseDSInputProps {
	initialValue: DSInputProps['initialValue']
	onChange: DSInputProps['onChange']
}
