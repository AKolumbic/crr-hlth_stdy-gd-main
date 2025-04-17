import * as React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface ConceptCardProps {
  title: string;
  description: string;
}

export default function ConceptCard({ title, description }: ConceptCardProps) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>{title}</Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Card>
  );
}
