import type { NextPage } from "next";
import Head from "next/head";
import { AboutMe } from "./Content/AboutMe";
import { Introduction } from "./Content/Introduction";
import { Projects } from "./Content/Projects";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Resumow</title>
        <meta name="description" content="Dudow's resume" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <Introduction />
        <Projects />
        <AboutMe />
      </main>
    </div>
  );
};

export default Home;
