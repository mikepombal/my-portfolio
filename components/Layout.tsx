import React from 'react';
import Head from 'next/head';
import Nav from './Nav';

interface Prop {
  node: React.ReactNode;
}

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Portfolio</title>
    </Head>

    <div className="flex w-screen h-screen">
      <Nav />

      <main>
        <div className="container">{children}</div>
      </main>
    </div>
  </>
);

export default Layout;
