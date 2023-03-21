import React from "react";
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
          className="absolute top-[10px] md:top-[15px] self-center text-xs md:text-base font-bold bg-[#212530] text-[#2954B5] px-2 pt-[1px] rounded-full fade-instant"
        >
          Close
        </button>
      ) : (
        <h3 className="absolute top-[10px] md:top-[15px] self-center text-sm md:text-lg text-[#E7E7E7] fade-in">
          Latest Work
        </h3>
      )}

      <div className="relative flex items-end h-[100%] w-[70%]">
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
          } bottom-0 left-[50%] translate-x-[-50%] h-[36%] rectangle bg-black`}
        ></div>
        <div
          className={`absolute ${
            oneSelected ? "flex fade-in-fast" : "hidden"
          } bottom-[36%] left-[50%] translate-x-[-50%] h-[64%] aspect-square bg-lime-500/20`}
        ></div>
      </div>
      <div id="video-frame" width="330" height="220"></div>
    </div>
  );
};

export default ProjectBannerV;
