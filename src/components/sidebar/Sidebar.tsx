import { Assignment, Biotech, Close, Email, Group, Home, Hotel, Logout, Medication, Settings } from '@mui/icons-material';
import { Box, Divider, IconButton, List, ListItem, Sheet, Tooltip, Typography, useTheme } from '@mui/joy';

import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { closeSidebar } from '../../utils';
import DarkModeToggle from '../common/DarkModeToggle';
import SidebarNavLink from './SidebarNavLink';

function Sidebar() {
  const theme = useTheme();

  return (
    <>
      <Sheet onClick={() => closeSidebar()}
        sx={{
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
          zIndex: 'popup',
          width: '100%',
          height: '100%',
          backgroundColor: 'background.backdrop',
          backdropFilter: 'blur(8px)'
        }}
      />

      <Sheet
        sx={{
          backgroundColor: 'unset',
          height: '100vh',
          p: {
            xs: 0,
            xl: 2
          }
        }}>
        <Sheet
          sx={{
            boxShadow: 'sm',
            borderRadius: {
              xs: 0,
              xl: 'md'
            },
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
            zIndex: 'modal',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            p: 2,
            width: '300px',
            height: '100%',
            overflow: 'auto'
          }}
        >
          <Box display='flex' justifyContent='space-between'>
            <Box display='flex' gap={2} alignItems='center'>
              <img style={{ boxShadow: theme.shadow.sm, borderRadius: '30%' }} src={logo} />
              <Box display='flex' flexDirection='column'>
                <Typography level='title-lg'>Hospital</Typography>
                <Typography level='body-xs'>Dr Yourname Here</Typography>
              </Box>
            </Box>
            <Box display='flex' gap={1}>
              <Tooltip arrow title='Toggle dark mode'>
                <DarkModeToggle />
              </Tooltip>

              <Tooltip arrow title='Logout'>
                <IconButton
                  variant='soft'
                  color='primary'
                  size='sm'
                  component={Link}
                  to='/'
                >
                  <Logout />
                </IconButton>
              </Tooltip>

              <Tooltip arrow title='Close sidebar'>
                <IconButton
                  sx={{ display: { xs: 'inline-flex', xl: 'none' } }}
                  onClick={() => closeSidebar()}
                  variant='soft'
                  color='primary'
                  size='sm'
                >
                  <Close />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>

          <Divider />

          {/* Sidebar menu links */}
          <List variant='plain' size='lg' sx={{ gap: 0.5 }}>
            <ListItem>
              <SidebarNavLink to='/dashboard' text='Home'>
                <Home />
              </SidebarNavLink>
            </ListItem>

            <ListItem>
              <SidebarNavLink to='/admissions' text='My Admissions'>
                <Hotel />
              </SidebarNavLink>
            </ListItem>

            <ListItem>
              <SidebarNavLink to='/pharmacy' text='Pharmacy' disabled>
                <Medication />
              </SidebarNavLink>
            </ListItem>

            <ListItem>
              <SidebarNavLink to='/documents' text='Documents' disabled>
                <Assignment />
              </SidebarNavLink>
            </ListItem>

            <ListItem>
              <SidebarNavLink to='/lab' text='Lab'>
                <Biotech />
              </SidebarNavLink>
            </ListItem>

            <ListItem>
              <SidebarNavLink to='/messages' text='Messages'>
                <Email />
              </SidebarNavLink>
            </ListItem>

            <ListItem>
              <SidebarNavLink to='/employees' text='Employees'>
                <Group />
              </SidebarNavLink>
            </ListItem>

            <ListItem>
              <SidebarNavLink to='/settings' text='Settings' disabled>
                <Settings />
              </SidebarNavLink>
            </ListItem>
          </List>

          <Divider />
          <Box display='flex' justifyContent='space-between'>
            <Typography level='body-xs'>Emergency Room Module</Typography>
            <Typography level='body-xs'>v{APP_VERSION}</Typography>
          </Box>
        </Sheet>
      </Sheet>
    </>
  );
}

export default Sidebar;
