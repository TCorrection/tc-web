import { Dispatch, SetStateAction } from "react";

export interface TextFieldProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  multiline?: boolean;
}
