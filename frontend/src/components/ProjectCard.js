import React from "react";
import { IoIosCheckmarkCircle, IoIosCart, IoMdBulb } from "react-icons/io";

const ProjectCard = ({ title, color, set, display }) => {
  const c = color;
  return (
    <div
      className={`${
        display ? "flex" : "fade-out"
      } flex-col justify-center items-center h-full w-1/4 fade-in`}
    >
      <div
        onClick={set}
        className={
          color == "pink"
            ? "relative flex items-center justify-center h-[220px] w-[220px] bg-[#E0C4C5] rounded-full cursor-pointer overflow-clip"
            : color == "green"
            ? "relative flex items-center justify-center h-[220px] w-[220px] bg-[#8F9C2F] rounded-full cursor-pointer overflow-clip"
            : "relative flex items-center justify-center h-[220px] w-[220px] bg-[#E93860] rounded-full cursor-pointer overflow-clip"
        }
      >
        {title == "Do me." && (
          <IoIosCheckmarkCircle className="text-white" size={100} />
        )}
        {title == "notARealStore" && (
          <IoIosCart className="text-white" size={100} />
        )}
        {title == "Blank Page" && (
          <IoMdBulb className="text-white" size={100} />
        )}
      </div>
      <h3 className="text-[#E7E7E7] mt-2">{title}</h3>
    </div>
  );
};

export default ProjectCard;
