import * as React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

export default function Footer() {
  const theme = useTheme();
  return (
    <Box
      component="footer"
      sx={{
        mt: 8,
        py: 2,
        textAlign: 'center',
        bgcolor: theme.palette.background.paper,
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Typography variant="body2" color="text.secondary">
        {new Date().getFullYear()} Study Guide App · Built with React & Material UI
      </Typography>
    </Box>
  );
}
