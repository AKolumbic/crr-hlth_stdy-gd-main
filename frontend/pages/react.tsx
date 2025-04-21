import * as React from "react";
import SectionPage from "../components/SectionPage";
import { Typography, Link, Box, Paper, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import FolderIcon from '@mui/icons-material/Folder';
import DescriptionIcon from '@mui/icons-material/Description';
import AlertBox from "../components/AlertBox";
import InfoCard from "../components/InfoCard";
import CustomButton from "../components/CustomButton";
import CodeSnippet from "../components/CodeSnippet";

const alertBoxCode = `import * as React from 'react';
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
}`;

const infoCardCode = `import * as React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
}

export default function InfoCard({ title, children }: InfoCardProps) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant=\"h6\" gutterBottom>{title}</Typography>
        <Typography variant=\"body2\">{children}</Typography>
      </CardContent>
    </Card>
  );
}`;

const customButtonCode = `import * as React from 'react';
import { Button } from '@mui/material';

interface CustomButtonProps {
  label: string;
  onClick?: () => void;
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
}

export default function CustomButton({ label, onClick, color = 'primary' }: CustomButtonProps) {
  return (
    <Button variant=\"contained\" color={color} onClick={onClick} sx={{ mr: 1, mb: 2 }}>
      {label}
    </Button>
  );
}`;

export default function ReactSection() {
  return (
    <SectionPage
      title="React"
      description="How React powers this Study Guide app."
    >
      <Typography variant="body1" paragraph>
        This app is built with{" "}
        <Link
          href="https://react.dev/"
          target="_blank"
          rel="noopener"
          underline="hover"
        >
          React
        </Link>{" "}
        and leverages component-based architecture for modular, reusable, and
        maintainable code.
      </Typography>

      <Typography variant="h6" gutterBottom>
        How React is Used Here
      </Typography>
      <Typography variant="body2" paragraph>
        - The app uses Next.js for routing and page management, but every page (in <b>pages/</b>) is a React component.<br />
        - All UI logic and rendering is handled by functional React components, using hooks for state and effects where needed.<br />
        - Shared UI pieces (like <b>NavBar</b>, <b>SectionPage</b>, <b>AlertBox</b>, etc.) are defined in <b>components/</b> and imported into pages as needed.<br />
        - Props are used to make components reusable and customizable (e.g., <b>SectionPage</b> wraps any content, <b>AlertBox</b> accepts severity and title).<br />
        - The structure encourages separation of concerns: page layout, navigation, and feature widgets are all separated into their own files and components.<br />
        - No class components or legacy patterns are used; the codebase is fully modern React with functional components and hooks.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Actual File & Component Structure
      </Typography>
      <Box
        component={Paper}
        sx={{
          p: 2,
          backgroundColor: (theme) => theme.palette.background.paper,
          fontFamily: "monospace",
          mb: 3,
          border: (theme) => `1px solid ${theme.palette.divider}`,
        }}
      >
        <List disablePadding>
          <ListItem disablePadding sx={{ pl: 0 }}>
            <ListItemIcon><FolderIcon color="primary" /></ListItemIcon>
            <ListItemText primary="frontend/" />
          </ListItem>
          <List disablePadding sx={{ pl: 4 }}>
            <ListItem disablePadding>
              <ListItemIcon><FolderIcon color="secondary" /></ListItemIcon>
              <ListItemText primary="components/" />
            </ListItem>
            <List disablePadding sx={{ pl: 8 }}>
              <ListItem disablePadding><ListItemIcon><DescriptionIcon color="info" /></ListItemIcon><ListItemText primary="AlertBox.tsx" /></ListItem>
              <ListItem disablePadding><ListItemIcon><DescriptionIcon color="info" /></ListItemIcon><ListItemText primary="CodeSnippet.tsx" /></ListItem>
              <ListItem disablePadding><ListItemIcon><DescriptionIcon color="info" /></ListItemIcon><ListItemText primary="ConceptCard.tsx" /></ListItem>
              <ListItem disablePadding><ListItemIcon><DescriptionIcon color="info" /></ListItemIcon><ListItemText primary="ConceptList.tsx" /></ListItem>
              <ListItem disablePadding><ListItemIcon><DescriptionIcon color="info" /></ListItemIcon><ListItemText primary="CustomButton.tsx" /></ListItem>
              <ListItem disablePadding><ListItemIcon><DescriptionIcon color="info" /></ListItemIcon><ListItemText primary="InfoCard.tsx" /></ListItem>
              <ListItem disablePadding><ListItemIcon><DescriptionIcon color="info" /></ListItemIcon><ListItemText primary="NavBar.tsx" /></ListItem>
              <ListItem disablePadding><ListItemIcon><DescriptionIcon color="info" /></ListItemIcon><ListItemText primary="SectionPage.tsx" /></ListItem>
            </List>
            <ListItem disablePadding>
              <ListItemIcon><FolderIcon color="secondary" /></ListItemIcon>
              <ListItemText primary="pages/" />
            </ListItem>
            <List disablePadding sx={{ pl: 8 }}>
              <ListItem disablePadding><ListItemIcon><DescriptionIcon color="action" /></ListItemIcon><ListItemText primary="_app.tsx" /></ListItem>
              <ListItem disablePadding><ListItemIcon><DescriptionIcon color="action" /></ListItemIcon><ListItemText primary="index.tsx" /></ListItem>
              <ListItem disablePadding><ListItemIcon><DescriptionIcon color="action" /></ListItemIcon><ListItemText primary="key-concepts.tsx" /></ListItem>
              <ListItem disablePadding><ListItemIcon><DescriptionIcon color="action" /></ListItemIcon><ListItemText primary="react.tsx" /></ListItem>
              <ListItem disablePadding><ListItemIcon><DescriptionIcon color="action" /></ListItemIcon><ListItemText primary="nextjs.tsx" /></ListItem>
              <ListItem disablePadding><ListItemIcon><DescriptionIcon color="action" /></ListItemIcon><ListItemText primary="typescript.tsx" /></ListItem>
              <ListItem disablePadding><ListItemIcon><DescriptionIcon color="action" /></ListItemIcon><ListItemText primary="mui.tsx" /></ListItem>
              <ListItem disablePadding><ListItemIcon><DescriptionIcon color="action" /></ListItemIcon><ListItemText primary="fastapi.tsx" /></ListItem>
              <ListItem disablePadding><ListItemIcon><DescriptionIcon color="action" /></ListItemIcon><ListItemText primary="auth.tsx" /></ListItem>
            </List>
          </List>
        </List>
      </Box>

      <Typography variant="body2">
        This structure matches the real files and folders in your project, showing how React components and pages are organized for clarity and reuse.
      </Typography>
    </SectionPage>
  );
}
