import { createStyles } from "@mantine/core";

interface MainStyleProps {
  NAVBAR_HEIGHT: number;
}

export const useMainStyles = createStyles(
  (theme, { NAVBAR_HEIGHT }: MainStyleProps) => ({
    main: {
      position: "relative",
      marginTop: NAVBAR_HEIGHT,
      width: "100%",
    },
  })
);

export const useActiveLinkStyles = createStyles(
  ({ colors, radius, spacing, fontSizes }) => ({
    base: {
      fontSize: fontSizes.sm,
      padding: "4px",
      borderRadius: radius.sm,
      color: colors.eggshell[0],
      fontFamily: "Open Sans, sans-serif",
      fontWeight: 600,
      textDecoration: "none",
      "&:hover": {
        backgroundColor: colors.charcoal[5],
      },
    },
    active: {
      fontSize: fontSizes.sm,
      padding: "4px",
      borderRadius: radius.sm,
      color: colors.red[8],
      fontFamily: "Poppins, sans-serif",
      fontWeight: 600,
      borderBottomWidth: "underline",
      textDecorationThickness: "2px",
      "&:hover": {
        backgroundColor: colors.charcoal[5],
      },
    },
  })
);

interface AvatarStyleProps {
  menuIsOpen: boolean;
}

export const useAvatarStyles = createStyles(
  ({ colors, radius }, { menuIsOpen }: AvatarStyleProps) => ({
    base: {
      borderRadius: radius.xl,
      transition: ".2s",
      cursor: "pointer",
      backgroundColor: menuIsOpen
        ? `${colors.teal[2]} !important`
        : "transparent",
      "&:hover": { backgroundColor: colors.teal[1] },
    },
  })
);
