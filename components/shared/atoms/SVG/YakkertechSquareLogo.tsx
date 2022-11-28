import { SVGProps } from "react"

export const YakkertechSquareLogo = ({ stroke, strokeWidth, fill, ...props }: SVGProps<SVGSVGElement>) => (
	<svg
		width={props.width || "100%"}
		height={props.height || "100%"}
		viewBox="0 0 1001 1001"
		fill="none"
		xmlns="http://www.w3.org/2000/svg">
		<path
			d="M384.305 303L460.5 437.817L533.873 303H627L508.474 546.258V768.597L412.526 769V546.258L294 303H384.305Z"
			fill={fill ?? "currentColor"}
		/>
		<path
			d="M753.907 101.094L682.045 200.031C746.788 263.65 774.667 307.347 793.831 414.394H929.568C905.398 259.517 867.686 190.381 753.907 101.094Z"
			fill={fill ?? "currentColor"}
		/>
		<path d="M861.697 797.774L1000 482.413H723.402L861.697 797.774Z" fill={fill ?? "currentColor"} />
		<path
			d="M193.188 208.28L125.318 158.811C277.027 -18.4548 518.359 -43.1893 690.03 63.9971L622.16 158.811C482.428 76.3596 308.966 96.9719 193.188 208.28Z"
			fill={fill ?? "currentColor"}
		/>
		<path
			d="M141.288 265.989L85.3955 216.52C-38.368 385.537 -30.7626 678.226 128.932 834.876L156.878 797.774C29.1225 624.635 29.5019 426.761 141.288 265.989Z"
			fill={fill ?? "currentColor"}
		/>
		<path
			d="M193.188 894.632L220.148 863.753C348.629 970.053 477.524 982.51 656.352 949.067V977.924C493.526 1025.6 318.189 995.259 193.188 894.632Z"
			fill={fill ?? "currentColor"}
		/>
	</svg>
)
