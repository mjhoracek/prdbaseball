import {
  Center,
  createStyles,
  Stack,
  Title,
  Text,
  Image,
  SimpleGrid,
} from "@mantine/core";
import React from "react";
import { NAVBAR_HEIGHT } from "../../core/layout/main";
import { Button } from "../../shared/atoms/Button";
import Link from "next/link";

const clubTeams = [
  {
    image: "/images/prdPhotos/34.jpg",
    name: "Ghost NJ",
    address: "Ghost Lab, 748 Hope Road Eatontown, NJ",
    link: "",
  },
  {
    image: "/images/prdPhotos/17.jpg",
    name: "Ghost Squad PA",
    address: "Newtown Athletic Center 123 Street Newtown, PA",
    link: "",
  },
  {
    image: "/images/prdPhotos/15.jpg",
    name: "South Jersey Ghost",
    address: "Legends 123 Street Sewell, NJ",
    link: "",
  },
  {
    image: "/images/prdPhotos/21.jpg",
    name: "North Jersey Ghost",
    address: "Fairfield 123 Street Parsipanny, NJ",
    link: "",
  },
  {
    image: "/images/prdPhotos/16.jpg",
    name: "RCBC Ghost",
    address: "X Athletic Center 1400 Travis Avenue Staten Island, NY",
    link: "",
  },
];

const nationalTeams = [
  {
    image: "/images/prdPhotos/17.jpg",
    name: "Artillery Scout",
    address:
      "Comprised of players from across the United States and home to several top 20 ranked teams in the nation between the ages of 14U through 18U.",
    link: "",
  },
  {
    image: "/images/prdPhotos/17.jpg",
    name: "East Coast Ghost Scout",
    address:
      "Comprised of players from NJ, NY, PA, and other states and home to several top 20 ranked teams in the nation between the ages of 10U through 18U.",
    link: "",
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
    maxWidth: "100vw",
    padding: "45px",
  },
  title: {
    color: "white",
    fontFamily: "Stalinist One",
    textAlign: "center",
    fontSize: "23px",
    paddingBottom: "50px",

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

type HeadshotProps = {
  image: string;
  name: string;
  address: string;
  link: string;
};

const Team = ({ image, name, address, link }: HeadshotProps) => {
  return (
    <Stack spacing={4} align="center" sx={{ padding: "20px 0" }}>
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
      <Text sx={{ textAlign: "center", padding: "10px 0", minHeight: "70px" }}>
        {address}
      </Text>
      <Link href={link}>
        <Button>LEARN MORE</Button>
      </Link>
    </Stack>
  );
};

export const ClubSelections = (props: Props) => {
  const { classes } = useStyles();

  return (
    <>
      <Stack pb={50} className={classes.container}>
        <Title className={classes.title}>Regional Teams</Title>
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
          {clubTeams.map((team, index) => {
            return (
              <Center key={index}>
                <Team
                  address={team.address}
                  link={team.link}
                  name={team.name}
                  image={team.image}
                />
              </Center>
            );
          })}
        </SimpleGrid>

        <Stack sx={{ paddingTop: "45px" }} align="center">
          <Title className={classes.title}>National Teams</Title>
          <Center>
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
              {nationalTeams.map((team, index) => {
                return (
                  <Center key={index}>
                    <Team
                      address={team.address}
                      link={team.link}
                      name={team.name}
                      image={team.image}
                    />
                  </Center>
                );
              })}
            </SimpleGrid>
          </Center>
        </Stack>
      </Stack>
    </>
  );
};
