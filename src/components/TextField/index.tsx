import React from "react";
import { TextFieldProps } from "./props";
import { TextFieldStyles as styles } from "./styles";

export const TextField: React.FC<TextFieldProps> = ({
  multiline,
  value,
  setValue,
}) => {
  return (
    <>
      {multiline ? (
        <textarea
          style={styles.rootMultiline}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      ) : (
        <input type="text" style={styles.rootSmall}></input>
      )}
    </>
  );
};
