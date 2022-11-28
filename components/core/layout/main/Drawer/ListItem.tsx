import Link from "next/link";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";

import { Button, Collapse, List, useMantineTheme } from "@mantine/core";

interface Props {
  setNavbarIsOpen: Dispatch<SetStateAction<boolean>>;
  isActive: boolean;
  path: string;
  buttonLabel: string;
  icon: JSX.Element;
  subItems?: Array<{
    title: string;
    path: string;
  }>;
}

export const ListItem = ({
  path,
  icon,
  buttonLabel,
  subItems,
  setNavbarIsOpen,
  isActive,
}: Props) => {
  const { route } = useRouter();
  const { colors, spacing, radius } = useMantineTheme();

  // TODO: What was the background she shows in the navbar? Active state or hover?
  /* <div style={{ borderRadius: radius.sm, background: isActive ? colors.teal[1] : "transparent" }}> */
  return (
    <div
      style={{
        borderRadius: radius.sm,
        background: isActive ? colors.teal[1] : "transparent",
      }}
    >
      <Link href={path} passHref>
        <a
          style={{ textDecoration: "none" }}
          onClick={() => (!subItems ? setNavbarIsOpen(false) : null)}
        >
          <Button
            variant="subtle"
            fullWidth
            leftIcon={icon}
            styles={{
              icon: { height: "100% !important", marginRight: spacing.lg },
              inner: { justifyContent: "flex-start", color: colors.navy[9] },
            }}
          >
            {buttonLabel}
          </Button>
        </a>
      </Link>
      <Collapse in={route.includes(path)}>
        <List
          styles={{
            item: {
              listStyle: "none",
              marginLeft: "4.75rem",
              color: colors.navy[9],
            },
          }}
        >
          {(subItems || []).map((item) => (
            <List.Item key={item.path}>
              <Link href={path + item.path} passHref>
                <a
                  style={{ textDecoration: "none" }}
                  onClick={() => setNavbarIsOpen(false)}
                >
                  <Button
                    variant="subtle"
                    fullWidth
                    styles={{
                      inner: {
                        justifyContent: "flex-start",
                        color: colors.navy[9],
                      },
                    }}
                  >
                    {item.title}
                  </Button>
                </a>
              </Link>
            </List.Item>
          ))}
        </List>
      </Collapse>
    </div>
  );
};
