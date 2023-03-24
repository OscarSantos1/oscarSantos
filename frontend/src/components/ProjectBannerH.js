import ProjectCard from "@/components/ProjectCard";
import TechTag from "@/components/TechTag";
import { IoIosCloseCircle } from "react-icons/io";
import { DiGithubBadge } from "react-icons/di";
import { GiEarthAmerica } from "react-icons/gi";
import { useState, useEffect } from "react";

const ProjectBannerH = ({
  projects,
  horizontal,
  oneSelected,
  setOneSelected,
  selected,
  setSelected,
}) => {
  const [square, setSquare] = useState("");
  const [circle, setCircle] = useState("");
  function handleResize(box) {
    const projectBtns = document.getElementsByClassName("project-button");
    const padding = Math.round(box.offsetHeight * 0.15);
    const screenSize = window.innerWidth;
    box.style.paddingLeft = `${padding}px`;
    box.style.paddingRight = `${padding}px`;
    for (var i = 0; i < projectBtns.length; i++) {
      projectBtns[i].style.height = `${box.offsetHeight - padding * 2}px`;
      projectBtns[i].style.width = `${box.offsetHeight - padding * 2}px`;
    }
    document.documentElement.style.setProperty(
      "--with-open",
      `${Math.round((box.offsetHeight - padding * 2) * 1.5)}px`
    );
    setCircle(`${box.offsetHeight - padding * 2}px`);
    setSquare(`${Math.round((box.offsetHeight - padding * 2) * 1.5)}px`);
    if (horizontal && document.getElementById("video-frame")) {
      document.getElementById("video-frame").style.width = `${Math.round(
        (box.offsetHeight - padding * 2) * 1.5
      )}px`;
      document.getElementById("video-frame").style.height = `${
        box.offsetHeight - padding * 2
      }px`;
      document.getElementById("about-me").style.height =
        screenSize > 768
          ? `${document.getElementById("slider-frame").offsetHeight}px`
          : "40%";
    }
    if (
      oneSelected &&
      document.getElementById(selected.name) &&
      selected &&
      selected.name
    ) {
      document.getElementById(selected.name).style.width = `${Math.round(
        (box.offsetHeight - padding * 2) * 1.5
      )}px`;
      document.getElementById("project-container").style.width = `${Math.round(
        (box.offsetHeight - padding * 2) * 1.5
      )}px`;
      console.log("activated");
    }
    if (horizontal && document.getElementById("work-banner")) {
      const Width = document.getElementById("work-banner").offsetWidth;
      console.log(screenSize);
      const minHeight = screenSize > 1024 ? Width / 5.1 : Width / 3.5;
      document.getElementById("work-banner").style.minHeight = `${minHeight}px`;
    }
  }

  useEffect(() => {
    const box = document.getElementById("work-banner");
    handleResize(box);
    window.addEventListener("resize", () => handleResize(box));
  }, []);

  return (
    <div
      onLoad={() =>
        setTimeout(
          () => handleResize(document.getElementById("work-banner")),
          100
        )
      }
      id="work-banner"
      className="relative flex flex-col items-start justify-center bg-[#2954B5]  h-[50%] lg:h-[50%] w-full min-w-[800px] ml-[-40px] mt-10 rounded-r-full"
    >
      <h3 className="absolute top-1 lg:top-2 2xl:top-6 self-center text-lg lg:text-[17px] 2xl:text-[1.3vw] text-[#E7E7E7] fade-in">
        {oneSelected ? selected.name : "Latest Work"}
      </h3>
      {oneSelected && (
        <IoIosCloseCircle
          className="absolute flex items-center justify-center rounded-full right-9 top-1/2 mt-[-20px] cursor-pointer text-[#E7E7E7] z-30 fade-instant"
          onClick={() => {
            setOneSelected(false);
            document.getElementById(selected.name).style.width = circle;
            setSelected({});
            document.getElementById("project-container").style.width = "100%";
          }}
          size={40}
        />
      )}
      <div
        id="project-container"
        className={`relative flex items-center h-full w-full ease-in-out duration-700 fade-in`}
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.name}
            color={project.brandColor}
            position={project.position}
            open={project.open}
            hide={project.hide}
            display={!oneSelected || selected === project}
            oneSelected={oneSelected}
            selected={selected.name}
            square={square}
            set={() => {
              setOneSelected(true);
              setSelected(project);
              document.getElementById("project-container").style.width = square;
            }}
          />
        ))}
      </div>
      <div
        className={`absolute w-[100%] h-[68%] gap-10 flex justify-start z-20 pr-32 sm:pr-40 xl:pr-48 2xl:pr-60 ${
          oneSelected ? "fade-in-fast" : "hidden"
        }`}
      >
        <div className="flex items-center">
          <iframe
            id="video-frame"
            alt="Demo"
            width="330"
            height="220"
            src={selected.demo}
          ></iframe>
        </div>
        <div className="text-white flex flex-col justify-between w-full">
          <div>
            <div className="pr-12 w-full">
              {selected.technologies?.map((tech) => (
                <TechTag tech={tech} />
              ))}
            </div>
            <h5 className="mt-1 2xl:mt-4 md:text-[14px] lg:text-lg 2xl:text-[1.2vw]">
              About
            </h5>
            <p className="mt-1 2xl:mt-4 lg:text-[9pt] sm:text-[10px] md:text-[11px] 2xl:text-[0.8vw] w-full 2xl:max-w-[980px] xl:max-w-[500px] overflow-scroll hide-scroll">
              {selected.about}
            </p>
          </div>
          <div className="flex justify-start 2xl:text-[0.9vw] items-center pr-12">
            <a href={selected.url} className="flex justify-end">
              <button className="flex items-center justify-between w-28 2xl:w-auto pl-4 pr-2 py-1 lg:py-[7px] 2xl:py-1 bg-[#212530] active:bg-slate-600 ease-in duration-[40ms] rounded-l-full">
                <div className="">Go to site</div>
                <GiEarthAmerica className="text-[20px] 2xl:ml-4 " />
              </button>
            </a>
            <a href={selected.repo} className="">
              <button className="flex items-center justify-between w-[92px] 2xl:w-auto pl-2 pr-4 py-[1px] lg:py-[4px] 2xl:py-1 bg-[#212530] active:bg-slate-600 ease-in duration-[40ms] rounded-r-full border-l border-slate-600">
                <DiGithubBadge className="text-[26px] mr-4" />
                <div>Code</div>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBannerH;
