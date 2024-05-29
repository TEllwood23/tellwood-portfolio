import { AppProps } from 'next/app';
import { Akaya_Telivigala } from '@next/font/google';
import { ParallaxProvider } from 'react-scroll-parallax';
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

// // pages/_app.tsx
// import { AppProps } from 'next/app';
// import dynamic from 'next/dynamic';
// import '../styles/globals.css';

// // Dynamically import ParallaxProvider with no SSR
// const ParallaxProvider = dynamic(
//   () => import('react-scroll-parallax').then(mod => mod.ParallaxProvider),
//   { ssr: false }
// );

// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <ParallaxProvider>
//       <Component {...pageProps} />
//     </ParallaxProvider>
//   );
// }

// export default MyApp;

// pages/_app.tsx
// import { AppProps } from 'next/app';
// import dynamic from 'next/dynamic';
// import '../styles/globals.css';

// // Dynamically import ParallaxProvider with no SSR
// const ParallaxProvider = dynamic(
//   () => import('react-scroll-parallax').then(mod => mod.ParallaxProvider),
//   { ssr: false }
// );

// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <ParallaxProvider>
//       <Component {...pageProps} />
//     </ParallaxProvider>
//   );
// }

// export default MyApp;

// pages/_app.tsx
// import { AppProps } from 'next/app';
// import dynamic from 'next/dynamic';
// import '../styles/globals.css';

// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//       <Component {...pageProps} />
//   );
// }

// export default MyApp;
