import * as React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Checkbox } from '@mui/material';

interface ConceptListProps {
  concepts: string[];
}

export default function ConceptList({ concepts }: ConceptListProps) {
  const [checked, setChecked] = React.useState<number[]>([]);

  const handleToggle = (idx: number) => () => {
    const currentIndex = checked.indexOf(idx);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(idx);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  return (
    <List>
      {concepts.map((concept, idx) => (
        <ListItem key={concept} button onClick={handleToggle(idx)}>
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={checked.indexOf(idx) !== -1}
              tabIndex={-1}
              disableRipple
              inputProps={{ 'aria-labelledby': `concept-${idx}` }}
            />
          </ListItemIcon>
          <ListItemText id={`concept-${idx}`} primary={concept} />
        </ListItem>
      ))}
    </List>
  );
}
