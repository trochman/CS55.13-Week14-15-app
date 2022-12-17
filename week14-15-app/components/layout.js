import { ChakraProvider } from "@chakra-ui/react";
import Head from 'next/head';
import Header from '../components/Header';

export default function Layout( { children, home } ) {
  return (
    <ChakraProvider>
      <Head>
        <title>Tony Rochmans Basic Next.js App</title>
      </Head>
      <main>{children}</main>
    </ChakraProvider>
  );
}