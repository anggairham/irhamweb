import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";
export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Angga Irham Stianto Web</title>
        <meta name='description' content='Personal Website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
