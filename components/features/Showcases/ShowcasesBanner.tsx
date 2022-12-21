import {
    Center,
    createStyles,
    Stack,
    Title,
    Text,
    useMantineTheme,
    Group,
  } from "@mantine/core";
  import React from "react";
import Link from "next/link";
import { Button } from "../../shared/atoms/Button";

  const buttons = [
    {
        link:  '/',
        label: 'PRD COLLEGE PLANNING BRANCH'
    },
  ]
  
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
        fontSize: '26px',
    
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
  
  
  export const ShowcasesBanner = (props: Props) => {
    const { classes } = useStyles();
    const {colors} = useMantineTheme()
  
    return (
      <>
        <Stack className={classes.container}>
          <Title className={classes.title}>College Showcases and Planning</Title>
          <Stack sx={{ width: "80%"}}>
            <Text align="center">

            PRD has relationships with the majority of college staff throughout the country. We host a variety of traditional showcases and closed on campus events and assist in the navigation of the college path for athletes and families.
            </Text>
          </Stack>
          <Center sx={{width: '100%', display: 'flex', justifyContent: 'center',  padding: '0 10px',}}>
          <Group position="center" py={20}>
            {buttons.map((button, index) => {
              return (

                      <Link key={index} href={button.link}>
                        <Button sx={{width: '300px'}}>{button.label}</Button>
                      </Link>
              );
            })}
          </Group>
          </Center>
          <Stack pt={20}>
          <Title className={classes.subTitle}>2023 SHOWCASES</Title>
          <Text align="center">
To Be Announced - Stay tuned!
</Text>
          </Stack>
        </Stack>
      </>
    );
  };
  