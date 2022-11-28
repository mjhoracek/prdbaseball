import { SVGProps } from "react"

export const HomePlate = ({ stroke, strokeWidth, fill, ...props }: SVGProps<SVGSVGElement>) => (
	<svg
		width={props.width || "100%"}
		height={props.height || "100%"}
		viewBox="0 0 17 17"
		fill="none"
		xmlns="http://www.w3.org/2000/svg">
		<path
			d="M2.37843 1.07666H14.3313C14.8835 1.07666 15.3311 1.52415 15.3313 2.0763L15.3332 7.1533C15.3333 7.41645 15.2297 7.66902 15.0448 7.85627L9.04508 13.9327C8.65356 14.3292 8.01344 14.3292 7.62191 13.9327L1.62817 7.8623C1.44152 7.67327 1.33776 7.41774 1.33978 7.15209L1.37846 2.06905C1.38263 1.51975 1.82911 1.07666 2.37843 1.07666Z"
			stroke={stroke ?? "currentColor"}
			strokeWidth="2"
		/>
	</svg>
)
