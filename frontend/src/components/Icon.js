import { IoIosCheckmarkCircle, IoIosCart, IoMdBulb } from "react-icons/io";

const Icon = ({ title }) => {
  return (
    <>
      {title == "Do me." ? (
        <IoIosCheckmarkCircle className="text-white h-[80%] w-[50%]" />
      ) : title == "notARealStore" ? (
        <IoIosCart className="text-white h-[80%] w-[50%]" />
      ) : (
        <IoMdBulb className="text-white h-[80%] w-[50%]" />
      )}
    </>
  );
};

export default Icon;
