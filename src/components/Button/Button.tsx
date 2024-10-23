import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';

export interface CustomButtonProps extends Omit<MuiButtonProps, 'children'> {
    children: React.ReactNode;
    variant?: 'contained' | 'outlined' | 'text';
    size?: 'small' | 'medium' | 'large';
    color?: 'primary' | 'secondary' | 'error';
}

export const Button = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
    ({ children, variant = 'contained', size = 'medium', color = 'primary', ...props }, ref) => {
        return (
            <MuiButton
                ref={ref}
                variant={variant}
                size={size}
                color={color}
                {...props}
            >
                {children}
            </MuiButton>
        );
    }
);

Button.displayName = 'Button';