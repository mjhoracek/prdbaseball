import {
  Center,
  createStyles,
  Stack,
  Title,
  Text,
  SimpleGrid,
} from "@mantine/core";
import Link from "next/link";
import React from "react";
import { NAVBAR_HEIGHT } from "../../core/layout/main";
import { channels } from "./channels";

type Props = {};

const useStyles = createStyles(({ breakpoints }) => ({
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
    width: "20%",
    [`@media (max-width: ${breakpoints.sm}px)`]: {
      width: "45%",
    },
  },
  textContainer: {
    width: "50%",
    padding: "25px 10px",
    color: "white",
    fontSize: "16px",
    textAlign: "center",

    [`@media (max-width: ${breakpoints.xs}px)`]: {
      fontSize: "14px",
    },
  },
}));

type HeadshotProps = {
  title: string;
  link: string;
};

const Channel = ({ title, link }: HeadshotProps) => {
  return (
    <Stack spacing={4} align="center">
      <Title
        sx={({ colors }) => ({
          fontSize: "22px",
          fontFamily: "Oswald, sans-serif",
          textTransform: "uppercase",
          textAlign: "center",
          color: colors.eggshell[0],
        })}
      >
        {title}
      </Title>
      <Link href={`mailto:${link}`}>
        <Text style={{ cursor: "pointer" }}>{link}</Text>
      </Link>
    </Stack>
  );
};

export const SupportBanner = (props: Props) => {
  const { classes } = useStyles();

  return (
    <>
      <Stack className={classes.container}>
        <Title className={classes.title}>Support</Title>
        <Stack style={{ width: "80%", paddingBottom: "5%" }}>
          <Text align="center">
            Please find the proper channel below for the support you need!
          </Text>
        </Stack>
        <SimpleGrid
          px={25}
          breakpoints={[
            { minWidth: "xs", cols: 1 },
            { minWidth: "sm", cols: 2 },
            { minWidth: "md", cols: 3 },
            { minWidth: "lg", cols: 4 },
            { minWidth: "xl", cols: 5 },
          ]}
        >
          {channels.map((channel, index) => {
            return (
              <Center key={index} style={{ padding: "15px" }}>
                <Channel title={channel.title} link={channel.link} />
              </Center>
            );
          })}
        </SimpleGrid>
      </Stack>
    </>
  );
};
