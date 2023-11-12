import { DarkMode, LightMode } from '@mui/icons-material';
import { IconButton, useColorScheme } from '@mui/joy';

function DarkModeToggle() {
  const { mode, setMode } = useColorScheme();

  return (
    <IconButton
      size='sm'
      variant='outlined'
      color='neutral'
      onClick={() => {
        if (mode === 'light') {
          setMode('dark');
        } else {
          setMode('light');
        }
      }}
      sx={[
        {
          '& > *:first-of-type': {
            display: mode === 'dark' ? 'none' : 'initial',
          },
          '& > *:last-of-type': {
            display: mode === 'light' ? 'none' : 'initial',
          },
        }
      ]}
    >
      <DarkMode />
      <LightMode />
    </IconButton>
  );
}

export default DarkModeToggle;