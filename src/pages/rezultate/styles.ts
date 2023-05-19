import { COLORS } from "@/data/constants/colors";
import { CSSProperties } from "react";

interface ResultPageStylesI {
  tableRoot: CSSProperties;
  tableBorder: CSSProperties;
  tableHeader: CSSProperties;
  tableLink: CSSProperties;
}

export const ResultPageStyles: ResultPageStylesI = {
  tableRoot: {
    borderCollapse: "collapse",
  },
  tableBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "black",

    padding: 8,
    textAlign: "center",
  },
  tableHeader: {
    backgroundColor: COLORS.blue_green_25,
  },
  tableLink: {
    color: COLORS.purple_0,
    textDecoration: "underline",
  },
};
