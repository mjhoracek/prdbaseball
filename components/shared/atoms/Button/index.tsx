import {
  Button as MantineButton,
  ButtonProps as MantineButtonProps,
  useMantineTheme,
} from "@mantine/core";

type ButtonStyles = NonNullable<MantineButtonProps["styles"]>;

export const ButtonStyleDefaults: ButtonStyles = ({ colors }) => ({
  leftIcon: {
    width: "1rem",
    height: "1rem",
  },
  rightIcon: {
    width: "1rem",
    height: "1rem",
  },
  root: {
    borderRadius: 4,
    fontWeight: 500,
    backgroundColor: colors.red[8],
    maxWidth: "300px",
  },
  label: {
    textTransform: "uppercase",
  },
});
export interface ButtonProps extends MantineButtonProps {
  id?: string;
  disabled?: boolean;
  onClick?: (e: any) => void;
  className?: string;
}

export const Button = ({
  id,
  children,
  onClick,
  className,
  ...props
}: ButtonProps) => {
  const { colors, other, breakpoints, fontSizes } = useMantineTheme();

  return (
    <MantineButton
      className={className}
      onClick={(e: any) => onClick && onClick(e)}
      id={id}
      component="button"
      radius={props.size === "xs" ? "md" : "lg"}
      styles={{
        root: {
          borderRadius: 4,
          fontWeight: 500,
          border: "none",
          background: other.gradients.redButton,

          "&:hover": {
            backgroundColor: colors.red[8],
            opacity: 0.8,
          },

          [`@media (max-width: ${breakpoints.xs}px)`]: {
            fontSize: fontSizes.xs,
          },
        },
      }}
      {...props}
    >
      {children}
    </MantineButton>
  );
};
