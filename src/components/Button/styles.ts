import { COLORS } from "@/data/constants/colors";
import { CSSProperties } from "react";

export interface ButtonStylesI {
  root: CSSProperties;
  rootHover: CSSProperties;
}

export const ButtonStyles: ButtonStylesI = {
  root: {
    backgroundColor: COLORS.aesthetic_green_50,
    color: COLORS.beige_0,
    borderRadius: 8,
    border: "none",

    fontSize: 24,
    padding: 8,

    cursor: "pointer",
  },
  rootHover: {
    backgroundColor: COLORS.aesthetic_green_100,
    color: COLORS.text_white,
  },
};
