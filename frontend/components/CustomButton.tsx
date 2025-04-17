import * as React from 'react';
import { Button } from '@mui/material';

interface CustomButtonProps {
  label: string;
  onClick?: () => void;
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
}

export default function CustomButton({ label, onClick, color = 'primary' }: CustomButtonProps) {
  return (
    <Button variant="contained" color={color} onClick={onClick} sx={{ mr: 1, mb: 2 }}>
      {label}
    </Button>
  );
}
