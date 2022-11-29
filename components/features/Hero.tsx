import React from "react";
import {
  Box,
  Center,
  Group,
  Image,
  Stack,
  Title,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { NAVBAR_HEIGHT } from "../core/layout/main";
import { Button } from "../shared/atoms/Button";
import { GlowWrapper } from "../shared/atoms/GlowWrapper";
import Link from "next/link";

type Props = {};

const sponsorLinks = [
  "/images/sponsors/s1.png",
  "/images/sponsors/s2.png",
  "/images/sponsors/s3.png",
  "/images/sponsors/s4.png",
  "/images/sponsors/s5.png",
  "/images/sponsors/s6.png",
  "/images/sponsors/s7.png",
  "/images/sponsors/s8.png",
  "/images/sponsors/s9.png",
  "/images/sponsors/s10.png",
];

export const HeroComponent = (props: Props) => {
  const { breakpoints, other } = useMantineTheme();

  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        maxWidth: "100vw",
        minHeight: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
      }}
    >
      <Center pt={10}>
        <Title
          color="white"
          sx={{
            fontFamily: "Stalinist One",
            textAlign: "center",

            [`@media (max-width: ${breakpoints.sm}px)`]: {
              paddingTop: "20px",
              fontSize: "23px",
            },
          }}
        >
          PRD Baseball Academy
        </Title>
      </Center>
      <Group
        position="center"
        sx={{
          width: "100%",
          padding: "10px",

          [`@media (max-width: ${breakpoints.sm}px)`]: {
            flexDirection: "column-reverse",
          },
        }}
      >
        <Stack
          sx={{
            marginRight: "100px",
            [`@media (max-width: ${breakpoints.sm}px)`]: {
              marginRight: "0px",
            },
          }}
        >
          <Title sx={{ textAlign: "center", fontSize: 14 }}>
            Important Links
          </Title>
          <Link
            href={
              "https://peninsulariverdawgs.leagueapps.com/events/3411131-2023-prd-ghost-tryout-portal"
            }
          >
            <Button>2023 Ghost Tryouts, Eatontown, NJ 9-17U</Button>
          </Link>
          <Button>Lehigh Valley Ghost Tryouts - 2023 10U-17U</Button>
          <Button>South Jersey Ghost, Sewell, NJ, 8U -17U</Button>
          <Button>Ghost Squad PA, Newtown, NJ 9-17U</Button>
          <Button>North Jersey Ghost 9-17U</Button>
        </Stack>
        <Center
          sx={{
            width: "40%",
            [`@media (max-width: ${breakpoints.sm}px)`]: {
              width: "80%",
            },
          }}
        >
          <GlowWrapper>
            <Image
              src="/images/ghost-banner.png"
              width="100%"
              alt="PRD Ghost Logo"
            />
          </GlowWrapper>
        </Center>
      </Group>
      <Text
        sx={{
          fontSize: "16px",
          textAlign: "center",

          [`@media (max-width: ${breakpoints.xs}px)`]: {
            fontSize: "14px",
          },
        }}
      >
        Thank you to our sponsors!
      </Text>
      <Group position="center" sx={{ width: "100%", padding: "0 10px" }}>
        {sponsorLinks.map((link, index) => {
          return (
            <Box
              key={index}
              sx={{
                width: "100px",
                height: "100px",
                cursor: "pointer",

                "@media (max-width: 550px)": {
                  width: "50px",
                  height: "50px",
                },
              }}
            >
              <Image src={link} width="100%" height="100%" />
            </Box>
          );
        })}
      </Group>
    </Stack>
  );
};
