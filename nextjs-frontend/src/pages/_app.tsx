import { AppProps } from 'next/app';
import { Akaya_Telivigala } from '@next/font/google';
import '../styles/globals.css';

const akayaTelivigala = Akaya_Telivigala({
  weight: '400', // Add the required weight property
  subsets: ['latin', 'telugu'], // Add the required subsets property
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={akayaTelivigala.className}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
