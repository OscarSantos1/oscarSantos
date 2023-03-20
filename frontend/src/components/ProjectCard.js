import React from "react";
import { IoIosCheckmarkCircle, IoIosCart, IoMdBulb } from "react-icons/io";
import Icon from "./Icon";

const ProjectCard = ({
  title,
  color,
  position,
  open,
  hide,
  set,
  oneSelected,
  selected,
}) => {
  const c = color;
  return (
    <>
      <div
        className={`absolute flex flex-col justify-center items-center ${
          !oneSelected
            ? `${position} fade-instant`
            : selected == title
            ? `one z-10 ${open} ${color} w-[330px] opacity-0`
            : `one ${hide} opacity-0`
        }`}
      >
        <div
          className={`flex items-center justify-center ${color} rounded-full cursor-pointer overflow-clip project-button`}
        >
          <div
            id="project-button"
            onClick={set}
            className={`flex items-center justify-center ${color} rounded-full cursor-pointer overflow-clip project-button`}
          >
            <Icon title={title} />
          </div>
          {!oneSelected && (
            <h3 className="absolute -bottom-6 text-[#E7E7E7] mt-2">{title}</h3>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
