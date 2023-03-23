import Head from "next/head";
import { useState, useEffect } from "react";
import projects from "../data/projects.json";
import Header from "@/components/Header";
import AboutMe from "@/components/AboutMe";
import ProjectBannerH from "@/components/ProjectBannerH";
import ProjectBannerV from "@/components/ProjectBannerV";

export default function Home() {
  const [animate, setAnimate] = useState(false);
  const [horizontal, setHorizontal] = useState(false);
  const [oneSelected, setOneSelected] = useState(false);
  const [selected, setSelected] = useState({});

  useEffect(() => {
    function checkAspect() {
      setHorizontal(window.innerWidth / window.innerHeight > 1 ? true : false);
    }
    checkAspect();
    window.addEventListener("resize", checkAspect);
  });

  return (
    <>
      <Head>
        <title>Oscar de los Santos | Portfolio</title>
        <meta name="description" content="Portfolio Oscar de los Santos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        id="main"
        className={`flex flex-col justify-between bg-[#FAFAFC] h-screen w-screen 2xl:min-h-[1150px] py-4 pl-4 pr-4 md:py-10 lg:pr-10 ${
          animate ? "opacity-100" : "opacity-0"
        }`}
      >
        <Header />
        <AboutMe setAnimate={setAnimate} animate={animate} />
        {horizontal ? (
          <ProjectBannerH
            projects={projects}
            horizontal={horizontal}
            oneSelected={oneSelected}
            setOneSelected={setOneSelected}
            selected={selected}
            setSelected={setSelected}
          />
        ) : (
          <ProjectBannerV
            horizontal={horizontal}
            projects={projects}
            oneSelected={oneSelected}
            setOneSelected={setOneSelected}
            selected={selected}
            setSelected={setSelected}
          />
        )}
      </main>
    </>
  );
}
