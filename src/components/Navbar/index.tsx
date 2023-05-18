import { PageLink } from "../PageLink";
import { NavbarStyles as styles } from "./styles";
import { NavbarProps } from "./props";
import Link from "next/link";

export const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <div style={styles.root}>
      <Link href={"./"}>
        <h2 style={styles.logo}>TCorrection</h2>
      </Link>
      <div style={styles.linkBoxRoot}>
        <PageLink href="./corectare">Corectare</PageLink>
        <PageLink href="#">Rezultate</PageLink>
        <PageLink href="#">Info</PageLink>
      </div>
    </div>
  );
};
