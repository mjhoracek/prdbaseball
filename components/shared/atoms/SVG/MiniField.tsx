import { SVGProps } from "react"

export const MiniField = ({ stroke, strokeWidth, fill, ...props }: SVGProps<SVGSVGElement>) => (
	<svg
		width={props.width || "100%"}
		height={props.height || "100%"}
		viewBox="0 0 20 16"
		fill="none"
		xmlns="http://www.w3.org/2000/svg">
		<path
			d="M9.24019 13.8261L1.86829 6.49624C1.56344 6.19313 1.56115 5.84282 1.70047 5.63073C2.75321 4.02817 5.25826 1.22534 10.0001 1.22534C14.7351 1.22534 17.2397 4.02127 18.2952 5.62567C18.4353 5.83866 18.4324 6.19094 18.1235 6.49405L10.6456 13.8308C10.2548 14.2142 9.6284 14.2121 9.24019 13.8261Z"
			stroke={stroke ?? "currentColor"}
			strokeWidth="2"
		/>
	</svg>
)
