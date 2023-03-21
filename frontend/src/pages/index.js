import Head from "next/head";
import { useState, useEffect } from "react";
import projects from "../data/projects.json";
import Header from "@/components/Header";
import AboutMe from "@/components/AboutMe";
import ProjectBannerH from "@/components/ProjectBannerH";

export default function Home() {
  const [animate, setAnimate] = useState(false);

  return (
    <>
      <Head>
        <title>Oscar de los Santos | Portfolio</title>
        <meta name="description" content="Portfolio Oscar de los Santos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`bg-[#FAFAFC] h-screen w-screen py-10 pl-10 lg:pr-10 md:pr-5 ${
          animate ? "opacity-100" : "opacity-0"
        }`}
      >
        <Header />
        <AboutMe setAnimate={setAnimate} animate={animate} />
        <ProjectBannerH projects={projects} />
      </main>
    </>
  );
}
