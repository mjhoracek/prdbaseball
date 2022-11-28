import {
	CSSObject,
	Text as MantineTitle,
	TitleProps as MantineTitleProps,
	useMantineTheme,
} from "@mantine/core"

export interface TitleProps extends MantineTitleProps {
	fontSize: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "d1" | "d2"
	sx?: CSSObject
}

export const Title = ({ children, sx, ...props }: TitleProps) => {
	const fontSize = (fontSize: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "d1" | "d2") => {
		switch (fontSize) {
			case "d1":
				return "2.625rem"
			case "d2":
				return "1.75rem"
			case "h1":
				return "2.125rem"
			case "h2":
				return "1.625rem"
			case "h3":
				return "1.375rem"
			case "h4":
				return "1.25rem"
			case "h5":
				return "1.125rem"
			case "h6":
				return "1rem"
		}
	}

	const letterSpacing = (fontSize: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "d1" | "d2") => {
		switch (fontSize) {
			case "d1":
				return ".3rem"
			case "d2":
				return ".2rem"
			case "h1":
				return ".2rem"
			case "h2":
				return ".15rem"
			case "h3":
				return ".1rem"
			case "h4":
				return ".05rem"
			case "h5":
				return ".05rem"
			case "h6":
				return ".05rem"
		}
	}

	const { colors } = useMantineTheme()

	return (
		<MantineTitle
			sx={{
				lineHeight: "167%",
				color: props.color ?? colors.navy[9],
				fontFamily: "Josefin Sans, serif",
				fontWeight: 600,
				fontSize: fontSize(props.fontSize),
				letterSpacing: letterSpacing(props.fontSize),
				...sx,
			}}
			{...props}>
			{children}
		</MantineTitle>
	)
}
