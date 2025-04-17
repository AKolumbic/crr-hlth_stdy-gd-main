import * as React from 'react';
import SectionPage from '../components/SectionPage';
import AlertBox from '../components/AlertBox';
import InfoCard from '../components/InfoCard';
import CustomButton from '../components/CustomButton';
import CodeSnippet from '../components/CodeSnippet';

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

export default function KeyConceptsPage() {
  return (
    <SectionPage
      title="Component Architecture & Reusable Design Patterns"
      description="Below are examples of reusable MUI components and how to implement them. Each example includes the component in action and its source code."
    >
      <AlertBox severity="success" title="Reusable AlertBox">
        This is a reusable AlertBox component using MUI's Alert and AlertTitle.
      </AlertBox>
      <CodeSnippet code={alertBoxCode} />

      <InfoCard title="InfoCard Component">
        InfoCard is a flexible card for displaying information or content blocks.
      </InfoCard>
      <CodeSnippet code={infoCardCode} />

      <CustomButton label="Custom Button" color="secondary" onClick={() => alert('Clicked!')} />
      <CodeSnippet code={customButtonCode} />
    </SectionPage>
  );
}
