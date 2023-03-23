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
  square,
}) => {
  const c = color;
  return (
    <>
      <div
        id={title}
        onClick={() => (document.getElementById(title).style.width = square)}
        className={`absolute flex flex-col justify-center items-center ${position} ${
          !oneSelected
            ? `opacity-1 fade-instant square`
            : selected == title
            ? `z-10 opacity-0 one-square ${color}`
            : `opacity-0 fade-out`
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
            <h3 className="absolute 2xl:text-[20px] -bottom-6 2xl:-bottom-10 text-[#E7E7E7] mt-2">
              {title}
            </h3>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
