export const startMenuConfig = [
	{
		type: "group",
		id: "programs",
		programs: [
			{
				type: "group",
				id: "accessories",
				programs: [
					{
						type: "program",
						id: "calculator",
					},
					{
						type: "program",
						id: "color-generator",
					},
					{
						type: "program",
						id: "notepad",
					},
					{
						type: "program",
						id: "timer",
					},
				],
			},
			{
				type: "group",
				id: "games",
				programs: [
					{
						type: "program",
						id: "tic-tac-toe",
					},
				],
			},
		],
	},
	{
		type: "program",
		id: "settings",
	},
	{
		type: "program",
		id: "runner",
	},
	{
		type: "program",
		id: "shutdown",
	},
]
