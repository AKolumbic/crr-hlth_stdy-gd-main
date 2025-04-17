import * as React from 'react';
import { Container, Typography, Box } from '@mui/material';

interface SectionPageProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export default function SectionPage({ title, description, children }: SectionPageProps) {
  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Typography variant="h3" gutterBottom>{title}</Typography>
      {description && (
        <Typography variant="subtitle1" paragraph>{description}</Typography>
      )}
      <Box mt={4}>{children}</Box>
    </Container>
  );
}
