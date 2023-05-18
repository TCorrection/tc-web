import { COLORS } from "@/data/constants/colors";
import { FONTS } from "@/data/constants/fonts";
import { CSSProperties } from "react";

interface NavbarStylesI {
  root: CSSProperties;
  linkBoxRoot: CSSProperties;
  logo: CSSProperties;
}

export const NavbarStyles: NavbarStylesI = {
  root: {
    width: "100vw",
    backgroundColor: COLORS.green_25,

    display: "flex",
    flexDirection: "row",

    position: "sticky",
    top: 0,
    right: 0,
    justifyContent: "space-between",

    padding: 16,

    zIndex: 10,
    alignItems: "center",
  },
  linkBoxRoot: {
    display: "flex",
    flexDirection: "row",
    gap: 32,

    alignItems: "center",
  },
  logo: {
    fontSize: 36,
    fontFamily: FONTS.pacifico,

    color: COLORS.peach_200,

    cursor: "pointer",
  },
};
