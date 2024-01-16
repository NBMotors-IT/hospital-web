import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App.tsx';

import IndexPage from './routes/index.tsx';
import DashboardPage from './routes/dashboard.tsx';
import LoggedInLayout from './layouts/LoggedInLayout.tsx';
import AdmissionPage from './routes/admissions/admission.tsx';
import NotFoundPage from './routes/special/notfound.tsx';
import AdmissionsIndexPage from './routes/admissions/index.tsx';
import MessagesIndexPage from './routes/messages/index.tsx';
import MessagePage from './routes/messages/message.tsx';
import MessageCreatePage from './routes/messages/new.tsx';
import LabPage from './routes/lab/index.tsx';
import AIDiagnosticsPage from './routes/lab/diagnostics.tsx';
import StaffListPage from './routes/staff/index.tsx';
import StaffInfoPage from './routes/staff/staff.tsx';

// eslint-disable-next-line unicorn/prefer-query-selector
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.VITE_BASE_URL}>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<IndexPage />} />

          {/* Routes with header & side-menu layout */}
          <Route element={<LoggedInLayout />}>
            <Route path='dashboard' element={<DashboardPage />} />

            <Route path='admissions/:admissionId' element={<AdmissionPage />} />
            <Route path='admissions' element={<AdmissionsIndexPage />} />

            <Route path='lab/diagnostics' element={<AIDiagnosticsPage />} />
            <Route path='lab' element={<LabPage />} />

            <Route path='messages/new' element={<MessageCreatePage />} />
            <Route path='messages/:messageId' element={<MessagePage />} />
            <Route path='messages' element={<MessagesIndexPage />} />

            <Route path='staff/:employeeId' element={<StaffInfoPage />} />
            <Route path='staff' element={<StaffListPage />} />
          </Route>

          {/* 404 Not Found */}
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
