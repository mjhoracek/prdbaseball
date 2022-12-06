import {
  Center,
  createStyles,
  Group,
  Stack,
  Title,
  Text,
  Image,
} from "@mantine/core";
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

export const AboutBanner = (props: Props) => {
  const { classes } = useStyles();

  return (
    <>
      <Stack className={classes.container}>
        <Title className={classes.title}>About Us</Title>
        <Group position="center" align={"apart"} className={classes.banner}>
          <Center className={classes.imageContainer}>
            <Image
              src="/images/prdPhotos/12.jpg"
              alt="PRD Ghost Logo"
              radius="md"
            />
          </Center>
          <Stack className={classes.textContainer}>
            <Text>
              At PRD, our main objective is to help extend the careers of
              amateur baseball players 7U thru 18U through high level training,
              proper team placement, collegiate planning & exposure when the
              time is right.
            </Text>
            <Text mt={20}>
              We work with our clients to create a variety of training programs
              for all ages that assist in this mission. Our trainers & advisors
              are vested, knowledgeable and eager to use modern technology to
              create positive changes in production for players on the field.
            </Text>
            <Text mt={20}>
              We strive to bring class, character and professionalism to the
              club baseball world in every facet of operation.
            </Text>
          </Stack>
          <Center className={classes.imageContainer}>
            <Image
              src="/images/prdPhotos/27.jpg"
              alt="PRD Ghost Logo"
              radius="md"
            />
          </Center>
        </Group>
        {/* <Group sx={{ width: "100%" }}>
          <Image
            width={100}
            src="/images/prdPhotos/12.jpg"
            alt="PRD Ghost Logo"
            radius="md"
          />
          <Image
            width={100}
            src="/images/prdPhotos/12.jpg"
            alt="PRD Ghost Logo"
            radius="md"
          />
          <Image
            width={100}
            src="/images/prdPhotos/12.jpg"
            alt="PRD Ghost Logo"
            radius="md"
          />
          <Image
            width={100}
            src="/images/prdPhotos/12.jpg"
            alt="PRD Ghost Logo"
            radius="md"
          />
          <Image
            width={100}
            src="/images/prdPhotos/12.jpg"
            alt="PRD Ghost Logo"
            radius="md"
          />
        </Group> */}
      </Stack>
    </>
  );
};
