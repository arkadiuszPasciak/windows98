import { useNotepad } from "../../hooks"

export const useTextarea = () => {
	const notepadDomain = useNotepad()

	const onChange = (value: string): void => {
		notepadDomain.text = value
	}

	return {
		text: notepadDomain.text,
		onChange,
	}
}
