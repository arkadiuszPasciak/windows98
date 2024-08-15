interface DSIconRadioSVGProps {
	isChecked: boolean
}

export const DSIconRadioSVG = ({ isChecked = false }: DSIconRadioSVGProps) => {
	if (isChecked) {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="12"
				height="12"
				role="img"
				aria-label="Checked radio button"
			>
				<title>Checked radio button</title>
				<g className="layer">
					<title>Layer 1</title>
					<path
						clipRule="evenodd"
						d="m8,0l-4,0l0,1l-2,0l0,1l-1,0l0,2l-1,0l0,4l1,0l0,2l1,0l0,-2l-1,0l0,-4l1,0l0,-2l2,0l0,-1l4,0l0,1l2,0l0,-1l-2,0l0,-1z"
						fill="gray"
						fillRule="evenodd"
						id="svg_1"
					/>
					<path
						clipRule="evenodd"
						d="m8,1l-4,0l0,1l-2,0l0,2l-1,0l0,4l1,0l0,1l1,0l0,-1l-1,0l0,-4l1,0l0,-1l1,0l0,-1l4,0l0,1l2,0l0,-1l-2,0l0,-1z"
						fill="#000"
						fillRule="evenodd"
						id="svg_2"
					/>
					<path
						clipRule="evenodd"
						d="m9,3l1,0l0,1l-1,0l0,-1zm1,5l0,-4l1,0l0,4l-1,0zm-2,2l0,-1l1,0l0,-1l1,0l0,2l-2,0zm-4,0l0,1l4,0l0,-1l-4,0zm0,0l0,-1l-2,0l0,1l2,0z"
						fill="#DFDFDF"
						fillRule="evenodd"
						id="svg_3"
					/>
					<path
						clipRule="evenodd"
						d="m11,2l-1,0l0,2l1,0l0,4l-1,0l0,2l-2,0l0,1l-4,0l0,-1l-2,0l0,1l2,0l0,1l4,0l0,-1l2,0l0,-1l1,0l0,-2l1,0l0,-4l-1,0l0,-2z"
						fill="#fff"
						fillRule="evenodd"
						id="svg_4"
					/>
					<path
						clipRule="evenodd"
						d="m4,2l4,0l0,1l1,0l0,1l1,0l0,4l-1,0l0,1l-1,0l0,1l-4,0l0,-1l-1,0l0,-1l-1,0l0,-4l1,0l0,-1l1,0l0,-1z"
						fill="#fff"
						fillRule="evenodd"
						id="svg_5"
					/>
					<use
						id="svg_7"
						x="3.88"
						xlinkHref="#svg_6"
						y="3.88"
					/>
				</g>
				<defs>
					<symbol
						xmlns="http://www.w3.org/2000/svg"
						height="4"
						id="svg_6"
						width="4"
					>
						<path
							clipRule="evenodd"
							d="m3,0l-2,0l0,1l-1,0l0,2l1,0l0,1l2,0l0,-1l1,0l0,-2l-1,0l0,-1z"
							fill="black"
							fillRule="evenodd"
						/>
					</symbol>
				</defs>
			</svg>
		)
	}

	if (!isChecked) {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="12"
				height="12"
				role="img"
				aria-label="Unchecked radio button"
			>
				<title>Unchecked radio button</title>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M8 0H4v1H2v1H1v2H0v4h1v2h1V8H1V4h1V2h2V1h4v1h2V1H8V0z"
					fill="gray"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M8 1H4v1H2v2H1v4h1v1h1V8H2V4h1V3h1V2h4v1h2V2H8V1z"
					fill="#000"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M9 3h1v1H9V3zm1 5V4h1v4h-1zm-2 2V9h1V8h1v2H8zm-4 0v1h4v-1H4zm0 0V9H2v1h2z"
					fill="#DFDFDF"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M11 2h-1v2h1v4h-1v2H8v1H4v-1H2v1h2v1h4v-1h2v-1h1V8h1V4h-1V2z"
					fill="#fff"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M4 2h4v1h1v1h1v4H9v1H8v1H4V9H3V8H2V4h1V3h1V2z"
					fill="#fff"
				/>
			</svg>
		)
	}

	return null
}
