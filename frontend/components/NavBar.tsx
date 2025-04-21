import * as React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';

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
    <AppBar position="static" color="primary" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            Study Guide
          </Link>
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          {sections.map((section) => (
            <Button
              key={section.path}
              color="inherit"
              component={Link}
              href={section.path}
            >
              {section.label}
            </Button>
          ))}
          <ThemeSwitcher />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
