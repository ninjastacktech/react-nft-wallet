import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout/layout';
import { useState } from 'react';
import { ThemeProvider } from '../components/theme/theme-context';
import { ApiPathProvider } from '../components/api-path/api-path-provider';

function MyApp({ Component, pageProps }: AppProps) {
  // const [theme, setTheme] = useState('light');
  // const value = { theme, setTheme };

  return (
    <ThemeProvider>
      <ApiPathProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApiPathProvider>
    </ThemeProvider>
  );
}

export default MyApp;
