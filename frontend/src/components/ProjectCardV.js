import React from "react";
import Icon from "./Icon";

const ProjectCardV = ({ title, position, color }) => {
  return (
    <div
      className={`absolute flex justify-start items-center h-[35%] square ${position}`}
    >
      <div
        className={`flex justify-center items-center h-full square rounded-full ${color}`}
      >
        <Icon title={title} />
      </div>
      {/* <h4 className={`text-xs md:text-xl ${color} rounded-full px-3 py-2`}>
        {title}
      </h4> */}
    </div>
  );
};

export default ProjectCardV;
