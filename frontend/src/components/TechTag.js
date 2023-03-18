import React from "react";

const TechTag = ({ tech }) => {
  return (
    <div className="inline-block bg-slate-400 lg:py-1 md:py-1 lg:px-3 md:px-2 mr-1 lg:mb-1 md:mb-1 lg:text-[9pt] md:text-[10px] rounded-full">
      {tech}
    </div>
  );
};

export default TechTag;
