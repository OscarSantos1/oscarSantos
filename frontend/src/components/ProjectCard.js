import React from "react";
import { IoIosCheckmarkCircle, IoIosCart, IoMdBulb } from "react-icons/io";

const ProjectCard = ({ title, color, set, oneSelected, selected }) => {
  const c = color;
  return (
    <>
      <div
        className={
          title == "Do me."
            ? `absolute top-[-110px] ${
                !oneSelected
                  ? "one fade-instant"
                  : selected == "Do me."
                  ? "z-10 one-square bg-[#8f9c2f] w-[330px] opacity-0"
                  : "one-out opacity-0"
              } flex flex-col justify-center items-center`
            : title == "notARealStore"
            ? `absolute top-[-110px] ${
                !oneSelected
                  ? "two fade-instant"
                  : selected == "notARealStore"
                  ? "one z-10 two-square bg-[#E93860] w-[330px] opacity-0"
                  : "one two-out opacity-0"
              }  flex flex-col justify-center items-center`
            : `absolute top-[-110px] ${
                !oneSelected
                  ? "three fade-instant"
                  : selected == "Blank Page"
                  ? "one three-square bg-[#E0C4C5] w-[330px] opacity-0"
                  : "one three-out opacity-0"
              } flex flex-col justify-center items-center`
        }
      >
        <div
          onClick={set}
          className={
            color == "pink"
              ? `flex items-center justify-center h-[220px] w-[220px] bg-[#E0C4C5] rounded-full cursor-pointer overflow-clip`
              : color == "green"
              ? `flex items-center justify-center h-[220px] w-[220px] bg-[#8F9C2F] rounded-full cursor-pointer overflow-clip`
              : `flex items-center justify-center h-[220px] w-[220px] bg-[#E93860] rounded-full cursor-pointer overflow-clip`
          }
        >
          {title == "Do me." ? (
            <IoIosCheckmarkCircle className="text-white" size={100} />
          ) : title == "notARealStore" ? (
            <IoIosCart className="text-white" size={100} />
          ) : (
            <IoMdBulb className="text-white" size={100} />
          )}
        </div>
        {!oneSelected && <h3 className="text-[#E7E7E7] mt-2">{title}</h3>}
      </div>
    </>
  );
};

export default ProjectCard;
