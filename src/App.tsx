import { CssVarsProvider, CssBaseline, Box } from '@mui/joy';

import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <CssVarsProvider disableTransitionOnChange defaultMode='light'>
        <CssBaseline />
        <Box
          sx={{
            backgroundColor: 'background.level1',
            display: 'flex',
            minHeight: '100dvh'
          }}
        >
          <Outlet />
        </Box>
      </CssVarsProvider>
    </div>
  );
}

export default App;
