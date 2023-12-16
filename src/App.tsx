import { CssVarsProvider, CssBaseline, Box } from '@mui/joy';

import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <CssVarsProvider disableTransitionOnChange defaultMode='light'>
        <CssBaseline />
        <Box display='flex' minHeight='100dvh' bgcolor='background.level1'>
          <Outlet />
        </Box>
      </CssVarsProvider>
    </div>
  );
}

export default App;
