import {
  Center,
  createStyles,
  Stack,
  Title,
  Text,
  useMantineTheme,
  Group,
} from "@mantine/core";
import React from "react";
import Link from "next/link";
import { Button } from "../../shared/atoms/Button";

const buttons = [
  {
    link: "/",
    label: "Winter 2023 Programs",
  },
  {
    link: "/",
    label: "Perfect Game Titles",
  },
  {
    link: "/",
    label: "National Championships in PG & PBR",
  },
];

type Props = {};

const useStyles = createStyles(({ breakpoints }) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    paddingBottom: "30px",
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
  subTitle: {
    color: "white",
    fontFamily: "Stalinist One",
    textAlign: "center",
    fontSize: "23px",

    [`@media (max-width: ${breakpoints.sm}px)`]: {
      paddingTop: "20px",
      fontSize: "18px",
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

type StatProps = {
  stat: string;
  label: string;
};

const Stat = ({ stat, label }: StatProps) => {
  return (
    <Stack spacing={4} align="left" sx={{ width: "100%" }}>
      <Title
        sx={({ colors }) => ({
          width: "100%",
          fontSize: "22px",
          fontFamily: "Oswald, sans-serif",
          textTransform: "uppercase",
          color: colors.eggshell[0],
        })}
      >
        {stat}
      </Title>
      <Text sx={{ width: "100%" }}>{label}</Text>
    </Stack>
  );
};

export const TrainingBanner = (props: Props) => {
  const { classes } = useStyles();
  const { colors } = useMantineTheme();

  return (
    <>
      <Stack className={classes.container}>
        <Title className={classes.title}>PRD Training</Title>
        <Stack sx={{ width: "80%", paddingBottom: "5%" }}>
          <Text align="center">
            PRD’s administration and staff have trained players in the tri-state
            area since 2004. Between 2004-2017, we actively trained over 250
            players that went on to play college baseball including several
            former MiLB and MLB players. Prior to being the destination for club
            baseball, we were the optimal choice for training.
          </Text>
          <Text align="center">
            Today, we continue to build the core of PRD which prides itself on
            the development and success of players that train with us. We do not
            believe in cookie cutter training, we opt to customize, personalize
            and attack movement dysfunction through drill work and exercise that
            addresses each players issues. There are far too many trainers and
            facilities that flip baseballs, fungo groundballs and catch pitchers
            without pre-assessing the athlete and truly explaining the
            goals/objectives.
          </Text>
          <Text align="center">
            At PRD, we are very tech friendly and our trainers continue their
            education throughout their careers. At our core, we train, develop
            and assist in extending players careers through higher level
            movement and thought.
          </Text>
        </Stack>
        <Center
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            padding: "0 10px",
          }}
        >
          <Group position="center">
            {buttons.map((button, index) => {
              return (
                <Link key={index} href={button.link}>
                  <Button sx={{ width: "300px" }}>{button.label}</Button>
                </Link>
              );
            })}
          </Group>
        </Center>
      </Stack>
    </>
  );
};
