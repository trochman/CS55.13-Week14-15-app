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
          <Link href="/">Home Page</Link>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}