import {
  Center,
  createStyles,
  Group,
  Stack,
  Title,
  Text,
  Image,
  SimpleGrid,
} from "@mantine/core";
import React from "react";
import { NAVBAR_HEIGHT } from "../../core/layout/main";
import { coaches } from "./coaches";

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

type HeadshotProps = {
  image: string;
  name: string;
  position: string;
};

const Headshot = ({ image, name, position }: HeadshotProps) => {
  return (
    <Stack spacing={4} align="center">
      <Image radius="sm" src={image} alt={name} />
      <Title
        sx={({ colors }) => ({
          fontSize: "22px",
          fontFamily: "Oswald, sans-serif",
          textTransform: "uppercase",
          color: colors.eggshell[0],
        })}
      >
        {name}
      </Title>
      <Text>{position}</Text>
    </Stack>
  );
};

export const AboutBanner = (props: Props) => {
  const { classes } = useStyles();

  return (
    <>
      <Stack className={classes.container}>
        <Title className={classes.title}>About Us</Title>
        <Stack sx={{ width: "80%", paddingBottom: "5%" }}>
          <Text align="center">
            At PRD, our main objective is to help extend the careers of amateur
            baseball players 7U thru 18U through high level training, proper
            team placement, collegiate planning, and exposure when the time is
            right. We work with our clients to create a variety of training
            programs for all ages that assist in this mission. Our trainers and
            advisors are vested, knowledgeable and eager to use modern
            technology to create positive changes in production for players on
            the field.
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
          {coaches.map((coach, index) => {
            return (
              <Center key={index}>
                <Headshot
                  name={coach.name}
                  position={coach.position}
                  image={"/images/ghost-banner.png"}
                />
              </Center>
            );
          })}
        </SimpleGrid>
      </Stack>
    </>
  );
};
