import { Menu } from '@mui/icons-material';
import { Box, IconButton, Sheet } from '@mui/joy';
import { Outlet } from 'react-router-dom';

import Sidebar from '../components/sidebar/Sidebar';
import { toggleSidebar } from '../utils';

function LoggedInLayout() {
  return (
    <Box display='flex' flexDirection='column' width='100%'>
      {/* Header, only for toggling sidebar on mobile? */}
      <Sheet
        sx={{
          display: { xs: 'flex', xl: 'none' },
          position: 'sticky',
          top: 0,
          zIndex: 'popup',
          p: 2,
          boxShadow: 'sm'
        }}
      >
        <IconButton
          onClick={() => toggleSidebar()}
          variant='soft'
          color='primary'
          size='sm'
        >
          <Menu />
        </IconButton>
      </Sheet>
      <Box display='flex' flexDirection='row'>
        {/* Menu */}
        <Sidebar />

        {/* Content */}
        <Box width='100%' p={2} pl={{ xs: 2, xl: 0 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

export default LoggedInLayout;
