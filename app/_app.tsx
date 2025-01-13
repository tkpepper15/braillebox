import '../styles/globals.css';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp; 