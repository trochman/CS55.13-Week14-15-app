import Head from 'next/head'
import '../styles/bootstrap.min.css'
import '../styles/globals.css'
import Header from '../components/Header';
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <Header/>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp
