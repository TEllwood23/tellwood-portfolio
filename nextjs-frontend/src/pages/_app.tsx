// import { AppProps } from 'next/app';
// import { Akaya_Telivigala } from '@next/font/google'; //Importing the Akaya Teliviaga font
// import '../styles/globals.css';

// function MyApp({ Component, pageProps }: AppProps) {
//   <div className={akayaTelivigala.className}>
//   <Component {...pageProps} />
// </div>
// }

// // Initialize the font
// const akayaTelivigala = Akaya_Telivigala(
//   {
//     subsets: ['latin'],
//     weight: '400',
//   }
// );

// export default MyApp;

// pages/_app.tsx
// pages/_app.tsx
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
