import * as React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
}

export default function InfoCard({ title, children }: InfoCardProps) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>{title}</Typography>
        <Typography variant="body2">{children}</Typography>
      </CardContent>
    </Card>
  );
}
