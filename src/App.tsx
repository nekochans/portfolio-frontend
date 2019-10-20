import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './styles/theme';
import IndexPage from './pages/IndexPage';

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <IndexPage />
      </ThemeProvider>
    </>
  );
};

export default App;
