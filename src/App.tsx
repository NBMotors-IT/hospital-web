import { Box, CssBaseline, CssVarsProvider, extendTheme } from '@mui/joy';

import { Outlet } from 'react-router-dom';

// Set default styles
// TODO: Move to a separate file?
const theme = extendTheme({
  components: {
    JoyCard: {
      defaultProps: {
        variant: 'plain',
      },
      styleOverrides: {
        root: ({ theme }) => ({
          boxShadow: theme.shadow.sm,
        }),
      },
    }
  }
});

function App() {
  return (
    <div>
      <CssVarsProvider theme={theme} disableTransitionOnChange defaultMode='light'>
        <CssBaseline />
        <Box display='flex' minHeight='100dvh' bgcolor='background.level1'>
          <Outlet />
        </Box>
      </CssVarsProvider>
    </div>
  );
}

export default App;
