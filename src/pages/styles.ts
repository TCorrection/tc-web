import { COLORS } from "@/data/constants/colors";
import { CSSProperties } from "react";

interface HomeStylesI {
  textSpecial: CSSProperties;
  detailsBoxRoot: CSSProperties;
  detailsBoxTitle: CSSProperties;
  mainRoot: CSSProperties;
  textIndent: CSSProperties;
}

export const HomeStyles: HomeStylesI = {
  textSpecial: {
    color: COLORS.green_50,
  },
  detailsBoxRoot: {
    display: "flex",
    flexDirection: "column",
    gap: 16,

    maxWidth: 500,

    alignSelf: "center",
  },
  detailsBoxTitle: {
    textAlign: "center",
    fontSize: 28,
  },
  mainRoot: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  textIndent: {
    textIndent: 8,
    textAlign: "justify",
    fontSize: 18,
  },
};
