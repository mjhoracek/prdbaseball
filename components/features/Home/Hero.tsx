import React from "react";
import {
  Box,
  Center,
  Group,
  Image,
  Stack,
  Title,
  Text,
  createStyles,
} from "@mantine/core";
import { NAVBAR_HEIGHT } from "../../core/layout/main";
import { GlowWrapper } from "../../shared/atoms/GlowWrapper";
import { ImportantLinks } from "./ImportantLinks";
import { SponsorList } from "./SponsorList";

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

export const HeroComponent = (props: Props) => {
  const { classes } = useStyles();

  return (
    <Stack className={classes.container}>
      <Center pt={10}>
        <Title className={classes.title}>PRD Baseball Academy</Title>
      </Center>
      <Group position="center" className={classes.banner}>
        <ImportantLinks />
        <Center className={classes.imageContainer}>
          <GlowWrapper>
            <Image
              src="/images/ghost-banner.png"
              width="100%"
              alt="PRD Ghost Logo"
            />
          </GlowWrapper>
        </Center>
      </Group>
      <Text className={classes.subText}>Thank you to our sponsors!</Text>
      <SponsorList />
    </Stack>
  );
};
