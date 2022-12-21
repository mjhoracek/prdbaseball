import { createStyles, Stack, Title, Image, Group } from "@mantine/core";
import React from "react";

type Props = {};

const useStyles = createStyles(({ breakpoints }) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    paddingBottom: "30px",
  },
  title: {
    color: "white",
    fontFamily: "Stalinist One",
    textAlign: "center",

    [`@media (max-width: ${breakpoints.sm}px)`]: {
      paddingTop: "20px",
      fontSize: "23px",
    },
  },
  subTitle: {
    color: "white",
    fontFamily: "Stalinist One",
    textAlign: "center",
    fontSize: "26px",

    [`@media (max-width: ${breakpoints.sm}px)`]: {
      paddingTop: "20px",
      fontSize: "18px",
    },
  },
  banner: {
    width: "100%",
    padding: "10px",

    [`@media (max-width: ${breakpoints.sm}px)`]: {
      flexDirection: "column-reverse",
    },
  },
  imageContainer: {
    width: "20%",
    [`@media (max-width: ${breakpoints.sm}px)`]: {
      width: "45%",
    },
  },
  textContainer: {
    width: "50%",
    padding: "25px 10px",
    color: "white",
    fontSize: "16px",
    textAlign: "center",

    [`@media (max-width: ${breakpoints.xs}px)`]: {
      fontSize: "14px",
    },
  },
}));

const photoKeys = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
  "32",
  "33",
];

export const Gallery = (props: Props) => {
  const { classes } = useStyles();

  return (
    <>
      <Stack className={classes.container}>
        <Title className={classes.title}>Championship Gallery</Title>
        <Group position="center" px={25} sx={{ width: "100%" }}>
          {photoKeys.map((key, i) => {
            return (
              <Image
                key={i}
                radius="md"
                src={`/static/images/prdPhotos/${key}.jpg`}
                alt={`photo ${key}`}
                width={350}
                height={350}
              />
            );
          })}
        </Group>
      </Stack>
    </>
  );
};
