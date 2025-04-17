import * as React from 'react';
import { Box } from '@mui/material';

interface CodeSnippetProps {
  code: string;
  language?: string;
}

export default function CodeSnippet({ code, language = 'tsx' }: CodeSnippetProps) {
  return (
    <Box
      component="pre"
      sx={{
        background: '#222',
        color: '#fff',
        p: 2,
        borderRadius: 2,
        fontSize: '0.95rem',
        overflowX: 'auto',
        mb: 3,
      }}
    >
      <code>{code}</code>
    </Box>
  );
}
