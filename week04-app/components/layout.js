import Head from 'next/head';
import Link from 'next/link';

export default function Layout( { children, home } ) {
  return (
    <div>
      <Head>
        <title>Tony Rochmans Basic Next.js App</title>
      </Head>
      <header>
        <nav>
          <a href="/">Home Page</a>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}