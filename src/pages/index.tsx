import { Hero } from "components/Hero";
import type { NextPage } from "next";
import { useState } from "react";

import styles from './styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Hero />
    </div>
  );
};

export default Home;
