import { describe, expect, it } from "vitest"
import { CaseConverterDomain } from "../../src/domain/domains/case-converter.domain"

describe("CaseConverterDomain", () => {
	const domain = new CaseConverterDomain()

	it("should initialize all case properties to empty strings", () => {
		expect(domain.alternatecase).toBe("")
		expect(domain.camelcase).toBe("")
		expect(domain.constantcase).toBe("")
		expect(domain.dotcase).toBe("")
		expect(domain.kebabcase).toBe("")
		expect(domain.lowercase).toBe("")
		expect(domain.pascalcase).toBe("")
		expect(domain.pathcase).toBe("")
		expect(domain.sentencecase).toBe("")
		expect(domain.snakecase).toBe("")
		expect(domain.titlecase).toBe("")
		expect(domain.uppercase).toBe("")
		expect(domain.inputValue).toBe("")
	})

	it("should convert all cases", () => {
		domain.setInputValue("Lorem ipsum")
		domain.convertAllCases()

		expect(domain.alternatecase).toBe("lOrEm iPsUm")
		expect(domain.camelcase).toBe("loremIpsum")
		expect(domain.constantcase).toBe("LOREM_IPSUM")
		expect(domain.dotcase).toBe("lorem.ipsum")
		expect(domain.kebabcase).toBe("lorem-ipsum")
		expect(domain.lowercase).toBe("lorem ipsum")
		expect(domain.pascalcase).toBe("LoremIpsum")
		expect(domain.pathcase).toBe("lorem/ipsum")
		expect(domain.sentencecase).toBe("Lorem ipsum")
		expect(domain.snakecase).toBe("lorem_ipsum")
		expect(domain.titlecase).toBe("Lorem Ipsum")
		expect(domain.uppercase).toBe("LOREM IPSUM")
	})
})
