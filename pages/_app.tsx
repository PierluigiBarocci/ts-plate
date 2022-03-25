import '../styles/globals.css';
import { ThemeProvider } from '@mui/material';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { IntlProvider } from 'react-intl';
import en from '@lang/en.json';
import it from '@lang/it.json';
import theme from 'theme';
const Langs = { en, it };

export default function App({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  const [shortLocale] = locale ? locale.split('-') : ['en'];

  const messages = useMemo(() => {
    switch (shortLocale) {
      case 'en':
        return Langs.en;
      case 'it':
        return Langs.it;
      default:
        return Langs.en;
    }
  }, [shortLocale]);

  const handleIntlError = (err: { code: string; message: string }) => {
    if (err.code === 'MISSING_TRANSLATION') {
      console.warn('Missing translation', err.message);
      return;
    }
    throw err;
  };

  return (
    <IntlProvider
      locale={shortLocale}
      messages={messages}
      onError={handleIntlError}
    >
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </IntlProvider>
  );
}
