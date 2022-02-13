import type { AppProps } from 'next/app';
import { ApiPathProvider } from '../components/api-path/api-path-provider';
import Layout from '../components/layout/layout';
import { ThemeProvider } from '../components/theme/theme-context';
import { AuthProvider } from '../components/wallet/components/auth/auth-context';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  // const [theme, setTheme] = useState('light');
  // const value = { theme, setTheme };

  return (
    <ThemeProvider>
      <ApiPathProvider>
        <AuthProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthProvider>
      </ApiPathProvider>
    </ThemeProvider>
  );
}

export default MyApp;
