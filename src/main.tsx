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
import LoggedInLayout from './layouts/LoggedInLayout.tsx';
import AdmissionPage from './routes/admission.tsx';
import NotFoundPage from './routes/special/notfound.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.VITE_BASE_URL}>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<IndexPage />} />

          {/* Routes with header & side-menu layout */}
          <Route element={<LoggedInLayout />}>
            <Route path='dashboard' element={<DashboardPage />} />

            <Route path='admission/:admissionId' element={<AdmissionPage />} />
          </Route>

          {/* 404 Not Found */}
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
