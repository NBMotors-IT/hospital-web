import { Close, Egg, Home, KeyboardArrowDown, LocalHospital } from '@mui/icons-material';
import { Box, Divider, IconButton, List, ListItem, ListItemButton, ListItemContent, ListItemDecorator, Sheet, Typography } from '@mui/joy';
import Toggler from '../Toggler';
import SidebarNavLink from './SidebarNavLink';
import { closeSidebar } from '../../utils';
import DarkModeToggle from '../common/DarkModeToggle';

function Sidebar() {
  return (
    <>
      <Sheet onClick={() => closeSidebar()} sx={{
        display: {
          xs: 'block',
          xl: 'none'
        },
        position: 'fixed',
        transform: {
          xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))',
          xl: 'none'
        },
        top: 0,
        zIndex: 9998,
        width: '100%',
        height: '100%',
        backgroundColor: 'background.backdrop',
        backdropFilter: 'blur(8px)'
      }} />

      <Sheet sx={{
        position: {
          xs: 'fixed',
          xl: 'sticky'
        },
        transform: {
          xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))',
          xl: 'none'
        },
        transition: 'transform 0.2s, width 0.2s',
        top: 0,
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        p: 2,
        width: '320px',
        height: '100vh',
        borderRight: '1px solid',
        borderColor: 'divider',
        overflow: 'auto'
      }}>
        <Box display='flex' justifyContent='space-between'>
          <Box display='flex' gap={1} alignItems='center'>
            <LocalHospital />
            <Typography level='title-lg'>Hospital</Typography>
          </Box>
          <Box display='flex' gap={1}>
            <DarkModeToggle />

            <IconButton
              sx={{ display: { xs: 'inline-flex', xl: 'none' } }}
              onClick={() => closeSidebar()}
              variant='outlined'
              color='neutral'
              size='sm'
            >
              <Close />
            </IconButton>
          </Box>
        </Box>

        <Divider />

        {/* Sidebar menu links */}
        <List variant='plain' sx={{ gap: 1 }}>
          <ListItem>
            <ListItemButton component={SidebarNavLink} to='/dashboard'>
              <ListItemDecorator>
                <Home />
              </ListItemDecorator>
              <Typography level='title-sm'>Home</Typography>
            </ListItemButton>
          </ListItem>

          <ListItem nested>
            <Toggler
              renderToggle={({ open, setOpen }) => (
                <ListItemButton onClick={() => setOpen(!open)}>
                  <ListItemDecorator>
                    <Egg />
                  </ListItemDecorator>
                  <ListItemContent>
                    <Typography level='title-sm'>Eggs</Typography>
                  </ListItemContent>
                  <KeyboardArrowDown
                    sx={{ transform: open ? 'rotate(180deg)' : 'none' }}
                  />
                </ListItemButton>
              )}
            >
              <List sx={{ gap: 0.5 }}>
                <ListItem sx={{ mt: 0.5 }}>
                  <ListItemButton><Typography level='title-sm'>Add egg</Typography></ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton><Typography level='title-sm'>List eggs</Typography></ListItemButton>
                </ListItem>
              </List>
            </Toggler>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <ListItemDecorator>
                <Egg />
              </ListItemDecorator>
              <Typography level='title-sm'>Another Egg</Typography>
            </ListItemButton>
          </ListItem>
        </List>

        <Divider />
        <Box display='flex' justifyContent='space-between'>
          <Typography level='body-xs'>Emergency Room Module</Typography>
          <Typography level='body-xs'>v0.0.1</Typography>
        </Box>
      </Sheet>
    </>
  );
}

export default Sidebar;
