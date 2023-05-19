import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { DropdownProps } from "./props";

export const Dropdown: React.FC<DropdownProps> = ({
  title,
  value,
  setValue,
  optionList,
  width,
}) => {
  return (
    <FormControl fullWidth={!!width || true}>
      <InputLabel id="demo-simple-select-label">{title}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label="Age"
        style={!!width ? { width: width } : undefined}
        onChange={(e) => setValue(e.target.value)}
      >
        {optionList.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
