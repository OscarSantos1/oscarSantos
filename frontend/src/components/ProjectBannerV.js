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
    <div className="relative flex flex-col self-center justify-end items-center w-[100%] h-[100%] bg-[#2954B5] rounded-t-full">
      <h3 className="absolute top-1 self-center text-sm md:text-lg text-[#E7E7E7] mt-3 mb-4 fade-in">
        {oneSelected ? selected.name : "Latest Work"}
      </h3>
      <div className="relative h-[90%] w-[70%] fade-in">
        {projects.map((project) => (
          <ProjectCardV
            title={project.name}
            position={project.positionV}
            color={project.brandColor}
          />
        ))}
      </div>
      <div id="video-frame" width="330" height="220"></div>
    </div>
  );
};

export default ProjectBannerV;
