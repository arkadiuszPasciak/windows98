import type { FunctionComponent } from "react"
import { lazy } from "react"

const Calculator = lazy(() =>
	import("../../../presentation/components/calculator").then((m) => ({
		default: m.Calculator,
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

import { useProgramsPortal } from "./use-programs-portal.hook"

export const ProgramsPortal: FunctionComponent = () => {
	const { programs } = useProgramsPortal()

	return (
		<>
			{programs.calculator && <Calculator />}
			{programs.notepad && <Notepad />}
			{programs.settings && <Settings />}
			{programs.shutdown && <Shutdown />}
			{programs.runner && <Runner />}
			{programs.ticTacToe && <TicTacToe />}
			{programs.timer && <Timer />}
		</>
	)
}
