import { COLORS } from "@/data/constants/colors";
import { CSSProperties } from "react";

interface PageLinkStylesI {
  root: CSSProperties;
  rootHover: CSSProperties;
}

export const PageLinkStyles: PageLinkStylesI = {
  root: {
    cursor: "pointer",

    textDecoration: "none",

    color: COLORS.TEXT_GREY_900,

    padding: "4px 8px",

    maxWidth: 248,
    overflow: "hidden",
    textOverflow: "ellipsis",

    textAlign: "center",

    fontSize: 24,

    height: "fit-content",
    width: "fit-content",
  },
  rootHover: {
    color: COLORS.TEXT_GREY_600,
  },
};
