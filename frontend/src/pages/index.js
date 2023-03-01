import ProjectCard from "@/components/ProjectCard";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import projects from "../data/projects.json";

export default function Home() {
  const [oneSelected, setOneSelected] = useState(false);
  const [selected, setSelected] = useState({});

  return (
    <>
      <Head>
        <title>Oscar de los Santos | Portfolio</title>
        <meta name="description" content="Portfolio Oscar de los Santos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-[#FAFAFC] h-screen w-screen py-10 pl-10 lg:pr-10 md:pr-5">
        <h1 className="text-2xl md:text-6xl">Oscar de los Santos</h1>
        <p className=" text-xl ml-2">Full-Stack Developer</p>
        <div className="flex justify-between items-center h-1/3 min-h-[226px] overflow-clip lg:pl-14 lg:pr-10">
          <p className="w-1/2 lg:text-[16px] md:text-[14px] pr-4 md:pr-10 ">
            I'm passionate about creating new products and tools. I love working
            with other people and most importantly helping a vision come to
            life.
          </p>
          <div className="hidden md:flex relative justify-end items-center h-[226px] w-[500px] min-w-[500px] pr-[3px] bg-[#2954B5] rounded-full overflow-hidden activate">
            <div className="relative h-[220px] w-[220px] rounded-full overflow-hidden roll-in">
              <Image src="/../public/home-office.png" fill />
            </div>
          </div>
          <div className="flex flex-col justify-end items-center pb-[3px] h-5/6 w-[120px] bg-[#2954B5] rounded-full mr-10 activate md:hidden">
            <div className="relative h-[114px] w-[114px] rounded-full overflow-hidden roll-down md:hidden">
              <Image src="/../public/home-office.png" fill />
            </div>
          </div>
        </div>
        <div className="hidden md:flex md:flex-col md:items-center md:justify-center bg-[#2954B5] h-1/2 w-full min-w-[840px] ml-[-40px] mt-10 rounded-r-full">
          <h3 className="text-lg text-[#E7E7E7] -mt-4 mb-4 fade-in">
            {oneSelected ? selected.name : "Latest Work"}
          </h3>
          <div
            className={`px-14 flex ${
              oneSelected ? "justify-start" : "justify-between"
            } w-full`}
          >
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.name}
                color={project.brandColor}
                display={!oneSelected || selected === project}
                set={() => {
                  setOneSelected(true);
                  setSelected(project);
                }}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
