import React from "react";
import { Box, Center, Group, Image, Stack, Title } from "@mantine/core";
import { NAVBAR_HEIGHT } from "../../../core/layout/main";

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
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        minHeight: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
      }}
    >
      <Center pt={10}>
        <Title
          color="white"
          sx={{
            fontFamily: "Stalinist One",
            textAlign: "center",

            // "@media (max-width: 950px)": {
            //   fontSize: "20px",
            // },

            "@media (max-width: 550px)": {
              fontSize: "18px",
            },
          }}
        >
          PRD Baseball Academy
        </Title>
      </Center>
      <Center
        sx={{
          width: "40%",
          "@media (max-width: 550px)": {
            width: "100%",
          },
        }}
      >
        <Image src="/images/ghost-banner.png" width="100%" />
      </Center>
      <Title sx={{ fontSize: "18px" }}>Thank you to our sponsors!</Title>
      <Group position="center" sx={{ width: "100%", padding: "0 10px" }}>
        {sponsorLinks.map((link, index) => {
          return (
            <Box
              key={index}
              sx={{
                width: "100px",
                height: "100px",

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
