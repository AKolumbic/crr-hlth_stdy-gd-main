import * as React from 'react';
import { Container, Typography } from '@mui/material';

export default function MuiSection() {
  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Typography variant="h4" gutterBottom>MUI</Typography>
      <Typography variant="body1" paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus, risus at venenatis dictum, massa sapien laoreet orci, eu dictum dolor erat a elit.
      </Typography>
    </Container>
  );
}
