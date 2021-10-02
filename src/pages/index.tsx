import type { NextPage } from "next";
import Head from "next/head";
import Login from "../components/Login";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;1,100;1,300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Login />
    </>
  );
};

export default Home;
