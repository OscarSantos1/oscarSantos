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
        className={`absolute top-[-110px] flex flex-col justify-center items-center ${
          !oneSelected
            ? `${position} fade-instant`
            : selected == title
            ? `one z-10 ${open} ${color} w-[330px] opacity-0`
            : `one ${hide} opacity-0`
        }`}
      >
        <div
          onClick={set}
          className={`flex items-center justify-center h-[220px] w-[220px] ${color} rounded-full cursor-pointer overflow-clip`}
        >
          <Icon title={title} />
        </div>
        {!oneSelected && <h3 className="text-[#E7E7E7] mt-2">{title}</h3>}
      </div>
    </>
  );
};

export default ProjectCard;
