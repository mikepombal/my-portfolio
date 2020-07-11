import React from 'react';
import Head from 'next/head';
import Header from './Header';

interface Prop {
  node: React.ReactNode;
}

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Portfolio</title>
    </Head>

    <Header />

    <main>
      <div className="container">{children}</div>
    </main>
  </>
);

export default Layout;
