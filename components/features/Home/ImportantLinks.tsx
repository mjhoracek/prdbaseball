import { Stack, Title } from "@mantine/core";
import Link from "next/link";
import React from "react";
import { Button } from "../../shared/atoms/Button";

type Props = {};

const buttons = [
  {
    link: "https://peninsulariverdawgs.leagueapps.com/events/3411131-2023-prd-ghost-tryout-portal",
    label: "2023 Ghost Tryouts, Eatontown, NJ 9-17U",
  },
  {
    link: "https://peninsulariverdawgs.leagueapps.com/clubteams/3392288-2023-spring-summer-10-17u-lehigh-valley-ghost-tryouts",
    label: "Lehigh Valley Ghost Tryouts - 2023, 10U-17U ",
  },
  {
    link: "https://sjghost.leagueapps.com/clubteams/3479466-south-jersey-ghost-2023-new-player-tryout",
    label: "South Jersey Ghost, Sewell, NJ 8U-17U",
  },
  {
    link: "https://ghostsquadpa.leagueapps.com/events/3053038-ghost-squad-pa-fall-tryouts-new-players-only",
    label: "Ghost Squad PA, Newtown, NJ 9-17U",
  },
  {
    link: "https://northjerseyghost.leagueapps.com/clubteams/3495174-north-jersey-ghost-2023-tryout-portal",
    label: "North Jersey Ghost 9-17U",
  },
];

export const ImportantLinks = (props: Props) => {
  return (
    <Stack
      sx={({ breakpoints }) => ({
        marginRight: "100px",
        [`@media (max-width: ${breakpoints.sm}px)`]: {
          marginRight: "0px",
        },
      })}
    >
      <Title sx={{ textAlign: "center", fontSize: 14 }}>Important Links</Title>

      {buttons.map((button, i) => {
        return (
          <Link key={i} href={button.link}>
            <Button>{button.label}</Button>
          </Link>
        );
      })}
    </Stack>
  );
};
