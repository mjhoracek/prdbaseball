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
    link: "https://peninsulariverdawgs.leagueapps.com/events/3411131-2023-prd-ghost-tryout-portal",
    label: "2023 Ghost Tryouts, Eatontown, NJ 9-17U",
  },
  {
    link: "https://peninsulariverdawgs.leagueapps.com/events/3411131-2023-prd-ghost-tryout-portal",
    label: "2023 Ghost Tryouts, Eatontown, NJ 9-17U",
  },
  {
    link: "https://peninsulariverdawgs.leagueapps.com/events/3411131-2023-prd-ghost-tryout-portal",
    label: "2023 Ghost Tryouts, Eatontown, NJ 9-17U",
  },
  {
    link: "https://peninsulariverdawgs.leagueapps.com/events/3411131-2023-prd-ghost-tryout-portal",
    label: "2023 Ghost Tryouts, Eatontown, NJ 9-17U",
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
