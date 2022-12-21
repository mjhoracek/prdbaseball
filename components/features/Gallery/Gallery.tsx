import {
    createStyles,
    Stack,
    Title,
    Image,
    useMantineTheme,
    Group,
  } from "@mantine/core";
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
  
  
  export const Gallery = (props: Props) => {
    const { classes } = useStyles();
    const {colors} = useMantineTheme()
  
    return (
      <>
        <Stack className={classes.container}>
          <Title className={classes.title}>Championship Gallery</Title>
          <Group position="center" px={25} sx={{width: '100%'}}>
<Image radius="md"  src={'/images/prdPhotos/1.jpg'} alt={'photo 1'} width={300} height={300}/>
<Image radius="md" src={'/images/prdPhotos/2.jpg'} alt={'photo 1'} width={300} height={300}/>
<Image radius="md" src={'/images/prdPhotos/3.jpg'} alt={'photo 1'} width={300} height={300}/>
<Image radius="md" src={'/images/prdPhotos/4.jpg'} alt={'photo 1'} width={300} height={300}/>
<Image radius="md" src={'/images/prdPhotos/5.jpg'} alt={'photo 1'} width={300} height={300}/>
<Image radius="md" src={'/images/prdPhotos/6.jpg'} alt={'photo 1'} width={300} height={300}/>
<Image radius="md" src={'/images/prdPhotos/7.jpg'} alt={'photo 1'} width={300} height={300}/>
<Image radius="md" src={'/images/prdPhotos/8.jpg'} alt={'photo 1'} width={300} height={300}/>

          </Group>
        </Stack>
      </>
    );
  };
  