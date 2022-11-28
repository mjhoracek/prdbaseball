import { CSSObject, Text as MantineText, TextProps, useMantineTheme } from "@mantine/core"
import { ReactNode } from "react"

export interface Props extends Omit<TextProps, "sx"> {
	color?: string
	children: ReactNode
	boldness?: "bold" | "semibold"
	italic?: boolean
	fontSize?: "xl" | "lg" | "md" | "sm" | "xs" | "xxs"
	sx?: CSSObject
}

export const Text = ({ children, sx, ...props }: Props) => {
	const { colors } = useMantineTheme()

	const fontWeight = (boldness?: "bold" | "semibold") => {
		if (boldness === "bold") {
			return 700
		}

		if (boldness === "semibold") {
			return 600
		}
	}

	const fontStyle = (italic?: boolean) => {
		if (italic) {
			return "italic"
		}
	}

	const fontSize = (fontSize: "xl" | "lg" | "md" | "sm" | "xs" | "xxs") => {
		switch (fontSize) {
			case "xl":
				return "1.25rem"
			case "lg":
				return "1.125rem"
			case "md":
				return "1rem"
			case "sm":
				return "0.875rem"
			case "xs":
				return "0.75rem"
			case "xxs":
				return "0.625rem"
			default:
				return "1rem"
		}
	}

	const letterSpacing = (fontSize: "xl" | "lg" | "md" | "sm" | "xs" | "xxs") => {
		switch (fontSize) {
			case "xl":
				return ".075rem"
			case "lg":
				return ".075rem"
			case "md":
				return ".075rem"
			case "sm":
				return ".075rem"
			case "xs":
				return ".05rem"
			case "xxs":
				return ".05rem"
			default:
				return "1rem"
		}
	}

	return (
		<MantineText
			sx={{
				lineHeight: "167%",
				fontFamily: "Open Sans, serif",
				color: props.color || colors.navy[9],
				fontWeight: fontWeight(props.boldness),
				fontStyle: fontStyle(props.italic),
				fontSize: fontSize(props.fontSize ?? "md"),
				letterSpacing: letterSpacing(props.fontSize ?? "md"),
				"& > a": {
					color: "white",
				},
				...sx,
			}}
			{...props}>
			{children}
		</MantineText>
	)
}
