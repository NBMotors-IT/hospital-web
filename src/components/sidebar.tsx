import { Egg, Home, KeyboardArrowDown, LocalHospital } from '@mui/icons-material';
import { Box, Divider, List, ListItem, ListItemButton, ListItemContent, ListItemDecorator, Sheet, Typography } from '@mui/joy';
import Toggler from './toggler';

function Sidebar() {
  return (
    <Sheet sx={{
      position: {
        xs: 'fixed',
        md: 'sticky'
      },
      top: 0,
      zIndex: 9999,
      // display: 'flex',
      display: {
        xs: 'none', // TODO: Button for toggling sidebar on mobile
        md: 'flex'
      },
      flexDirection: 'column',
      gap: 2,
      p: 2,
      width: '320px',
      height: '100vh',
      borderRight: '1px solid',
      borderColor: 'divider'
    }}>
      <Box display='flex' gap={1} alignItems='center'>
        <LocalHospital />
        <Typography level='title-lg'>Hospital</Typography>
      </Box>

      <Divider />

      {/* Sidebar menu links */}
      <List variant='plain' sx={{ gap: 1 }}>
        <ListItem>
          <ListItemButton>
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
  );
}

export default Sidebar;