import { Box, Group, Image } from "@mantine/core";
import React from "react";

type Props = {};

const sponsorLinks = [
  "/static/images/sponsors/1.png",
  "/static/images/sponsors/2.png",
  "/static/images/sponsors/3.png",
  "/static/images/sponsors/4.png",
  "/static/images/sponsors/5.png",
  "/static/images/sponsors/6.png",
  "/static/images/sponsors/7.png",
  "/static/images/sponsors/8.png",
  "/static/images/sponsors/9.png",
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
