import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Link from 'next/link';

const sections = [
  { label: 'Home', path: '/' },
  { label: 'Key Concepts', path: '/key-concepts' },
  { label: 'React', path: '/react' },
  { label: 'Next.js', path: '/nextjs' },
  { label: 'TypeScript', path: '/typescript' },
  { label: 'MUI', path: '/mui' },
  { label: 'FastAPI', path: '/fastapi' },
  { label: 'Auth', path: '/auth' }
];

export default function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Study Guide
        </Typography>
        <Box>
          {sections.map((section) => (
            <Button
              key={section.path}
              color="inherit"
              component={Link}
              href={section.path}
              sx={{ ml: 1 }}
            >
              {section.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
