import React from "react";
import { TextFieldProps } from "./props";
import { TextFieldStyles as styles } from "./styles";

export const TextField: React.FC<TextFieldProps> = ({}) => {
  return <input type="text" style={styles.root}></input>;
};
