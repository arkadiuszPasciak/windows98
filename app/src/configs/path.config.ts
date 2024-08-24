import * as path from "node:path"

export function getPathMain(directory: string): string {
	return directory ? path.join(__dirname, "../..", directory) : ""
}
