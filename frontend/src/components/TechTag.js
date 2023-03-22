import React from "react";

const TechTag = ({ tech }) => {
  return (
    <div className="inline-block bg-slate-400 py-1 lg:py-1 md:py-1 px-2 lg:px-3 md:px-2 mr-1 lg:mb-1 md:mb-1 mb-1 md:text-[10px] lg:text-[9pt] xl:text-[20px] 2xl:text-[20px] text-[9px] rounded-full">
      {tech}
    </div>
  );
};

export default TechTag;
