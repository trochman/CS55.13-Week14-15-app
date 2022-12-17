import { ChakraProvider } from "@chakra-ui/react";
import Head from 'next/head';
import Header from '../components/Header';

export default function Layout( { children, home } ) {
  return (
    <ChakraProvider>
      <Head>
        <title>Tony Rochmans Basic Next.js App</title>
      </Head>
      <header>
        <Header/>
      </header>
      <main>{children}</main>
    </ChakraProvider>
  );
}