import React from "react";
import Icon from "./Icon";

const ProjectCardV = ({
  title,
  position,
  color,
  oneSelected,
  setOneSelected,
  selected,
  setSelected,
  set,
}) => {
  return (
    <div
      onClick={set}
      className={`absolute flex justify-center items-center ease-in-out duration-700 cursor-pointer ${
        !oneSelected
          ? "h-[36%]"
          : selected.name == title
          ? "z-10 h-[100%] opacity-0 fade-out-wait"
          : "opacity-0 h-[100%]"
      } ${position}`}
    >
      <div
        id="project-container"
        className={`relative flex justify-center items-center h-full ease-out duration-500 ${
          oneSelected && selected.name == title
            ? "rectangle"
            : "square rounded-full"
        } ${color}`}
      >
        <Icon title={title} />
        {!oneSelected && (
          <div className="absolute bottom-[12%] text-[#E7E7E7]">{title}</div>
        )}
      </div>
    </div>
  );
};

export default ProjectCardV;
