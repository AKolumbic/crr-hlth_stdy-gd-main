import * as React from 'react';
import { IconButton, Tooltip, Menu, MenuItem, ListItemIcon, ListItemText } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import { ThemeContext, ThemeMode } from './ThemeContext';

const modeOptions: { label: string; value: ThemeMode; icon: React.ReactNode }[] = [
  { label: 'Light', value: 'light', icon: <LightModeIcon fontSize="small" /> },
  { label: 'Dark', value: 'dark', icon: <DarkModeIcon fontSize="small" /> },
  { label: 'System', value: 'system', icon: <SettingsBrightnessIcon fontSize="small" /> },
];

export default function ThemeSwitcher() {
  const { mode, setMode } = React.useContext(ThemeContext);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSelect = (selectedMode: ThemeMode) => {
    setMode(selectedMode);
    handleClose();
  };

  let icon = <SettingsBrightnessIcon />;
  if (mode === 'light') icon = <LightModeIcon />;
  if (mode === 'dark') icon = <DarkModeIcon />;

  return (
    <>
      <Tooltip title="Change theme">
        <IconButton color="inherit" onClick={handleClick} aria-label="theme switcher">
          {icon}
        </IconButton>
      </Tooltip>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {modeOptions.map(opt => (
          <MenuItem key={opt.value} selected={mode === opt.value} onClick={() => handleSelect(opt.value)}>
            <ListItemIcon>{opt.icon}</ListItemIcon>
            <ListItemText>{opt.label}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
