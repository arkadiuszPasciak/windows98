import { networkInformationAPIMock } from "@windows98/web/mocks"
import { afterEach, describe, expect, it, suite, vi } from "vitest"
import { UserDeviceDomain } from "../../src/domain/domains"

describe("UserDeviceDomain", () => {
	afterEach(() => {
		vi.resetAllMocks()
	})

	suite("getNetworkInformation", () => {
		it("should return null when is not available", () => {
			const domain = new UserDeviceDomain()

			const networkInformation = domain.getNetworkInformation()

			expect(networkInformation).toBeNull()
		})

		it("should return network information when available", () => {
			const domain = new UserDeviceDomain()
			const mockNetworkInformation = {
				type: "wifi",
				effectiveType: "4g",
				downlink: 10,
				downlinkMax: 20,
				rtt: 50,
				saveData: false,
			}

			networkInformationAPIMock.implementMock()

			const networkInformation = domain.getNetworkInformation()

			expect(networkInformation).toEqual({
				connectionType: mockNetworkInformation.type,
				effectiveConnectionType: mockNetworkInformation.effectiveType,
				downlinkInMbps: mockNetworkInformation.downlink,
				downlinkMaxInMbps: mockNetworkInformation.downlinkMax,
				roundeTripTimeInMiliseconds: mockNetworkInformation.rtt,
				isSaveData: mockNetworkInformation.saveData,
			})

			networkInformationAPIMock.reset()
		})
	})
})
