import {
    createStyles,
    Stack,
    Title,
    useMantineTheme,
  } from "@mantine/core";
  import React from "react";
import { ProgramCard } from "./ProgramCard";

  const programs = [
    {
        title:  'Learn how to pitch like a yard goat with Marc Magliaro',
        description: 'in this program you will learn all about the fundamentals of piutching that carried marc to the high levels of minor league baseball. You will learn how he was able to throw 95 despite being such a small guy, too',
        price: '$300',
        date: "Jan 15, 2023",
        link: '/'
    },
    {
        title:  'Learn how to pitch like a yard goat with Marc Magliaro',
        description: '$199',
        price: '$300',
        date: "Jan 15, 2023",
        link: '/'
    },    {
        title:  'Learn how to pitch like a yard goat with Marc Magliaro',
        description: '$199',
        price: '$300',
        date: "Jan 15, 2023",
        link: '/'
    },    {
        title:  'Learn how to pitch like a yard goat with Marc Magliaro',
        description: '$199',
        price: '$300',
        date: "Jan 15, 2023",
        link: '/'
    },
  ]
  
  type Props = {};
  
  const useStyles = createStyles(({ colors, radius, spacing, breakpoints }) => ({
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      width: "100%",
      marginTop: '50px',
      paddingBottom: "50px",
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
        fontSize: '23px',
    
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


  export const ProgramsSection = (props: Props) => {
    const { classes } = useStyles();
    const {colors} = useMantineTheme()
  
    return (
      <>
        <Stack className={classes.container}>
          <Title className={classes.title}>Winter 2023 Programs</Title>
          <Stack align="center" sx={{width: '100%', padding: '25px', }}>
              {programs.map((item, i) => {
                  return(
                      <div key={i}>
                          <ProgramCard 
                          title={item.title}
                          link={item.link}
                          description={item.description}
                          price={item.price}
                          date={item.date}
                          />
                      </div>
                  )
              })}
          </Stack>
        </Stack>
      </>
    );
  };
  