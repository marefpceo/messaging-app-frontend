import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './utilities/Routes';
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider } from '@mui/material/styles';
import GlobalStyles from '@mui/material/GlobalStyles';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyledEngineProvider enableCssLayer>
      <GlobalStyles styles='@layer theme, base, mui, components, utilites;' />
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterLuxon}>
        <Router />
      </LocalizationProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
);
