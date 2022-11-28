import { Dispatch, SetStateAction } from "react";

import { Drawer as MantineDrawer, Stack } from "@mantine/core";

import { LinkList } from "../LinkList";

interface Props {
  isDrawerOpen: boolean;
  setIsDrawerOpen: Dispatch<SetStateAction<boolean>>;
}

export const Drawer = ({ isDrawerOpen, setIsDrawerOpen }: Props) => {
  return (
    <MantineDrawer
      padding="lg"
      opened={isDrawerOpen}
      onClose={() => setIsDrawerOpen(false)}
      styles={{ drawer: { display: "flex", flexDirection: "column" } }}
    >
      <Stack align="apart" style={{ flex: 1, justifyContent: "space-between" }}>
        <Stack>
          <LinkList />
        </Stack>
      </Stack>
    </MantineDrawer>
  );
};
