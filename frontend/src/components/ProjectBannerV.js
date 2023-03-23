import { DiGithubBadge } from "react-icons/di";
import { GiEarthAmerica } from "react-icons/gi";
import TechTagV from "@/components/TechTagV";
import ProjectCardV from "./ProjectCardV";
import { useEffect } from "react";

const ProjectBannerV = ({
  horizontal,
  projects,
  oneSelected,
  setOneSelected,
  selected,
  setSelected,
}) => {
  useEffect(() => {
    function setMinWidth() {
      if (!horizontal && document.getElementById("vertical-banner")) {
        const height = document.getElementById("vertical-banner").offsetHeight;
        const minWidth = height / 1.5;
        document.getElementById("about-me").style.height = `40%`;
        console.log(minWidth);
        document.getElementById(
          "vertical-banner"
        ).style.minWidth = `${minWidth}px`;
      }
    }
    window.addEventListener("resize", setMinWidth);
  });
  return (
    <div
      id="vertical-banner"
      className="relative flex flex-col self-center justify-end items-center w-[100%] h-[100%] bg-[#2954B5] pt-10 md:pt-12 2xl:pt-20 pb-2 rounded-t-full"
    >
      {oneSelected ? (
        <button
          onClick={() => {
            setOneSelected(false);
            setSelected({});
          }}
          className="absolute top-[10px] md:top-[15px] 2xl:top-[25px] self-center text-xs md:text-base 2xl:text-2xl font-bold bg-[#E7E7E7] text-[#2954B5] px-2  2xl:px-3 pt-[1px] rounded-full fade-instant"
        >
          Close
        </button>
      ) : (
        <h3 className="absolute top-[10px] md:top-[15px] 2xl:top-[25px] self-center text-sm md:text-lg 2xl:text-2xl text-[#E7E7E7] fade-in">
          Latest Work
        </h3>
      )}

      <div className="relative flex items-end h-[100%] w-[70%] ">
        <div
          className={`relative w-full fade-in ease-in-out duration-700 ${
            oneSelected ? "h-[36%] 2xl:h-[50%]" : "h-[100%]"
          }`}
        >
          {projects.map((project) => (
            <ProjectCardV
              key={project.id}
              title={project.name}
              position={project.positionV}
              color={project.brandColor}
              oneSelected={oneSelected}
              setOneSelected={setOneSelected}
              selected={selected}
              setSelected={setSelected}
              set={() => {
                setOneSelected(true);
                setSelected(project);
              }}
            />
          ))}
        </div>
        <div
          className={`absolute ${
            oneSelected ? "flex justify-center fade-in-fast z-10" : "hidden"
          } bottom-0 left-[50%] translate-x-[-50%] h-[36%] 2xl:h-[50%] rectangle`}
        >
          <iframe className="h-full rectangle" src={selected.demo}></iframe>
        </div>
        <div
          className={`absolute ${
            oneSelected ? "flex justify-center fade-in-fast" : "hidden"
          } bottom-[36%] 2xl:bottom-[50%] left-[50%] translate-x-[-50%] h-[64%] 2xl:h-[50%] w-[100%]`}
        >
          <div className="text-white flex flex-col justify-between bg-slate-500/20 pb-2">
            <div className="flex flex-col gap-0 md:gap-2 justify-around items-center h-[90%] 2xl:max-h-[500px] xl:max-h-[400px] lg:max-h-[400px] bg-emerald-600/30 ">
              <h3 className="text-base sm:text-xl md:text-2xl lg:text-3xl">
                {selected.name}
              </h3>
              <div className="flex justify-center text-center">
                <div className="">
                  {selected.technologies?.map((tech) => (
                    <TechTagV tech={tech} />
                  ))}
                </div>
              </div>
              <h5 className="mt-1 sm:text-xl md:text-xl lg:text-3xl">About</h5>
              <p className="mt-1 lg:text-[13pt] xl:text-[15pt] md:text-base lg:max-w-[600px] overflow-scroll max-h-24 text-center mx-[-20px] bg-lime-400/20">
                {selected.about}
              </p>
            </div>
            <div className="flex justify-center items-center bg-red-400/20">
              <div className="flex md:text-xl xl:text-[20px] ">
                <a href={selected.url} className="flex justify-end">
                  <button className="flex items-center justify-between w-28 md:w-40 xl:w-40 pl-4 pr-2 lg:py-2 md:py-1 bg-[#212530] active:bg-slate-600 ease-in duration-[40ms] rounded-l-full">
                    <div>Go to site</div>
                    <GiEarthAmerica className="pb-1" size={20} />
                  </button>
                </a>
                <a href={selected.repo} className="">
                  <button className="flex items-center justify-between w-[92px] md:w-36 xl:w-36 pl-2 pr-4 md:py-2 xl:py-2 lg:py-2 bg-[#212530] active:bg-slate-600 ease-in duration-[40ms] rounded-r-full border-l border-slate-600">
                    <DiGithubBadge className="pb-1" size={26} />
                    <div>Code</div>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBannerV;
