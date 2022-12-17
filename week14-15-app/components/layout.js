import { ChakraProvider } from "@chakra-ui/react";
import Head from 'next/head';
import Link from 'next/link';

export default function Layout( { children, home } ) {
  return (
    <ChakraProvider>
      <Head>
        <title>Tony Rochmans Basic Next.js App</title>
      </Head>
      <header>
        <nav>
          <Link href="/">Home Page</Link> &nbsp;|&nbsp;
          <Link href={'/product/product_list'}>Products</Link> &nbsp;|&nbsp;
          <Link href={'/contact/contact_list'}>Contacts</Link> &nbsp;|&nbsp;
          <Link href={'/manufacturer/manufacturer_list'}>Manufacturers</Link>
        </nav>
      </header>
      <main>{children}</main>
    </ChakraProvider>
  );
}