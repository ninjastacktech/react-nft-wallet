import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout/layout';
import { useState } from 'react';
import {ThemeProvider} from '../components/theme/theme-context';

function MyApp({ Component, pageProps }: AppProps) {
  // const [theme, setTheme] = useState('light');
  // const value = { theme, setTheme };

  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
