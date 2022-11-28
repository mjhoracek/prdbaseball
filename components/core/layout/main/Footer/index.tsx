import Link from "next/link";

import {
  Group,
  Image,
  MediaQuery,
  Stack,
  useMantineTheme,
} from "@mantine/core";

import { Copyright } from "./Copyright";
import { LegalLinks } from "./LegalLinks";

export const Footer = () => {
  const { colors, spacing, other } = useMantineTheme();

  // TODO: Instead of using 165034650704537 <MediaQuery>s, let's use createStyles.
  return (
    <MediaQuery
      smallerThan="sm"
      styles={{ padding: spacing.xl, flexDirection: "column" }}
    >
      <Group
        position="apart"
        px={70}
        py={spacing.xl}
        style={{ width: "100%", backgroundColor: colors.navy[7] }}
      >
        <Stack align="left">
          <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
            <div>
              <Copyright />
            </div>
          </MediaQuery>
        </Stack>
        <MediaQuery smallerThan="sm" styles={{ width: "100%" }}>
          <Stack>
            <MediaQuery smallerThan="sm" styles={{ justifyContent: "center" }}>
              <Group
                spacing={other.spacing.xxl}
                position="right"
                style={{ width: "100%" }}
              ></Group>
            </MediaQuery>
            <MediaQuery smallerThan="sm" styles={{ justifyContent: "center" }}>
              <Group
                position="right"
                spacing={other.spacing.xxl}
                style={{ width: "100%" }}
              ></Group>
            </MediaQuery>
            <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
              <div style={{ width: "100%" }}>
                <LegalLinks />
              </div>
            </MediaQuery>
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Stack align="center" spacing="xl" style={{ width: "100%" }}>
                <LegalLinks />
                <Copyright />
              </Stack>
            </MediaQuery>
          </Stack>
        </MediaQuery>
      </Group>
    </MediaQuery>
  );
};
