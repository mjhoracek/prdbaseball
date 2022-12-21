import { Center, createStyles, Stack, Title, Text, Group } from "@mantine/core";
import React from "react";

import { MembershipCard } from "./MembershipCard";

const memberships = [
  {
    type: "Players",
    price: "$199",
    list: ["Access to Hitting Cages", "HackAttack Machine", "Weight Room"],
    link: "https://peninsulariverdawgs.leagueapps.com/clubteams/2867850-ghost-lab-memberships",
  },
  {
    type: "Pitchers",
    price: "$249",
    list: ["PRD Team Buildr P App", "Arm Care Equipment", "Weight Room"],
    link: "https://peninsulariverdawgs.leagueapps.com/clubteams/2867850-ghost-lab-memberships",
  },
  {
    type: "Dual",
    price: "$299",
    list: ["Pitcher/Player Combo"],
    link: "https://peninsulariverdawgs.leagueapps.com/clubteams/2867850-ghost-lab-memberships",
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

export const MembershipSection = (props: Props) => {
  const { classes } = useStyles();

  return (
    <>
      <Stack className={classes.container}>
        <Title className={classes.title}>Memberships</Title>
        <Stack sx={{ width: "80%" }}>
          <Text align="center">Available for 9th to 12th Grade players</Text>
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
            {memberships.map((item, i) => {
              return (
                <div key={i}>
                  <MembershipCard
                    type={item.type}
                    link={item.link}
                    list={item.list}
                    price={item.price}
                  />
                </div>
              );
            })}
          </Group>
        </Center>
      </Stack>
    </>
  );
};
