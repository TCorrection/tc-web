import { CSSProperties } from "react";

interface TextFieldStylesI {
  root: CSSProperties;
}

export const TextFieldStyles: TextFieldStylesI = {
  root: {
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 8,
    minHeight: 16,
    minWidth: 16,
  },
};
