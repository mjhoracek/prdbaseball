import { Group, Stack, Title, useMantineTheme } from "@mantine/core";
import Link from "next/link";
import React from "react";
import { Button } from "../../shared/atoms/Button";
import { SVG } from "../../shared/atoms/SVG";

type Props = {};

const socialLinks = {
  instagram: "https://www.instagram.com/prdbaseballacademy/",
  facebook: "https://www.facebook.com/PRDBaseballAcademy/",
  twitter: "https://twitter.com/prdbaseball",
};

export const SocialLinks = (props: Props) => {
  const { colors } = useMantineTheme();

  return (
    <Group spacing={50} position="center" sx={{ width: "100%" }}>
      <a
        href={socialLinks.instagram}
        style={{ textDecoration: "none", color: colors.charcoal[0] }}
      >
        <SVG.Instagram style={{ cursor: "pointer" }} size={30} />
      </a>
      <a
        href={socialLinks.instagram}
        style={{ textDecoration: "none", color: colors.charcoal[0] }}
      >
        <SVG.Facebook style={{ cursor: "pointer" }} size={30} />
      </a>
      <a
        href={socialLinks.instagram}
        style={{ textDecoration: "none", color: colors.charcoal[0] }}
      >
        <SVG.Twitter style={{ cursor: "pointer" }} size={30} />
      </a>
    </Group>
  );
};
