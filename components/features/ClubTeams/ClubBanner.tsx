import {
    Center,
    createStyles,
    Stack,
    Title,
    Text,
    SimpleGrid,
    useMantineTheme,
  } from "@mantine/core";
  import React from "react";

  const stats = [
    {
        stat:  '450+',
        label: 'players moved on to NCAA baseball'
    },
    {
        stat:  '50+',
        label: 'perfect game titles'
    },
    {
        stat:  '8',
        label: 'National Championships in PG & PBR'
    },
    {
        stat:  '200+',
        label: 'Top 3 PG finishes'
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
  
  type StatProps = {
    stat: string;
    label: string;
  };
  
  const Stat = ({ stat, label }: StatProps) => {
    return (
      <Stack spacing={4} align="left" sx={{width: '100%', }}>
        <Title
          sx={({ colors }) => ({
            width: '100%',
            fontSize: "22px",
            fontFamily: "Oswald, sans-serif",
            textTransform: "uppercase",
            color: colors.eggshell[0],

          })}
        >
          {stat}
        </Title>
        <Text sx={{width: '100%'}}>{label}</Text>
      </Stack>
    );
  };
  
  export const ClubBanner = (props: Props) => {
    const { classes } = useStyles();
    const {colors} = useMantineTheme()
  
    return (
      <>
        <Stack className={classes.container}>
          <Title className={classes.title}>Club Teams</Title>
          <Stack sx={{ width: "80%", paddingBottom: "5%" }}>
            <Text align="center">

            In 2017, PRD decided to enter the club baseball landscape and since have made our impact on not only the Mid-Atlantic region, but also on the national stage.
            </Text>
          </Stack>
          <Center sx={{width: '100%', padding: '0 10px',}}>
          <SimpleGrid
            px={25}
            breakpoints={[
              { minWidth: "xs", cols: 1 },
              { minWidth: "sm", cols: 2 },
              { minWidth: "md", cols: 3 },
              { minWidth: "lg", cols: 4 },
              { minWidth: "xl", cols: 4 },
            ]}
          >
            {stats.map((stat, index) => {
              return (
                <Center key={index} sx={{padding: '10px'}}>
                    <div style={{border: `1px solid ${colors.red[9]}`, height: '100%', width: '1px', marginRight: '10px'}}></div>
                  <Stat
                    stat={stat.stat}
                    label={stat.label}
                  />
                </Center>
              );
            })}
          </SimpleGrid>
          </Center>
        </Stack>
      </>
    );
  };
  