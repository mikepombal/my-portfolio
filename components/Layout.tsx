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

    <>
      <div className="flex w-screen h-screen bg-gray-200">
        <Nav />

        <main className="flex-grow">{children}</main>
      </div>
      <div id="modal-root" />
    </>
  </>
);

export default Layout;
