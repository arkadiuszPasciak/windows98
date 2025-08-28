import { useTranslation } from "react-i18next"
import { CaseType } from "../../../domain"
import { useCaseConverter } from "../../hooks"
import type { CaseBoxProps } from "../case-box"

export const useCases = () => {
	const { t } = useTranslation()
	const { domain } = useCaseConverter()

	const translations = {
		alternatecase: t("mf-case-converter.cases.alternatecase"),
		camelcase: t("mf-case-converter.cases.camelcase"),
		constantcase: t("mf-case-converter.cases.constantcase"),
		dotcase: t("mf-case-converter.cases.dotcase"),
		kebabcase: t("mf-case-converter.cases.kebabcase"),
		lowercase: t("mf-case-converter.cases.lowercase"),
		pascalcase: t("mf-case-converter.cases.pascalcase"),
		pathcase: t("mf-case-converter.cases.pathcase"),
		sentencecase: t("mf-case-converter.cases.sentencecase"),
		snakecase: t("mf-case-converter.cases.snakecase"),
		titlecase: t("mf-case-converter.cases.titlecase"),
		uppercase: t("mf-case-converter.cases.uppercase"),
	}

	const cases: Array<CaseBoxProps> = [
		{
			id: CaseType.ALTERNATECASE,
			title: translations.alternatecase,
			inputValue: domain.alternatecase,
		},
		{
			id: CaseType.CAMELCASE,
			title: translations.camelcase,
			inputValue: domain.camelcase,
		},
		{
			id: CaseType.CONSTANTCASE,
			title: translations.constantcase,
			inputValue: domain.constantcase,
		},
		{
			id: CaseType.DOTCASE,
			title: translations.dotcase,
			inputValue: domain.dotcase,
		},
		{
			id: CaseType.KEBABCASE,
			title: translations.kebabcase,
			inputValue: domain.kebabcase,
		},
		{
			id: CaseType.LOWERCASE,
			title: translations.lowercase,
			inputValue: domain.lowercase,
		},
		{
			id: CaseType.PASCALCASE,
			title: translations.pascalcase,
			inputValue: domain.pascalcase,
		},
		{
			id: CaseType.PATHCASE,
			title: translations.pathcase,
			inputValue: domain.pathcase,
		},
		{
			id: CaseType.SENTENCECASE,
			title: translations.sentencecase,
			inputValue: domain.sentencecase,
		},
		{
			id: CaseType.SNAKECASE,
			title: translations.snakecase,
			inputValue: domain.snakecase,
		},
		{
			id: CaseType.TITLECASE,
			title: translations.titlecase,
			inputValue: domain.titlecase,
		},
		{
			id: CaseType.UPPERCASE,
			title: translations.uppercase,
			inputValue: domain.uppercase,
		},
	]

	return {
		translations,
		cases,
	}
}
