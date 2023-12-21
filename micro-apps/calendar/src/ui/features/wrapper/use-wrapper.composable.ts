import { useI18n } from 'vue-i18n'

export default function useWrapper() {
	const { t } = useI18n()

	const translation = {
		title: t('CalendarBundle.title')
	}

	return {
		translation
	}
}
