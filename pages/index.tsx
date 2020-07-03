import Head from 'next/head';

export const Home = (): JSX.Element => (
  <div className="container">
    <Head>
      <title>Portfolio</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1 className="title">Welcome to my portfolio</h1>
    </main>
  </div>
);

export default Home;
