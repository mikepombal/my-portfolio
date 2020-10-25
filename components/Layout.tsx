import React from 'react';
import Head from 'next/head';
import Nav from './Nav';

interface Prop {
  children: React.ReactNode;
}

const Layout: React.FC<Prop> = ({ children }) => (
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
