import { Box, Sheet, Typography } from '@mui/joy';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/sidebar';

function MainLayout() {
  return (
    <Box display='flex' flexDirection='column' width='100%'>
      {/* Header, only for toggling sidebar on mobile? */}
      <Sheet sx={{
          display: 'none',
          p: 2,
          borderBottom: '1px solid',
          borderColor: 'background.level1',
          boxShadow: 'sm'
      }}>
        <Typography level='h3'>Hospital</Typography>
      </Sheet>
      <Box display='flex' flexDirection='row'>
        {/* Menu */}
        <Sidebar />
        
        {/* Content */}
        <Box width='100%' p={4}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default MainLayout;