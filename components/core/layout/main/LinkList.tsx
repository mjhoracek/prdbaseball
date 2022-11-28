import Link from "next/link";
import { useRouter } from "next/router";

import { Button, Menu } from "@mantine/core";

import { headerLinks } from "./linkSets";
import { useActiveLinkStyles } from "./styles";

interface ActiveLinkProps {
  label: string;
  href: string;
}

// TODO: This could be augmented to factor in if child routes are active.
// Ex: /events/123 would be a match for href = /events
const ActiveLink = ({ label, href }: ActiveLinkProps) => {
  const router = useRouter();
  const { classes } = useActiveLinkStyles();

  const isActive = router.asPath === href;

  return (
    <Link href={href}>
      <a className={isActive ? classes.active : classes.base}>{label}</a>
    </Link>
  );
};

interface Props {
  withAuthLinks?: boolean;
}

export const LinkList = ({ withAuthLinks }: Props) => {
  const router = useRouter();

  return (
    <>
      {headerLinks.map((link) => (
        <ActiveLink key={link.label} {...link} />
      ))}
    </>
  );
};
