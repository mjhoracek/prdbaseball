import Link from "next/link";
import type { Dispatch, SetStateAction } from "react";

import { Burger, Center, Group, Header as MantineHeader } from "@mantine/core";
import { SVG } from "../../../../shared/atoms/SVG";

import { NAVBAR_HEIGHT } from "../index";

interface Props {
  transparent?: boolean;
  isDrawerOpen: boolean;
  setIsDrawerOpen: Dispatch<SetStateAction<boolean>>;
}

export const Header = ({ isDrawerOpen, setIsDrawerOpen }: Props) => {
  return (
    <MantineHeader
      height={NAVBAR_HEIGHT}
      p="lg"
      fixed
      styles={{
        root: {
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          border: "none",
          transition: ".15s",
        },
      }}
    >
      <Link href="/">
        <div>
          <SVG.GhostLogo
            style={{
              width: "50px",
              height: "50px",
              marginTop: "-8px",
              cursor: "pointer",
              fill: "#6E6B6D",
            }}
          />
        </div>
      </Link>
      <Group spacing="lg" position="right" noWrap sx={{ color: "white" }}>
        <Center>
          <Burger
            opened={isDrawerOpen}
            onClick={() => setIsDrawerOpen((o) => !o)}
            size="sm"
            color={"white"}
          />
        </Center>
      </Group>
    </MantineHeader>
  );
};
