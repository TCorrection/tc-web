import { CSSProperties } from "react";

interface TextFieldStylesI {
  rootSmall: CSSProperties;
  rootMultiline: CSSProperties;
}

export const TextFieldStyles: TextFieldStylesI = {
  rootSmall: {
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 4,
    minHeight: 24,
    minWidth: 120,
  },
  rootMultiline: {
    minWidth: 750,
    minHeight: 300,
    height: "fit-content",
    padding: 4,

    fontSize: 16,
  },
};
