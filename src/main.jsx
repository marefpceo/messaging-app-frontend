import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './utilities/Routes';

import { StyledEngineProvider } from '@mui/material/styles';
import GlobalStyles from '@mui/material/GlobalStyles';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyledEngineProvider enableCssLayer>
      <GlobalStyles styles='@layer theme, base, mui, components, utilites;' />
      <Router />
    </StyledEngineProvider>
  </React.StrictMode>,
);
