import React from "react";
import { InputLabel, MenuItem, FormControl, SelectProps, Select as SelectMui } from '@mui/material';
import { FormField } from '../../types';

interface CustomSelectProps extends SelectProps {
  handleOnChange: (field: FormField) => void
  options: string[],
  inputLabel: string
}

const Select: React.FC<CustomSelectProps> = ({ handleOnChange, options, inputLabel, ...other }) => {
  return (
    <FormControl fullWidth>
      <InputLabel>{inputLabel}</InputLabel>
      <SelectMui
        onChange={(e) => handleOnChange({ name: e.target.name as string, value: e.target.value as string })}
        {...other}>
        {options.map((item, key) => (
          <MenuItem key={key} value={item}>{item}</MenuItem>
        ))}
      </SelectMui>
    </FormControl>
  )
}

export default Select;