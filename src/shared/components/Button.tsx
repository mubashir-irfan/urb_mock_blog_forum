'use client';

import { Button as MUIButton, ButtonProps } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import clsx from 'clsx';
import React from 'react';

type VariantType = 'primary' | 'secondary';

interface PrimaryButtonProps extends ButtonProps {
  children: React.ReactNode;
  className?: string;
  'data-testid'?: string;
  variantType?: VariantType;
}

const Button: React.FC<PrimaryButtonProps> = ({
  children,
  className = '',
  variantType = 'primary',
  'data-testid': testId = `primary-button`,
  ...props
}) => {
  const theme = useTheme();

  const isSecondary = variantType === 'secondary';

  const backgroundColor = isSecondary
    ? 'transparent'
    : theme.palette.primary.main;

  const textColor = isSecondary
    ? theme.palette.secondary.main
    : theme.palette.primary.contrastText;

  return (
    <MUIButton
      type="button"
      variant="contained"
      disableElevation
      className={clsx(
        'px-4 py-2 font-medium rounded-md text-sm md:text-base',
        className
      )}
      style={{
        backgroundColor,
        color: textColor,
      }}
      aria-label={typeof children === 'string' ? children : undefined}
      data-testid={testId}
      {...props}
    >
      {children}
    </MUIButton>
  );
};

export default Button;
