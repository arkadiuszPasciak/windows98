const PNPMReadPackageHook = require("./read-package.hook.cjs")
const { run } = new PNPMReadPackageHook()

module.exports = {
	hooks: {
		readPackage: run,
	},
}
