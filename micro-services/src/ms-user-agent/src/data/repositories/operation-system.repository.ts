import type BrowserEnvRepositoryContract from '../../domain/contracts/repository.contract';
import type { IOperationSystemRegex, TOperationSystemAll } from '../../domain/models/operation.model';

export default class OperationSystemRepository implements BrowserEnvRepositoryContract<TOperationSystemAll> {
	constructor(
		private readonly operationSystems: Array<IOperationSystemRegex> = [
			{ name: "Windows 3.11", regex: /Win16/ },
			{ name: "Windows 95", regex: /(Windows 95|Win95|Windows_95)/ },
			{ name: "Windows ME", regex: /(Win 9x 4.90|Windows ME)/ },
			{ name: "Windows 98", regex: /(Windows 98|Win98)/ },
			{ name: "Windows CE", regex: /Windows CE/ },
			{ name: "Windows 2000", regex: /(Windows NT 5.0|Windows 2000)/ },
			{ name: "Windows XP", regex: /(Windows NT 5.1|Windows XP)/ },
			{ name: "Windows Server 2003", regex: /Windows NT 5.2/ },
			{ name: "Windows Vista", regex: /Windows NT 6.0/ },
			{ name: "Windows 7", regex: /(Windows 7|Windows NT 6.1)/ },
			{ name: "Windows 8.1", regex: /(Windows 8.1|Windows NT 6.3)/ },
			{ name: "Windows 8", regex: /(Windows 8|Windows NT 6.2)/ },
			{
				name: "Windows NT 4.0",
				regex: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/,
			},
			{ name: "Windows ME", regex: /Windows ME/ },
			{ name: "Android", regex: /Android/ },
			{ name: "Open BSD", regex: /OpenBSD/ },
			{ name: "Sun OS", regex: /SunOS/ },
			{ name: "Linux", regex: /(Linux|X11)/ },
			{ name: "iOS", regex: /(iPhone|iPad|iPod)/ },
			{ name: "Mac OS X", regex: /Mac OS X/ },
			{ name: "Mac OS", regex: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ },
			{ name: "QNX", regex: /QNX/ },
			{ name: "UNIX", regex: /UNIX/ },
			{ name: "BeOS", regex: /BeOS/ },
			{ name: "OS/2", regex: /OS\/2/ },
		]
	) { }

	public get() {
		const userAgent = window.navigator.userAgent

		if (!userAgent) return null

		for (const id in this.operationSystems) {
			const system = this.operationSystems[id]

			if (system.regex.test(userAgent)) {
				return system.name
			}
		}

		return null
	}
}
