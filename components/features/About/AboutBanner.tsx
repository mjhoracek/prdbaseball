import { createStyles, Stack, Title } from "@mantine/core";
import React from "react";
import { NAVBAR_HEIGHT } from "../../core/layout/main";

type Props = {};

const useStyles = createStyles(({ colors, radius, spacing, breakpoints }) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    maxWidth: "100vw",
    minHeight: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
    paddingBottom: "50px",
  },
  title: {
    color: "white",
    fontFamily: "Stalinist One",
    textAlign: "center",

    [`@media (max-width: ${breakpoints.sm}px)`]: {
      paddingTop: "20px",
      fontSize: "23px",
    },
  },
  banner: {
    width: "100%",
    padding: "10px",

    [`@media (max-width: ${breakpoints.sm}px)`]: {
      flexDirection: "column-reverse",
    },
  },
  imageContainer: {
    width: "40%",
    [`@media (max-width: ${breakpoints.sm}px)`]: {
      width: "80%",
    },
  },
  subText: {
    color: "white",
    fontSize: "16px",
    textAlign: "center",

    [`@media (max-width: ${breakpoints.xs}px)`]: {
      fontSize: "14px",
    },
  },
}));

export const AboutBanner = (props: Props) => {
  const { classes } = useStyles();

  return (
    <Stack className={classes.container}>
      <Title className={classes.title}>About Us</Title>
    </Stack>
  );
};
