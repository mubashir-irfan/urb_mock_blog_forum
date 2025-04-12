import React, { useState } from 'react';
import { styled, TextField } from '@mui/material';

interface TextInputProps {
  errorMessage?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // onChange is now a prop
}

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& label.Mui-focused': {
    color: theme.palette.primary.main,
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: theme.palette.primary.main,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.palette.divider,
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
}));

const TextInput: React.FC<TextInputProps> = ({ value, onChange, errorMessage }) => {

  return <StyledTextField value={value} error={!!errorMessage} helperText={errorMessage} onChange={onChange} />;
};

export default TextInput;