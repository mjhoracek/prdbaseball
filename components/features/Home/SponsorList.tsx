import { Box, Group, Image } from "@mantine/core";
import React from "react";

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

export const SponsorList = (props: Props) => {
  return (
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
  );
};
