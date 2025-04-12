import { styled, TextareaAutosize } from '@mui/material';
import React from 'react';

interface TextAreaProps {
  errorMessage?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const StyledTextArea = styled(TextareaAutosize)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(2),
  boxSizing: 'border-box',
  borderRadius: theme.spacing(1),
  border: `1px solid ${theme.palette.divider}`,
  '&:focus': {
    outline: 'none',
    borderColor: theme.palette.primary.main,
  },
}));

const ErrorDiv = styled('div')(({ theme }) => ({
  color: theme.palette.error.main,
  fontSize: '0.875rem',
  marginTop: theme.spacing(1),
}));

const TextArea: React.FC<TextAreaProps> = ({ value, onChange, errorMessage }) => {

  return <div>
    <StyledTextArea minRows={10} value={value} onChange={onChange} />
    {errorMessage && <ErrorDiv>{errorMessage}</ErrorDiv>}
  </div>
};

export default TextArea;