import * as React from 'react';
import { Alert, AlertTitle } from '@mui/material';

interface AlertBoxProps {
  severity?: 'error' | 'warning' | 'info' | 'success';
  title: string;
  children: React.ReactNode;
}

export default function AlertBox({ severity = 'info', title, children }: AlertBoxProps) {
  return (
    <Alert severity={severity} sx={{ mb: 2 }}>
      <AlertTitle>{title}</AlertTitle>
      {children}
    </Alert>
  );
}
