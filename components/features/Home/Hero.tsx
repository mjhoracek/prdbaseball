import React from "react";
import { Center, Stack, Title, Text, createStyles } from "@mantine/core";
import { NAVBAR_HEIGHT } from "../../core/layout/main";
import { ImportantLinks } from "./ImportantLinks";
import { SponsorList } from "./SponsorList";
import { SocialLinks } from "./SocialLinks";

type Props = {};

const useStyles = createStyles(({ colors, radius, spacing, breakpoints }) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
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
  subText: {
    color: colors.eggshell[9],
    fontSize: "16px",
    textAlign: "center",

    [`@media (max-width: ${breakpoints.xs}px)`]: {
      fontSize: "14px",
    },
  },
}));

export const HeroComponent = (props: Props) => {
  const { classes } = useStyles();

  return (
    <Stack className={classes.container}>
      <Stack>
        <SocialLinks />
        <Title className={classes.title}>PRD Baseball Academy</Title>
      </Stack>
      <Center>
        <ImportantLinks />
      </Center>
      <Text className={classes.subText}>Thank you to our sponsors!</Text>
      <SponsorList />
    </Stack>
  );
};
