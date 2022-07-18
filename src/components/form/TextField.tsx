import React from "react";
import { TextField as TextFieldMui, StandardTextFieldProps } from '@mui/material';
import { FormField } from '../../types';

interface CustomTextFieldProps extends StandardTextFieldProps {
  handleOnChange: (field: FormField) => void
}

const TextField: React.FC<CustomTextFieldProps> = ({ handleOnChange, ...other }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    handleOnChange({ name, value });
  };

  return (
    <TextFieldMui
      onChange={handleChange}
      {...other}
    />
  )
}

export default TextField;