import { Dispatch, SetStateAction } from "react";

export interface DropdownProps {
  title: string;
  value: string | number;
  setValue: Dispatch<SetStateAction<string | number>>;
  optionList: {
    title: string;
    value: string | number;
  }[];
  width?: number;
}
