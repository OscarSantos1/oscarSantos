import React from "react";

const TechTag = ({ tech }) => {
  return (
    <div className="inline-block bg-slate-400 lg:py-2 md:py-1 lg:px-4 md:px-3 mr-2 mb-2 rounded-full">
      {tech}
    </div>
  );
};

export default TechTag;
