import { Button as MantineButton, ButtonProps as MantineButtonProps, useMantineTheme } from "@mantine/core"

type ButtonStyles = NonNullable<MantineButtonProps["styles"]>

export const ButtonStyleDefaults: ButtonStyles = ({ colors }) => ({
	root: {
		"&:disabled": {
			opacity: 0.3,
			color: colors.gray[0],
			backgroundColor: colors.teal[6],
		},
	},
	leftIcon: {
		width: "1rem",
		height: "1rem",
	},
	rightIcon: {
		width: "1rem",
		height: "1rem",
	},
})
export interface ButtonProps extends MantineButtonProps {
	id?: string
	disabled?: boolean
	onClick?: (e: any) => void
	className?: string
}

export const Button = ({ id, children, onClick, className, ...props }: ButtonProps) => {
	const { colors } = useMantineTheme()

	return (
		<MantineButton
			className={className}
			onClick={(e: any) => onClick && onClick(e)}
			id={id}
			component="button"
			radius={props.size === "xs" ? "md" : "lg"}
			{...props}>
			{children}
		</MantineButton>
	)
}
