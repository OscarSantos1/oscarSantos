import React from "react";

const TechTagV = ({ tech }) => {
  return (
    <div className="inline-block bg-slate-400 py-1 pt-[5px] lg:py-1 md:py-1 px-2 lg:px-4 md:px-3 mr-1 lg:mb-1 md:mb-1 mb-1 sm:text-[10px] md:text-[12px] lg:text-[16pt] xl:text-[20px] 2xl:text-[20px] text-[9px] rounded-full">
      {tech}
    </div>
  );
};

export default TechTagV;
