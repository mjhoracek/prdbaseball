import { createStyles, Stack, Title, useMantineTheme } from "@mantine/core";
import React from "react";
import { ProgramCard } from "./ProgramCard";

const programs = [
  {
    title: "One on One Lessons with a PRD Instructor",
    description:
      "Feeling like you need to refine your skills with a little more coaching attention than normal? Sign up for a one on one lesson.",
    date: "Jan 15, 2023",
    link: "https://prdbaseballacademy.ezfacility.com/Sessions",
  },
  {
    title: "Travel Team Training",
    description:
      "Text 201-304-3004 for more information on indoor & outdoor team training options",
    date: "Jan 15, 2023",
    link: "https://prdbaseballacademy.ezfacility.com/Sessions",
  },
  {
    title:
      "PRD WINTER Arm Performance & Velocity Enhancement with Marc Magliaro",
    description:
      "This program will help in developing a healthy and strong arm throughout the off season.",
    price: "$300",
    date: "Jan 15, 2023",
    link: "https://peninsulariverdawgs.leagueapps.com/events/3448362-prd-winter-arm-performance--velocity-enhancement-with-marc-magliaro",
  },
  {
    title:
      "PRD WINTER swing pattern and exit velocity enhancment program with kyle lauria (thursdays)",
    description:
      "This program will help in developing swing pattern, bat to ball skills and to enhance exit velo",
    price: "$300",
    date: "Jan 15, 2023",
    link: "https://peninsulariverdawgs.leagueapps.com/events/3457971-prd-winter-thursday-swing-performance--exit-velo-enhancement",
  },
  {
    title:
      "PRD WINTER swing pattern and exit velocity enhancment program with kyle lauria (sundays)",
    description:
      "This program will help in developing swing pattern, bat to ball skills and to enhance exit velo",
    price: "$300",
    date: "Jan 15, 2023",
    link: "https://peninsulariverdawgs.leagueapps.com/events/3460815-prd-winter-sunday-swing-performance--exit-velo-enhancement",
  },
];

type Props = {};

const useStyles = createStyles(({ colors, radius, spacing, breakpoints }) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    marginTop: "50px",
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

export const ProgramsSection = (props: Props) => {
  const { classes } = useStyles();
  const { colors } = useMantineTheme();

  return (
    <>
      <Stack className={classes.container}>
        <Title className={classes.title}>Winter 2023 Programs</Title>
        <Stack align="stretch" sx={{ width: "80%", padding: "25px" }}>
          {programs.map((item, i) => {
            return (
              <div key={i}>
                <ProgramCard
                  title={item.title}
                  link={item.link}
                  description={item.description}
                  price={item.price}
                  date={item.date}
                />
              </div>
            );
          })}
        </Stack>
      </Stack>
    </>
  );
};
