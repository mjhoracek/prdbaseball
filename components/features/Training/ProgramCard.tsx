import { Stack, Title, Text, useMantineTheme, Box } from "@mantine/core";
import React from "react";
import Link from "next/link";
import { Button } from "../../shared/atoms/Button";

type ProgramCardProps = {
  title: string;
  description: string;
  price?: string;
  date?: string;
  link?: string;
};

export const ProgramCard = ({
  title,
  description,
  price,
  date,
  link,
}: ProgramCardProps) => {
  const { colors, breakpoints } = useMantineTheme();

  return (
    <Stack
      spacing={4}
      align="left"
      sx={{
        padding: "20px",
        width: "100%",
      }}
    >
      <Title
        sx={({ colors }) => ({
          fontSize: "22px",
          fontFamily: "Oswald, sans-serif",
          textTransform: "uppercase",
          color: colors.eggshell[0],
        })}
      >
        {title}
      </Title>
      {price && <Text>{price}</Text>}
      <Stack pb={20} spacing={2} align="left">
        <Text>{description}</Text>
      </Stack>
      {link && (
        <Link href={link}>
          <Button sx={{ width: "100px" }}>Register</Button>
        </Link>
      )}
      <Box
        sx={{
          border: `1px solid ${colors.red[9]}`,
          height: "1px",
          width: "100%",
          marginTop: "15px",
        }}
      ></Box>
    </Stack>
  );
};
