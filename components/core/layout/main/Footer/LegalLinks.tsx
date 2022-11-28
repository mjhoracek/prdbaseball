import Link from "next/link";

import { Group, MediaQuery, useMantineTheme } from "@mantine/core";

export const LegalLinks = () => {
  const { other, fontSizes } = useMantineTheme();

  return (
    <MediaQuery largerThan="sm" styles={{ justifyContent: "flex-end" }}>
      <Group position="center"></Group>
    </MediaQuery>
  );
};
