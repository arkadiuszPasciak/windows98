import type { FunctionComponent } from "react"
import { Suspense, lazy } from "react"

const Calculator = lazy(() =>
	import("../../../presentation/components/calculator").then((m) => ({
		default: m.Calculator,
	})),
)
const ColorGenerator = lazy(() =>
	import("../../../presentation/components/color-generator").then((m) => ({
		default: m.ColorGenerator,
	})),
)
const Notepad = lazy(() =>
	import("../../../presentation/components/notepad").then((m) => ({
		default: m.Notepad,
	})),
)
const Runner = lazy(() =>
	import("../../../presentation/components/runner").then((m) => ({
		default: m.Runner,
	})),
)
const Settings = lazy(() =>
	import("../../../presentation/components/settings").then((m) => ({
		default: m.Settings,
	})),
)
const Shutdown = lazy(() =>
	import("../../../presentation/components/shutdown").then((m) => ({
		default: m.Shutdown,
	})),
)
const TicTacToe = lazy(() =>
	import("../../../presentation/components/tic-tac-toe").then((m) => ({
		default: m.TicTacToe,
	})),
)
const Timer = lazy(() =>
	import("../../../presentation/components/timer").then((m) => ({
		default: m.Timer,
	})),
)

const Webcam = lazy(() =>
	import("../../../presentation/components/webcam/webcam").then((m) => ({
		default: m.Webcam || m.Webcam,
	})),
)

import { useProgramsPortal } from "./use-programs-portal.hook"

export const ProgramsPortal: FunctionComponent = () => {
	const { programs } = useProgramsPortal()

	return (
		<Suspense>
			{programs.calculator && <Calculator />}
			{programs["color-generator"] && <ColorGenerator />}
			{programs.notepad && <Notepad />}
			{programs.settings && <Settings />}
			{programs.shutdown && <Shutdown />}
			{programs.runner && <Runner />}
			{programs["tic-tac-toe"] && <TicTacToe />}
			{programs.timer && <Timer />}
			{programs.webcam && <Webcam />}
		</Suspense>
	)
}
