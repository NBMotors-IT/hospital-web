import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import App from './App.tsx';

import IndexPage from './routes/index.tsx';
import DashboardPage from './routes/dashboard.tsx';
import MainLayout from './mainLayout.tsx';
import { Box, Typography } from '@mui/joy';
import { Sick } from '@mui/icons-material';
import AdmissionPage from './routes/admission.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.VITE_BASE_URL}>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<IndexPage />} />

          {/* Routes with header & side-menu layout */}
          <Route element={<MainLayout />}>
            <Route path='dashboard' element={<DashboardPage />} />

            <Route path='admission/:admissionId' element={<AdmissionPage />} />
          </Route>

          <Route
            path='*'
            element={
              <Box display='flex' flexDirection='column' width='100%' alignItems='center' justifyContent='center'>
                <Sick color='warning' sx={{ fontSize: '80px' }} />
                <Typography level='h2' textAlign='center'>Page Not Found</Typography>
              </Box>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);