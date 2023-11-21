import { Box, IconButton, Sheet } from '@mui/joy';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';
import { Menu } from '@mui/icons-material';
import { toggleSidebar } from '../utils';

function LoggedInLayout() {
  return (
    <Box display='flex' flexDirection='column' width='100%'>
      {/* Header, only for toggling sidebar on mobile? */}
      <Sheet sx={{
          display: { xs: 'flex', xl: 'none' },
          position: 'sticky',
          top: 0,
          zIndex: 9000,
          p: 2,
          borderBottom: '1px solid',
          borderColor: 'background.level1',
          boxShadow: 'sm'
      }}>
        <IconButton
          onClick={() => toggleSidebar()}
          variant='outlined'
          color='neutral'
          size='sm'
        >
          <Menu />
        </IconButton>
      </Sheet>
      <Box display='flex' flexDirection='row'>
        {/* Menu */}
        <Sidebar />

        {/* Content */}
        <Box width='100%' p={2}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default LoggedInLayout;
