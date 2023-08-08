import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import NavigationMenu from '../components/NavigationMenu';
import TopInformationBox from '../components/TopInformationBox';

export default function Dashboard() {
  const drawerWidth = 240;
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <TopInformationBox open={open} handleOpen={toggleDrawer} drawerWidth={drawerWidth} />
      <NavigationMenu open={open} handleOpen={toggleDrawer} drawerWidth={drawerWidth} />
      {/* CONTENT */}
      <Box
        component="main"
        sx={{
          backgroundColor: theme => (theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900]),
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      />
      {children}
    </Box>
  );
}
