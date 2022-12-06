import { MantineThemeOverride } from "@mantine/core";

import { colors } from "./colors";
import { gradients } from "./gradients";

export const other = {
  colors: {
    white: "#ffffff",
  },
  spacing: {
    xl: "2rem",
    xxl: "3rem",
    xxxl: "4.5rem",
    xxxxl: "5.5rem",
  },
  gradients: {
    ...gradients,
  },
};

export const theme: MantineThemeOverride = {
  primaryColor: "brand",
  colorScheme: "dark",
  fontFamily: "Barlow, sans serif",
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 22,
  },
  headings: {
    fontFamily: "Stalinist One",
    fontWeight: 500,
    sizes: {
      h1: { fontSize: 38 },
      h2: { fontSize: 26 },
      h3: { fontSize: 22 },
      h4: { fontSize: 20 },
      h5: { fontSize: 16 },
      h6: { fontSize: 12 },
    },
  },
  colors: {
    ...colors,
    brand: colors.charcoal,
  },
  other,
};
