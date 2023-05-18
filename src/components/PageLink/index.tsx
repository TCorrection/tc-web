import Link from "next/link";
import { PageLinkProps } from "./props";
import { PropsWithChildren, useState } from "react";
import { PageLinkStyles as styles } from "./styles";

export const PageLink: React.FC<PropsWithChildren<PageLinkProps>> = ({
  href,
  children,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      href={href}
      style={{ ...styles.root, ...(isHovered ? styles.rootHover : null) }}
    >
      {children}
    </Link>
  );
};
