export default function importInDev(importPath: string) {
	if (!importPath) return

	if (import.meta.env.MODE !== 'production') import(/* @vite-ignore */ importPath)
}
