import ProjectCard from "@/components/ProjectCard";
import TechTag from "@/components/TechTag";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import projects from "../data/projects.json";
import { IoIosCloseCircle } from "react-icons/io";
import { DiGithubBadge } from "react-icons/di";
import { GiEarthAmerica } from "react-icons/gi";

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
        <div className="flex justify-between items-center h-1/3 min-h-[226px] overflow-clip lg:pl-14 md:pr-10">
          <p className="w-1/2 lg:text-[16px] md:text-[14px] pr-4 md:pr-10 ">
            I'm passionate about creating new products and tools. I love working
            with other people and most importantly helping a vision come to
            life.
          </p>
          <div className="flex relative justify-end items-center h-[226px] w-[500px] pr-[3px] bg-[#2954B5] rounded-full overflow-hidden activate">
            <div className="absolute right-1 roll-in">
              <div className="relative h-[220px] w-[220px] rounded-full overflow-hidden">
                <Image src="/../public/home-office.png" fill />
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden md:flex md:flex-col md:items-center md:justify-center px-14 bg-[#2954B5] h-1/2 w-full min-w-[840px] ml-[-40px] mt-10 rounded-r-full">
          <h3 className="absolute top-1 text-lg text-[#E7E7E7] mt-3 mb-4 fade-in">
            {oneSelected ? selected.name : "Latest Work"}
          </h3>
          {oneSelected && (
            <IoIosCloseCircle
              className="absolute flex items-center justify-center rounded-full right-9 top-1/2 mt-[-20px] cursor-pointer text-[#E7E7E7] z-30 fade-instant"
              onClick={() => {
                setOneSelected(false);
                setSelected({});
              }}
              size={40}
            />
          )}
          <div className="relative flex w-full fade-in">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.name}
                color={project.brandColor}
                display={!oneSelected || selected === project}
                oneSelected={oneSelected}
                selected={selected.name}
                set={() => {
                  setOneSelected(true);
                  setSelected(project);
                }}
              />
            ))}
            <div
              className={`absolute w-[90%] flex gap-10 lg:gap-[8%] justify-start top-[-110px] z-20 ${
                oneSelected ? "fade-in-fast" : "hidden"
              }`}
            >
              <iframe
                className="min-w-[330px]"
                width="330"
                height="220"
                src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"
              ></iframe>
              <div className="text-white flex flex-col justify-between">
                <div>
                  <div className="pr-12">
                    {selected.technologies?.map((tech) => (
                      <TechTag tech={tech} />
                    ))}
                  </div>
                  <h5 className="mt-1 lg:text-lg md:text-[14px]">About</h5>
                  <p className="mt-1 lg:text-[9pt] md:text-[11px] h-24 lg:max-w-[440px] md:max-w-[300px] overflow-scroll hide-scroll">
                    {selected.about}
                  </p>
                </div>
                <div className="flex md:justify-start items-center pr-12">
                  <div className="flex justify-end">
                    <button className="flex items-center justify-between w-28 pl-4 pr-2 lg:py-2 md:py-1 bg-[#212530]  rounded-l-full">
                      <div>Go to site</div>
                      <GiEarthAmerica className="pb-1" size={20} />
                    </button>
                  </div>
                  <div className="">
                    <button className="flex items-center justify-between w-[92px] pl-2 pr-4 lg:py-[5px] md:py-[1px] bg-[#212530]  rounded-r-full border-l border-slate-600">
                      <DiGithubBadge className="pb-1" size={26} />
                      <div>Code</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
