import Head from 'next/head'
import '../styles/bootstrap.min.css'
import '../styles/globals.css'
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <Header/>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
