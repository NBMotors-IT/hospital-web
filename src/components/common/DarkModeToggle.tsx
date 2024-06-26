import { DarkMode, LightMode } from '@mui/icons-material';
import { IconButton, useColorScheme } from '@mui/joy';
import { SxProps } from '@mui/material';
import { forwardRef } from 'react';

interface Props {
  sx?: SxProps | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
}

const DarkModeToggle = forwardRef<HTMLButtonElement, Props>(({ sx, ...props }, ref) => {
  const { mode, setMode } = useColorScheme();

  return (
    <IconButton
      size='sm'
      variant='soft'
      color='primary'
      onClick={() => {
        if (mode === 'light') {
          setMode('dark');
        } else {
          setMode('light');
        }
      }}
      sx={{
        ...sx,
        '& > *:first-of-type': {
          display: mode === 'dark' ? 'none' : 'initial',
        },
        '& > *:last-of-type': {
          display: mode === 'light' ? 'none' : 'initial',
        },
      }}
      ref={ref}
      {...props}
    >
      <DarkMode />
      <LightMode />
    </IconButton>
  );
});

DarkModeToggle.displayName = 'DarkModeToggle';

export default DarkModeToggle;