import { COLORS } from "@/data/constants/colors";
import { CSSProperties } from "react";

interface CorrectionPageStylesI {
  root: CSSProperties;
  footerRoot: CSSProperties;
}

export const CorrectionPageStyles: CorrectionPageStylesI = {
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 16,
  },
  footerRoot: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};
