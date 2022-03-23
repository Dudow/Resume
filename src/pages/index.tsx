import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import AboutMe from "./Content/AboutMe";
import Introduction from "./Content/Introduction";
import Projects from "./Content/Projects";

function jump(h: string) {
  history.replaceState(null, "", h);
}

const Home: NextPage = () => {
  useEffect(() => {
    window.addEventListener("resize", function () {
      jump(window.location.hash);
    });
  }, []);

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
