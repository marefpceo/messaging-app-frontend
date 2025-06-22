import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './utilities/Routes';
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider } from '@mui/material/styles';
import GlobalStyles from '@mui/material/GlobalStyles';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyledEngineProvider enableCssLayer>
      <GlobalStyles styles='@layer theme, base, mui, components, utilites;' />
      <CssBaseline />
      <Router />
    </StyledEngineProvider>
  </React.StrictMode>,
);
