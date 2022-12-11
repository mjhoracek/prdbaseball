import { ReactNode, useState } from "react";

import { Stack } from "@mantine/core";

import { Drawer } from "./Drawer";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { useMainStyles } from "./styles";

interface Props {
  transparentHeader?: boolean;
  children: ReactNode;
}

export const NAVBAR_HEIGHT = 70;
export const NAVBAR_WIDTH = 300;

const MainLayout = ({ transparentHeader, children }: Props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { classes } = useMainStyles({ NAVBAR_HEIGHT });

  return (
    <Stack
      spacing={0}
      sx={{  minHeight: "100vh" }}
    >
      <Header
        transparent={transparentHeader}
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />
      <Drawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      <main className={classes.main}>{children}</main>
    </Stack>
  );
};

export const getMainLayout = (page: ReactNode) => (
  <MainLayout>{page}</MainLayout>
);
export const getLayoutWithTransparentHeader = (page: ReactNode) => (
  <MainLayout transparentHeader>{page}</MainLayout>
);
