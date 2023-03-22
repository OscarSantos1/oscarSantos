import { DiGithubBadge } from "react-icons/di";
import { GiEarthAmerica } from "react-icons/gi";
import TechTagV from "@/components/TechTagV";
import ProjectCardV from "./ProjectCardV";

const ProjectBannerV = ({
  projects,
  oneSelected,
  setOneSelected,
  selected,
  setSelected,
}) => {
  return (
    <div className="relative flex flex-col self-center justify-end items-center w-[100%] h-[100%] bg-[#2954B5] pt-10 md:pt-12 pb-2 rounded-t-full">
      {oneSelected ? (
        <button
          onClick={() => {
            setOneSelected(false);
            setSelected({});
          }}
          className="absolute top-[10px] md:top-[15px] self-center text-xs md:text-base font-bold bg-[#E7E7E7] text-[#2954B5] px-2 pt-[1px] rounded-full fade-instant"
        >
          Close
        </button>
      ) : (
        <h3 className="absolute top-[10px] md:top-[15px] self-center text-sm md:text-lg text-[#E7E7E7] fade-in">
          Latest Work
        </h3>
      )}

      <div className="relative flex items-end h-[100%] w-[70%] ">
        <div
          className={`relative w-full fade-in ease-in-out duration-700 ${
            oneSelected ? "h-[36%]" : "h-[100%]"
          }`}
        >
          {projects.map((project) => (
            <ProjectCardV
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
            oneSelected ? "flex fade-in-fast z-10" : "hidden"
          } bottom-0 left-[50%] translate-x-[-50%] h-[36%] rectangle`}
        >
          <iframe
            className="h-full rectangle"
            id="video-frame"
            src={selected.demo}
          ></iframe>
        </div>
        <div
          className={`absolute ${
            oneSelected ? "flex justify-center fade-in-fast" : "hidden"
          } bottom-[36%] left-[50%] translate-x-[-50%] h-[64%] w-[100%]`}
        >
          <div className="text-white flex flex-col justify-around">
            <div className="flex flex-col gap-2 justify-around items-center h-[70%]">
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
              <h5 className="mt-1 sm:text-xl md:text-2xl lg:text-3xl">About</h5>
              <p className="mt-1 lg:text-[13pt] xl:text-[15pt] md:text-xl h-24 lg:max-w-[600px] text-center overflow-scroll hide-scroll">
                {selected.about}
              </p>
            </div>
            <div className="flex justify-center items-center">
              <div className="flex md:text-xl xl:text-[20px]">
                <a href={selected.url} className="flex justify-end">
                  <button className="flex items-center justify-between w-28 md:w-40 xl:w-40 pl-4 pr-2 lg:py-2 md:py-1 bg-[#212530] active:bg-slate-600 ease-in duration-[40ms] rounded-l-full">
                    <div>Go to site</div>
                    <GiEarthAmerica className="pb-1" size={20} />
                  </button>
                </a>
                <a href={selected.repo} className="">
                  <button className="flex items-center justify-between w-[92px] md:w-36 xl:w-36 pl-2 pr-4 md:py-2 xl:py-2 lg:py-[5px] bg-[#212530] active:bg-slate-600 ease-in duration-[40ms] rounded-r-full border-l border-slate-600">
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
