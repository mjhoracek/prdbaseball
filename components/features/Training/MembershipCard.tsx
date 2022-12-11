import {
    Stack,
    Title,
    Text,
    useMantineTheme,
    Group,
  } from "@mantine/core";
  import React from "react";
import Link from "next/link";
import { Button } from "../../shared/atoms/Button";
import { SVG } from "../../shared/atoms/SVG";

type MembershipCardProps = {
    type: string;
    price: string;
    list: string[];
    link: string
  };
  
  export const MembershipCard = ({ type, price, list, link }: MembershipCardProps) => {
    const {colors} = useMantineTheme()

    return (
      <Stack spacing={4} align="center" sx={{padding: '20px', backgroundColor: colors.charcoal[5], borderRadius: 4}}>
        <Title
          sx={({ colors }) => ({
            fontSize: "22px",
            fontFamily: "Oswald, sans-serif",
            textTransform: "uppercase",
            color: colors.eggshell[0],
          })}
        >
          {type}
        </Title>
        <Text>{price}</Text>
        <Stack pb={20} spacing={2} align="left">
        {list.map((item, i) => {
            return(
                <Group key={i}>
                    <SVG.CheckCircle size={10} />
                    <Text>{item}</Text>
                </Group>
            )
        })}
        </Stack>
        <Link href={link}>
            <Button>LEARN MORE</Button>        
        </Link>
      </Stack>
    );
  };